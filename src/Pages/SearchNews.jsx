import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../feature/News/newsSlice";
import NewsCard from "../Components/NewsCard";

const SearchNews = () => {
  const { allNews } = useSelector((state) => state.news);

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews("Indore"));
  });
  return (
    <>
      {/* <Box>
    <Typography variant='h3'>
      Search News
    </Typography>
    <Box>
      <Box sx={{width:"100%", height:""}}>
      {
        allNews.map((news, index)=><NewsCard key={index} news={news}/>)
      }
      </Box>
    </Box>
   </Box> */}
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
          {allNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SearchNews;
