import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Box, TextField, Button } from "@mui/material";
import "../../style/login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    username: "admin@test.com",
    password: "password",
  });

  const { username, password } = loginForm;

  const onChangeLogin = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();
    try {
      await dispatch(loginUser(loginForm));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box className="login-wrapper">
      <Box>
        <Box sx={{ mt: 2, color: "blue" }}>
          <h2>React Redux CRM</h2>
        </Box>
        <Box sx={{ my: 1, color: "navy" }}>
          <p>Version 2.0.0</p>
        </Box>
        <TextField
          label="Username"
          placeholder="Enter username"
          sx={{ width: "100%", my: 2 }}
          name="username"
          value={username}
          onChange={onChangeLogin}
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          sx={{ width: "100%", my: 2 }}
          name="password"
          value={password}
          onChange={onChangeLogin}
          required
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#3f51b5" }}
            onClick={login}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
