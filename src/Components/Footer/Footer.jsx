import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Adb from "@mui/icons-material/Adb";

export const Footer = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ marginBottom: "-7rem", position: "relative" }}
      >
        <Box
          sx={{
            background:
              "radial-gradient(circle, #f54c64, #f65b61, #f76860, #f77560, #f78161)",
            borderRadius: "20px",
            padding: "3rem",
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ padding: "2rem" }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "40px", fontWeight: "500", color: "white" }}
                >
                  Let’s talk about your project
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "16px", color: "white" }}
                >
                  Ready to take it to the next level? Contact us today and find
                  out how our expertise can help your business grow.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ margin: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    padding: "13px 44px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  GET IN TOUCH
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box container sx={{ background: "black", height: "400px" }}>
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: "9rem",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={6}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Adb sx={{ marginRight: "10px" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 600,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    DESIGNO
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                    },
                    alignItems: {
                      sm: "center",
                      md: "center",
                      lg: "center",
                    },
                    justifyContent: {
                      sm: "flex-start",
                      md: "flex-start",
                      lg: "flex-end",
                    },
                  }}
                >
                  <Box sx={{ marginRight: "10px" }}>
                    <a href="">OUR COMPANY</a>
                  </Box>
                  <Box sx={{ marginRight: "10px" }}>
                    <a href="">LOCATIONS</a>
                  </Box>
                  <Box sx={{ marginRight: "10px" }}>
                    <a href="">CONTACT</a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
