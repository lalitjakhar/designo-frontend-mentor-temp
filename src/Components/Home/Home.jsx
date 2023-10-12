import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
// import Iphone from "../../Assets/iphone.svg";

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
          background:
            "radial-gradient(circle, #f54c64, #f65b61, #f76860, #f77560, #f78161)",
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
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
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
        {/* <Box sx={{marginLeft:'-20px'}}>
          <img src={Iphone} alt="" />
        </Box> */}
      </Box>
    </>
  );
}
