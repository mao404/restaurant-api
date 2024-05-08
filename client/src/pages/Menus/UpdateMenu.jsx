import axios from "axios";
import Cookies from "universal-cookie";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { useErrorBoundary } from "react-error-boundary";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar";

function UpdateMenu() {
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState({
    title: "",
    description: "",
    price: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  const menuId = location.pathname.split("/")[3];

  const handleChange = (e) => {
    setMenu((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/menu/${menuId}`, menu, {
        headers: {
          Authorization: cookies.get("Authorization"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      navigate("/menu");
    } catch (err) {
      console.log(err.response);
      showBoundary(err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // You can await here
        const res = await axios.get("/menu/" + menuId, {
          headers: {
            Authorization: cookies.get("Authorization"),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        setData(res.data.data);
      } catch (err) {
        showBoundary(err);
      }
    }
    fetchData();
  }, [cookies, menuId, showBoundary]);

  return (
    <>
      <Navbar />
      <div className="form">
        <h1>Actualizar menú</h1>
        <input
          type="text"
          placeholder="Titulo"
          name="title"
          onChange={handleChange}
          defaultValue={data.title}
        />
        <input
          type="text"
          placeholder="Descripción"
          name="description"
          onChange={handleChange}
          defaultValue={data.description}
        />
        <input
          type="number"
          placeholder="Precio"
          name="price"
          onChange={handleChange}
          defaultValue={data.price}
        />

        <Button onClick={handleClick}>Actualizar</Button>
        <Button>
          <Link
            underline="none"
            color="inherit"
            component={RouterLink}
            to={`/menu/image/${menuId}`}
          >
            Subir Imagen
          </Link>
        </Button>
      </div>
    </>
  );
}

export default UpdateMenu;
