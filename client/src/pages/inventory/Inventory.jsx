import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Navbar from "../../components/NavBar";

const cookies = new Cookies();
const Inventories = () => {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const fetchAllInventory = async () => {
      try {
        const res = await axios.get("/inventory", {
          headers: {
            Authorization: cookies.get("Authorization"),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        setInventories(res.data.data);
      } catch (err) {
        throw err;
      }
    };
    fetchAllInventory();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Inventory</h1>
      {inventories.map((inv) => (
        <p>{inv.title}</p>
      ))}
    </>
  );
};

export default Inventories;
