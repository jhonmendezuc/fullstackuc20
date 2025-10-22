import "./login.css";
import { useState } from "react";
import UserService from "@/services/usuarios.js";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

const Form = styled(Paper)({
  padding: "2rem",
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const request = await UserService.login(email, password);
    switch (request.message) {
      case "Usuario o contraseña incorrecta ":
        setError(request.message);
        setTimeout(() => {
          setError("");
          setLoading(false);
        }, 3000);

        break;
      default:
        localStorage.setItem("token", request.data);
        localStorage.setItem("sesion", true);
        setLoading(false);
        window.location.reload();
    }
  };

  return (
    <Container>
      <Form elevation={3} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" textAlign="center">
          Iniciar sesión
        </Typography>

        <TextField
          label="Correo electrónico"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />

        {error && (
          <Typography color="error" variant="body2" textAlign="center">
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
