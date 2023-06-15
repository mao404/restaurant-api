import axios from "axios";
import React from "react";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import baseApiPath from "../../services/api";
import { useNavigate } from "react-router-dom";

function AddMenu() {
  const { showBoundary } = useErrorBoundary();
  const [menu, setMenu] = useState({
    title: "",
    description: "",
    price: null,
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMenu((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(baseApiPath + "/menu/", menu);
      navigate("/");
    } catch (err) {
      console.log(err.response);
      showBoundary(err);
    }
  };
  return (
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
      {/* <input type="file" placeholder='Imagen' onChange={handleChange} name='image' /> */}
      <button onClick={handleClick}>Agregar Menú</button>
    </div>
  );
}

export default AddMenu;
