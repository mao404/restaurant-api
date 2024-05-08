import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import Navbar from "../../components/NavBar";
import Button from "../../components/Button";
import { Box, Grid, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";

const styles = {
  modal: {
    position: "absolute",
    height: "80vh",
    width: "90vw",
    backgroundColor: "white",
    border: "2px solid #000",
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const cookies = new Cookies();
const AddOrder = () => {
  const [menus, setMenus] = useState([]);
  let [count, setCount] = useState(1);

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };

  const decrementCount = () => {
    if (count <= 1) {
    } else {
      count = count - 1;
      setCount(count);
    }
  };

  const [cart, setCart] = useState([
    {
      quantity: null,
      comment: "",
    },
  ]);

  const handleChange = (e) => {
    setCart((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const openCloseModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchAllMenus = async () => {
      try {
        const res = await axios.get("/menu", {
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

  return (
    <>
      <Navbar />
      <div>
        <h1>Ordenar</h1>
        <Box className="orders">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {menus.map((menu) => (
              <Grid item xs={6} sm={8} md={4} key={menu.id}>
                <div className="menu" key={menu.id}>
                  {menu.image && <img src={menu.image} alt="" />}
                  <h2>{menu.title}</h2>
                  <p>{menu.description}</p>
                  <span>$ {menu.price}</span>
                  <br />
                  <Button
                    onClick={() => {
                      openCloseModal();
                      setModalData(menu);
                    }}
                  >
                    Agregar
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Modal
          componentsProps={{
            backdrop: {
              style: {
                backgroundColor: "transparent",
              },
            },
          }}
          open={modal}
          onClose={openCloseModal}
        >
          <Box sx={styles.modal}>
            <div align="center">
              <h2>Agregar orden</h2>
              <p>{modalData.title}</p>
              <p>{modalData.id}</p>
              {/* <div id="modal-img">{<img src={modalData.image} alt="" />}</div> */}
              <Box>
                <input type="hidden" name="id" value={modalData.id} />
                <TextField
                  disabled
                  type="number"
                  label="Cantidad"
                  name="quantity"
                  value={count}
                />
                <Button onClick={decrementCount}>-</Button>
                <Button onClick={incrementCount}>+</Button>
                <TextField
                  type="text"
                  label="Comentario"
                  name="comment"
                  helperText="(Opcional)"
                />
                <Button onChange={handleChange} onClick={console.log(cart)}>
                  Agregar US$ {count * modalData.price}
                </Button>
              </Box>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AddOrder;
