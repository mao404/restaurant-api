import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import CurvyLines from "../assets/images/CurvyLines.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={CurvyLines}
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          ¿Cómo funciona?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/1162/1162341.png"
                  alt="register"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Crea tu usuario y registrate en la plataforma.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/1250/1250711.png"
                  alt="order"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Realiza tu pedido de la gran variedad de menú que ofrecemos.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/1198/1198401.png"
                  alt="payment"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {"Realiza el pago, puede ser efectivo o transferencia. "}
                  {"Una vez comprobado el pago se procederá a hacer la orden."}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/register"
          sx={{ mt: 8 }}
        >
          Ordenar
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
