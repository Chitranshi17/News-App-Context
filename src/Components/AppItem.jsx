import {
  AppBar,
  Box,
  CircularProgress,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../feature/News/newsSlice";

const AppItem = () => {
  const dispatch = useDispatch();
  const { allNews, isLoading, isSuccess, isError } = useSelector(
    (state) => state.news
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
  return (
    <Box
      sx={{
        // marginTop: "5rem",
        backgroundColor: "transparent",
        display: "grid",
        placeItems: "end",
        height: "3rem",
        borderTop: ".1px solid black",
        boxShadow: ".1rem .1rem .4rem black",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          width: {
            xs: 400,
            sm: 500,
            md: 500,
            lg: 550,
            xl: 600,
          },
        }}
      >
        <ListItem
          sx={{
            color: "black",
            paddingLeft: { xs: "0" },
            paddingRight: {xs: "0"}     
          }}
          onClick={() => dispatch(getNews("Indian Politics News"))}
        >
          Politics
        </ListItem>
        <ListItem
          sx={{ color: "black", paddingLeft: "12px" }}
          onClick={() => dispatch(getNews("International News"))}
        >
          International
        </ListItem>
        <ListItem
          sx={{ color: "black", paddingLeft: "12px" }}
          onClick={() => dispatch(getNews("Indian Sport News"))}
        >
          Sports
        </ListItem>
        <ListItem
          sx={{ color: "black", paddingLeft: "12px" }}
          onClick={() => dispatch(getNews("Indian Entertainment News"))}
        >
          Entertainment
        </ListItem>
      </Box>
    </Box>
  );
};

export default AppItem;
