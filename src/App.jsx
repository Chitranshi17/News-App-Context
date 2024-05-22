import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Box } from "@mui/material";
import SearchNews from "./Pages/SearchNews";


const App = () => {
  return (
    <Router>
      {/* <NewsProvider> */}
      <Navbar />
      <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/searchnews" element={<SearchNews />} />
      </Routes>
      </Box>
      <ToastContainer />
      {/* </NewsProvider> */}
    </Router>
  );
};

export default App;
