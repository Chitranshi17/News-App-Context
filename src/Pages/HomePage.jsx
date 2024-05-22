import {
  Box,
  CircularProgress,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppItem from "../Components/AppItem";
import Quote from "../Components/Quote";
import Hero from "../Components/Hero";
import NewsSec from "../Components/NewsSec";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );


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

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Quote />
      <Hero />
      <AppItem />
      <NewsSec />
      <Footer />
    </>
  );
};

export default HomePage;
