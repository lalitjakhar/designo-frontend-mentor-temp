import React from "react";
import Tour from "../tour/Tour";
import { Box, Container, Typography, Grid } from "@mui/material";
import Aboutuspic from "../../Assets/aboutus.webp";
import Worldclass from "../../Assets/world-class-talent.webp";
import Realdeal from "../../Assets/real-deal.webp";

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
          <Grid container>
            <Grid item xs={12} lg={7} sx={{ order: { xs: 2, lg: 1 } }}>
              <Box
                sx={{
                  display: "block",
                  padding: "8rem 3rem",
                  color: "#ffffff",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "48px", fontWeight: "600" }}
                  >
                    About Us
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
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
            <Grid item xs={12} lg={5} sx={{ order: { xs: 1, lg: 2 } }}>
              <Box sx={{ height: "100%", width: "100%" }}>
                <img
                  src={Aboutuspic}
                  style={{
                    borderRadius: "0px 20px 20px 0px",
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            marginBlock: "5rem",
            backgroundColor: "#fdf3f0",
            borderRadius: "20px",
          }}
        >
          <Grid container>
            <Grid item xs={12} lg={5}>
              <Box sx={{ height: "100%", width: "100%" }}>
                <img
                  src={Worldclass}
                  style={{
                    borderRadius: "20px 0px 0px 20px",
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Box
                sx={{
                  display: "block",
                  padding: "8rem 3rem",
                  color: "#333136",
                  fontFamily: "jost, sans-serif",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "48px",
                      fontWeight: "600",
                      color: "#e7816b",
                    }}
                  >
                    World-class talent
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    We are a crew of strategists, problem-solvers, and
                    technologists. Every design is thoughtfully crafted from
                    concept to launch, ensuring success in its given market. We
                    are constantly updating our skills in a myriad of platforms.
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    Our team is multi-disciplinary and we are not merely
                    interested in form — content and meaning are just as
                    important. We give great importance to craftsmanship,
                    service, and prompt delivery. Clients have always been
                    impressed with our high-quality outcomes that encapsulates
                    their brand’s story and mission.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Tour />
      <Container>
        <Box
          sx={{
            marginBlock: "5rem",
            backgroundColor: "#fdf3f0",
            borderRadius: "20px",
          }}
        >
          <Grid container>
            <Grid item xs={12} lg={7} sx={{ order: { xs: 2, lg: 1 } }}>
              <Box
                sx={{
                  display: "block",
                  padding: "8rem 3rem",
                  color: "#333136",
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "48px",
                      fontWeight: "600",
                      color: "#e7816b",
                    }}
                  >
                    The real deal
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    As strategic partners in our clients’ businesses, we are
                    ready to take on any challenge as our own. Solving real
                    problems require empathy and collaboration, and we strive to
                    bring a fresh perspective to every opportunity. We make
                    design and technology more accessible and give you tools to
                    measure success.
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Typography variant="h6" sx={{ fontSize: "16px" }}>
                    We are visual storytellers in appealing and captivating
                    ways. By combining business and marketing strategies, we
                    inspire audiences to take action and drive real results.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={5} sx={{ order: { xs: 1, lg: 2 } }}>
              <Box sx={{ height: "100%", width: "100%" }}>
                <img
                  src={Realdeal}
                  style={{
                    borderRadius: "0px 20px 20px 0px",
                    width: "100%",
                    height: "100%",
                  }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
