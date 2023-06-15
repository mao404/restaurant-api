import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseApiPath from "../../services/api";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchAllMenus = async () => {
      try {
        const res = await axios.get(baseApiPath + "/menu");
        setMenus(res.data.data);
      } catch (err) {
        throw err;
      }
    };
    fetchAllMenus();
  }, []);

  return (
    <div>
      <h1>Menú</h1>
      <div className="menus">
        {menus.map((menu) => (
          <div className="menu" key={menu.id}>
            {menu.image && <img src={menu.image} alt="" />}
            <h2>{menu.title}</h2>
            <p>{menu.description}</p>
            <span>{menu.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to={"/menu/add"}>Añadir menú</Link>
      </button>
    </div>
  );
};

export default Menus;