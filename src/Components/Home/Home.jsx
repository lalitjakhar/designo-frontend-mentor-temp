import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Iphone from "../../Assets/iphone.png";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          marginTop: "50px",
          padding: "60px",
          backgroundColor: "orange",
          borderRadius: "20px",
          display: "flex",
          background: 'radial-gradient(circle, #f54c64, #f65b61, #f76860, #f77560, #f78161)'
        }}
      >
        <Box sx={{ width: "70%", display: "block" }}>
          <Box>
            <Typography variant="h2" sx={{ color: "white", fontWeight: "600" }}>
              Award winning custom designs and digital branding solutions
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.5rem", color: "white" }}
            >
              With over 10 years in the industry, we are expericience Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iste itaque
              quis mollitia animi, eligendi blanditiis!
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                padding: "13px 44px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>
        <Box sx={{ marginRight: "-25px" }}>
          <img
            src="https://www.transparentpng.com/thumb/-iphone-x/DTctGB-iphone-transparent-shop.png"
            alt="Ä°phone x transparent background download showing lock screen @transparentpng.com"
          />
        </Box>
      </Box>
    </>
  );
}
