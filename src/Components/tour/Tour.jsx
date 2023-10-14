import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {Button } from "@mui/material";
import Objectives4 from "../../Assets/Objectives4.svg";
import Objectives5 from "../../Assets/Objectives5.svg";
import Objectives6 from "../../Assets/Objectives6.svg";

export default function Tour() {
  return (
    <>
    <Container>
        <Box sx={{ flexGrow: 1, marginBlock: "10rem" }}>
          <Grid
            container
            columns={{ xs: 4, sm: 12, md: 12 }}
            spacing={{ xs: 3, sm: 6, md: 6 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={Objectives4} alt="" />
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  fontSize:'1.4rem'
                }}
              >
                CANADA
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px 15px",
                    backgroundColor:'#f77560',
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#ff4b4b70",
                    },
                  }}
                >
                  SEE LOCATION
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={Objectives5} alt="" />
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  fontSize:'1.4rem'
                }}
              >
                AUSTRALIA
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px 15px",
                    backgroundColor:'#f77560',
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#ff4b4b70",
                    },
                  }}
                >
                  SEE LOCATION
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={Objectives6} alt="" />
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  fontSize:'1.4rem'
                }}
              >
                UNITED KINGDOM
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px 15px",
                    backgroundColor: "#f77560",
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#ff4b4b70",
                    },
                  }}
                >
                  SEE LOCATION
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
