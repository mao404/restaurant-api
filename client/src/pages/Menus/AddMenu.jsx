import axios from "axios";
import Cookies from "universal-cookie";
import React from "react";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar";

function AddMenu() {
  const { showBoundary } = useErrorBoundary();
  const [menu, setMenu] = useState({
    title: "",
    description: "",
    price: null,
    image: null,
  });

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleChange = (e) => {
    setMenu((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/menu/", menu, {
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
  return (
    <>
      <Navbar />
      <div className="form">
        <h1>Añadir nuevo menú</h1>
        <input
          type="text"
          placeholder="Titulo"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="Descripción"
          onChange={handleChange}
          name="description"
        />
        <input
          type="number"
          placeholder="Precio"
          onChange={handleChange}
          name="price"
        />
        <Button onClick={handleClick}>Agregar Menú</Button>
      </div>
    </>
  );
}

export default AddMenu;
