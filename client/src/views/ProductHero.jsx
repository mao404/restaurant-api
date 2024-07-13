import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://img.freepik.com/free-photo/front-view-burgers-stand_141793-15545.jpg?t=st=1720838253~exp=1720841853~hmac=c227294979e42fec05d2df0262b3e257e07867cb82d84ffaeef196b49ee4fe0d&w=1380";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Hamburguesas 100% artesanales
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Amamos las hamburguesas tanto como tu.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/register"
        sx={{ minWidth: 200 }}
      >
        Registro
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubre la experiencia
      </Typography>
    </ProductHeroLayout>
  );
}
