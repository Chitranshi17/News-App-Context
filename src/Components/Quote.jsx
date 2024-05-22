import { Box, Typography } from '@mui/material'
import React from 'react'

const Quote = () => {
  return (
    <Box sx={{ width: "100%", height: "2rem", display: "flex" }}>
        <Typography
          sx={{
            display: "grid",
            placeItems: "center",
            width: "100%",
          }}
        >
          <marquee behavior="" direction="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, doloribus.
          </marquee>
        </Typography>
      </Box>
  )
}

export default Quote
