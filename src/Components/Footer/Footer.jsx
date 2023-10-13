import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Adb from "@mui/icons-material/Adb";
import { Divider } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

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
      <Box container sx={{ background: "black" }}>
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
                  <Typography sx={{ padding: "10px" }}>OUR COMPANY</Typography>
                  <Typography sx={{ padding: "10px" }}>LOCATIONS</Typography>
                  <Typography sx={{ padding: "10px" }}>CONTACT</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ borderColor: "#ffffff1a", marginBlock: "2rem" }} />
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            color: "#ffffff80",
          }}
        >
          <Box sx={{ paddingBlock: "3rem" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Box sx={{ display: "block" }}>
                  <Typography sx={{fontWeight:'700'}}>Designo Central Office</Typography>
                  <Typography>3886 Wellington Street</Typography>
                  <Typography>Toronto, Ontario M9C 3J5</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Box sx={{ display: "block" }}>
                  <Typography sx={{fontWeight:'700'}}>Contact Us (Central Office)</Typography>
                  <Typography>P : +1 253-863-8967</Typography>
                  <Typography>M : contact@designo.co</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: {
                    sm: "flex-start",
                    md: "flex-start",
                    lg: "flex-end",
                  },
                }}
              >
                <Box>
                  <FacebookRoundedIcon
                    sx={{ color: "coral", marginRight: "10px" }}
                  />
                  <YouTubeIcon sx={{ color: "coral", marginRight: "10px" }} />
                  <TwitterIcon sx={{ color: "coral", marginRight: "10px" }} />
                  <PinterestIcon sx={{ color: "coral", marginRight: "10px" }} />
                  <InstagramIcon sx={{ color: "coral", marginRight: "10px" }} />
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
