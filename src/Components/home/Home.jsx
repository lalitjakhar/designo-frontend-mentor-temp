import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Grid } from "@mui/material";
import Iphone from "../../Assets/Iphone.webp";

export default function Home() {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: "50px",
            zIndex: "2",
            padding: "60px",
            backgroundColor: "orange",
            borderRadius: "20px",
            display: "flex",
            background:
              "radial-gradient(circle, #f54c64, #f65b61, #f76860, #f77560, #f78161)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box sx={{ display: "block" }}>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Award winning custom designs and digital branding solutions
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "1.5rem", color: "white" }}
                  >
                    With over 10 years in the industry, we are experienced in
                    creating fully responsive websites, app design, and engaging
                    brand experiences. Find out more about our services.
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "13px 44px",
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#ffffff80",
                      },
                    }}
                  >
                    LEARN MORE
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <img src={Iphone} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
