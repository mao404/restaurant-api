import { useErrorBoundary } from "react-error-boundary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Fallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();

  const messageError = JSON.stringify(error.response.data.error.message);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div role="alert">
        <p>Error de sistema</p>
        <pre style={{ color: "red" }}>{messageError}</pre>
        <Button variant="contained" onClick={resetBoundary}>
          Actualizar
        </Button>
      </div>
    </Box>
  );
};

export default Fallback;
