import {
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { registerUser } from "../feature/Auth/authSlice";

const RegisterPage = () => {
  // Getting Data From Auth State
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  // Intializing Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // Destructure State
  const { name, email, password, password2 } = formData;

  // Form State Logic
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords Not Match");
    }
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }

    if (isError && message) {
      // toast.error(message);
      // toast.error(message, {
      //         position: "bottom-center",
      //         autoClose: 2000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "dark",
      //         transition: Bounce,
      //       });
    }
  }, [user, isSuccess, isError, message]);

  if (isLoading) {
    return (
      <Box
        className="loading"
        sx={{
          display: "flex",
          width: "100%",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">
          <CircularProgress color="warning" />
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      className="pt-5 registerSec"
      sx={{
        width: "100%",
        height: "87.9vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: {
            xs: 300,
            sm: 500,
            md: 500,
            lg: 550,
            xl: 600,
          },
          height: "70%",
          paddingBlock: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" color="gray" align="center" fontWeight={"700"}>
          Fill Form Details
        </Typography>
        <Box
          sx={{
            width: "80%",
            height: "88%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Name"
            fullWidth
            required
            onChange={handleChange}
            value={name}
            name="name"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Email"
            required
            fullWidth
            onChange={handleChange}
            value={email}
            name="email"
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Password"
            required
            fullWidth
            onChange={handleChange}
            value={password}
            name="password"
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            placeholder="Confirm Password"
            required
            fullWidth
            onChange={handleChange}
            value={password2}
            name="password2"
          />
          <Button
            variant="contained"
            color="warning"
            fullWidth
            sx={{ paddingBlock: ".6rem" }}
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default RegisterPage;
