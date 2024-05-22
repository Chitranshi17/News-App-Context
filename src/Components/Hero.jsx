import { Box } from '@mui/material'
import React from 'react'
import video from "../assets/Img/video.mp4"
const Hero = () => {
  return (
    <Box
    className="heroBg"
    sx={{
      width: "100%",
      height: {
        xs: 270,
        sm: 450,
        md: 500,
        lg: 500,
        xl: 500,
      },          backgroundColor: "blue",
      display: "flex",
    }}
  >
    <Box sx={{ width: "100%", height: "100%" }}>
      <video width="100%" height="100%" autoPlay controls muted>
        <source src={video}/>
      </video>
    </Box>
    
  </Box>
  )
}

export default Hero
