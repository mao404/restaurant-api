import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import axios from "axios";
import baseApiPath from "../../services/api";
import Navbar from "../../components/NavBar";
import Button from "../../components/Button";
import { Box } from "@mui/material";

const cookies = new Cookies();
const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchAllMenus = async () => {
      try {
        const res = await axios.get(baseApiPath + "/menu", {
          headers: {
            Authorization: cookies.get("Authorization"),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        setMenus(res.data.data);
      } catch (err) {
        throw err;
      }
    };
    fetchAllMenus();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(baseApiPath + "/menu/" + id, {
        headers: {
          Authorization: cookies.get("Authorization"),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Menú</h1>
        <Box className="menus">
          {menus.map((menu) => (
            <div className="menu" key={menu.id}>
              {menu.image && <img src={menu.image} alt="" />}
              <h2>{menu.title}</h2>
              <p>{menu.description}</p>
              <span>$ {menu.price}</span>
              <br />
              <Button>
                <Link
                  underline="none"
                  color="inherit"
                  component={RouterLink}
                  to={`/menu/update/${menu.id}`}
                >
                  Actualizar
                </Link>
              </Button>
              <Button color="error" onClick={() => handleDelete(menu.id)}>
                Borrar
              </Button>
            </div>
          ))}
        </Box>
        <Button>
          <Link
            underline="none"
            color="inherit"
            component={RouterLink}
            to={"/menu/add"}
          >
            Añadir menú
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Menus;
