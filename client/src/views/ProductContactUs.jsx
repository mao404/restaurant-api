import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Necesitas ayuda?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Contáctanos, estamos para servirte!
      </Typography>
      <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png"
        alt="helpDesk"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
