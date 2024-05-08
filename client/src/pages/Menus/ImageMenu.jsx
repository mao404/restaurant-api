import axios from "axios";
import Cookies from "universal-cookie";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useMemo } from "react";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/NavBar";

function ImageMenu() {
  const { showBoundary } = useErrorBoundary();
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [menu, setMenu] = useState({
    id: "",
    image: null,
    file: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);

  const menuId = location.pathname.split("/")[3];

  const handleFile = (e) => {
    let file = e.target.files[0];
    setMenu({ file: file });
    console.log(file);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      let file = menu.file;
      if (!file) {
        setMsg("No hay archivo seleccionado");
        return;
      }
      const formData = new FormData();
      formData.append("id", menuId);
      formData.append("image", file);
      // Barra de upload
      setMsg("Subiendo archivo");
      setProgress((prevState) => {
        return { ...prevState, started: true };
      });
      // api request ...
      await axios.post("/menu/image", formData, {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        data: formData,
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },
      });
      navigate("/menu");
    } catch (err) {
      setMsg("Error al subir archivo");
      console.log(err.response);
      showBoundary(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <h1>Subir imagen</h1>
        <input
          type="file"
          placeholder="Imagen"
          name="image"
          accept="image/png, image/jpeg"
          onChange={handleFile}
        />
        <Button onClick={handleClick}>Subir</Button>
      </div>
      {progress.started && (
        <LinearProgress variant="determinate" max="100" value={progress.pc} />
      )}
      {msg && <span>{msg}</span>}
    </>
  );
}

export default ImageMenu;
