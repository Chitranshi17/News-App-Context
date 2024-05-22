import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../feature/News/newsSlice";
// import { useSelector } from "react-redux";

const NewsSec = () => {
  const { allNews, isLoading, isSuccess, isError } = useSelector((state) => state.news);

 const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(getNews("Indore"));
 },[])

 if(isLoading){
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

if(!allNews || allNews === 0){
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
    News Not Yet !!
  </Typography>
</Box>
}

  return (
    <Box sx={{ borderTop: ".1px solid black" }}>
      <Box sx={{ height: "6rem", display: "grid", placeItems: "center" }}>
        <Typography variant="h3" align="center">
          Top New Today
        </Typography>
      </Box>
      <Box
        className="homeBgColor"
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          overflowY: "scroll",
        }}
      >
        {/* {
      allNews.map((news, index) => <NewsCard key={index} news={news}/>) */}
        {/* } */}

        {
          allNews.map((news, index) => <NewsCard key={index} news={news}/>)
        }

      </Box>
    </Box>
  );
};

export default NewsSec;
