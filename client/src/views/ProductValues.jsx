import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import CurvyLines from "../assets/images/CurvyLines.png";
import Bread from "../assets/images/bread.png";
import Spices from "../assets/images/spices.png";
import Delivery from "../assets/images/delivery.png";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src={CurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Bread}
                alt="bread"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Pan artesanal
              </Typography>
              <Typography variant="h5">
                {
                  "Pan fresco y horneado el mismo dia del pedido, totalmente artesanal"
                }

                {", hecho con materia prima de calidad."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Spices}
                alt="spices"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Especias de la casa
              </Typography>
              <Typography variant="h5">
                {
                  "Las especias de la casa se han seleccionado con sumo cuidado... "
                }

                {"maximizando así los sabores de la hamburguesa."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={Delivery}
                alt="delivery"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Servicio de delivery
              </Typography>
              <Typography variant="h5">
                {"Disponemos de servicio de delivery "}
                {"para que puedas disfrutar de nuestra cocina en todo momento."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
