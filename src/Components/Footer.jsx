import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      sx={{
        height: {
          xs: 200,
          sm: 230,
          md: 200,
          lg: 280,
          xl: 300,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          // paddingTop: "2rem",
          display: {
            xs: "column",
            sm: "flex-column",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            height: 200,
            width: {
              xs: 400,
              sm: 600,
              md: 700,
              lg: 800,
              xl: 1200,
            },
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            height: {
              xs: 10,
              sm: 10,
              md: 0,
              lg: 180,
              xl: 100,
            },
            width: "40%",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: {
                xs: 0,
                sm: 0,
                md: 200,
                lg: 340,
                xl: 300,
              },
              height: {
                xs: 0,
                sm: 0,
                md: 200,
                lg: 200,
                xl: 200,
              },
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography>
              <a href="https://www.linkedin.com/in/chitranshi-gourana-2a4904245/" target="_blank">
              <LinkedInIcon fontSize="large" />
              </a>
            </Typography>
            <Typography>
             <a href="https://www.instagram.com/art_the_piction/?next=%2F"target="_blank">
             <InstagramIcon fontSize="large"/>
             </a>
            </Typography>
            <Typography>
              <a href="https://github.com/Chitranshi17" target="_blank">
              <GitHubIcon fontSize="large" />
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor="primary.main"
        sx={{
          height: "15%",
          display: "grid",
          placeItems: "center",
          backgroundColor: "warning",
        }}
      >
        <Typography variant="body1" align="center" textAlign={"center"}>
          www.newsbreak.com&copy;chitransigourana
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
