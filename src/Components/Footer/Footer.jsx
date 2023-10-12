import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box sx={{ padding: "2rem" }}>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "2.8rem", fontWeight: "500", color: "white" }}
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
            <Grid item xs>
              <Box sx={{display:'flex', justifyContent:'end',paddingTop:'5rem'}}>
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
      <Box container sx={{ background: "black", height: "400px" }}></Box>
    </>
  );
};
