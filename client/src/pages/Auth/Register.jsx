import * as React from "react";
import axios from "axios";
import { useErrorBoundary } from "react-error-boundary";
import baseApiPath from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    idNumber: "",
    email: "",
    telephone: "",
    password: "password",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(baseApiPath + "/auth/register", user);
      navigate("/");
    } catch (err) {
      showBoundary(err);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={
        {
          // backgroundImage: `url(https://img.freepik.com/free-vector/collection-ingredients-blackboard_23-2148678863.jpg?w=900&t=st=1686971127~exp=1686971727~hmac=8a7c16c0469c9f361526dba6452b15a61b4165e3ac50c14fbead3da15c26f99e)`,
          // backgroundPosition: "center",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // width: "100vw",
        }
      }
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          borderRadius: 4,
          borderTop: "solid rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(15px)",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                onChange={handleChange}
                label="Nombre y apellido"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="idNumber"
                onChange={handleChange}
                label="Cédula"
                name="idNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="telephone"
                label="Teléfono"
                name="telephone"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Acepto las politicas de uso y privacidad."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registro
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                ¿Tienes cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
