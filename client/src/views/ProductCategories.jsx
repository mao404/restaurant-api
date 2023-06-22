import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://images.unsplash.com/photo-1592860108517-2e204a1378b5?auto=format&fit=crop&w=400",
    title: "Burger Carne",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1617482792778-283533cb46e3?auto=format&fit=crop&w=400",
    title: "Burger Pollo",
    width: "20%",
  },
  {
    url: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=400",
    title: "Rubia de Pollo",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?auto=format&fit=crop&w=400",
    title: "Del Campo",
    width: "38%",
  },
  {
    url: "https://images.unsplash.com/photo-1523309996740-d5315f9cc28b?auto=format&fit=crop&w=400",
    title: "Del Campo de Pollo",
    width: "38%",
  },
  {
    url: "https://images.unsplash.com/photo-1598221859931-648936114e1e?auto=format&fit=crop&w=400",
    title: "Morena",
    width: "24%",
  },
  {
    url: "https://images.unsplash.com/photo-1583541277535-867505581d07?auto=format&fit=crop&w=400",
    title: "Italiana",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400",
    title: "The Hat",
    width: "20%",
  },
  {
    url: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=400",
    title: "The Hat de Pollo",
    width: "40%",
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Para todos los gustos
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
