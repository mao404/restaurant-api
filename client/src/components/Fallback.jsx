import { useErrorBoundary } from "react-error-boundary";
import Box from "@mui/material/Box";
import Button from "../components/Button";

const Fallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();
  const errorCode = JSON.stringify(error.response.data.error.code);
  const singleError = JSON.stringify(error.response.data.error.message);
  const messageError = error.response.data.error.detail;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#282c34",
        minHeight: "100vh",
        color: "white",
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <div role="alert">
        <img src="https://i.imgflip.com/1rvcgj.jpg" alt="" srcSet="" />
        <h1>Ops :(</h1>
        <h2>
          {errorCode} - {singleError}
        </h2>
        {messageError &&
          messageError.map((error) => (
            <div className="error" key={error.msg}>
              <p style={{ color: "red" }}>{error.msg}</p>
            </div>
          ))}

        <Button variant="contained" onClick={resetBoundary}>
          Actualizar
        </Button>
      </div>
    </Box>
  );
};

export default Fallback;
