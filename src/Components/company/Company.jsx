import React from "react";
import Tour from "../tour/Tour";
import { Box, Container, Typography, Grid } from "@mui/material";
import Aboutuspic from "../../Assets/aboutus.webp";

export default function Company() {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginBlock: "5rem",
            backgroundColor: "coral",
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={7}>
              <Box sx={{ display: "block", padding: "2rem", color: "#ffffff" }}>
                <Box>
                  <Typography variant="h3">About Us</Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Typography variant="h6">
                    Founded in 2010, we are a creative agency that produces
                    lasting results for our clients. We’ve partnered with many
                    startups, corporations, and nonprofits alike to craft
                    designs that make real impact. We’re always looking forward
                    to creating brands, products, and digital experiences that
                    connect with our clients’ audiences.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Box sx={{ borderRadius: "20px 0px 0px 20px" }}>
                <img src={Aboutuspic} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Tour />
    </>
  );
}
