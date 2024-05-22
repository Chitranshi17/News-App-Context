import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NoImg from "../assets/Img/NoImg.png";
import { Button } from "@mui/material";
const NewsCard = ({news}) => {
  // console.log(news)
  const { title, author ,url , urlToImage, description } = news;
  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "2rem",
        width: {
          xs: 180,
          sm: 570,
          md: 400,
          lg: 580,
          xl: 720,
        },
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
          md: "column-reverse",
          lg: "row",
          xl: "row",
        },
        height: {
          xs: 500,
          sm: 250,
          md: 400,
          lg: 250,
          xl: 300,
        },
        paddingBottom: {
          xs: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            xs: 380,
            sm: 530,
            md: 400,
            lg: 1200,
            xl: 1400,
          },
          height: {
            xs: 300,
            sm: 500,
            md: 400,
            lg: 250,
            xl: 300,
          },
          
          overflowY: "scroll",
        }}
      >
        <CardContent
          sx={{
            display: {
              xs: "flex-column",
              // sm: 550,
              // md: 400,
              // lg: 400,
              xl: "flex-column",
            },
            justifyContent: {
              xs: "space-around",
              // sm: 350,
              // md: 400,
              // lg: 400,
              xl: "space-around",
            },
            padding: ".5rem",
            width: {
              xs: 200,
              sm: 380,
              md: 400,
              lg: 400,
              xl: 450,
            },
            height: {
              xs: 300,
              sm: 300,
              md: 200,
              lg: 580,
              xl: 360,
            },
            // overflowY: "scroll",
          }}
        >
          <Typography component="div" variant="h6" >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{marginTop:".5rem"}}
          >
            {author}
          
          </Typography>
          <Typography variant="body2"   sx={{marginTop:".5rem"}}>
            {description}
          </Typography>
          <Button
            color="warning"
            variant="contained"
            target="_blank"
            href={url}
            sx={{marginTop:".5rem"}}
          >
          Read More News
          </Button>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: {
            xs: 300,
            sm: 300,
            md: 400,
            lg: 580,
            xl: 200,
          },
          height: {
            xs: 230,
            sm: 300,
            md: 200,
            lg: 300,
            xl: 300,
          },
        }}
        image={urlToImage ? urlToImage : NoImg}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default NewsCard;
