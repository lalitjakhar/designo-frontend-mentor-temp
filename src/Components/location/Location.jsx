import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Canadamap from "../../Assets/canada-map.webp";
import Australiamap from "../../Assets/australia-map.webp";
import UKmap from "../../Assets/united-kingdom-map.webp";

const Location = () => {
  return (
    <>
      <Container>
        <Box sx={{ marginBlock: "5rem" }}>
          <Grid
            container
            columns={{ xs: 4, sm: 6, md: 12 }}
            spacing={{ xs: 2, sm: 3, md: 4 }}
          >
            <Grid item xs={12} sm={8} md={8} sx={{ order: { xs: 2, md: 1 } }}>
              <Box
                sx={{
                  padding: "5.7rem",
                  "@media (max-width: 600px)": {
                    padding: "1rem",
                  },
                  backgroundColor: "#f1c7c790",
                  borderRadius: "1rem",
                  alignContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#e7816b", fontWeight: "600" }}
                >
                  Canada
                </Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    paddingTop: "1.5rem",
                    flexWrap: "nowrap",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ display: "block" }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        Designo Central Office
                      </Typography>
                      <Typography>3886 Wellington Street</Typography>
                      <Typography>Toronto, Ontario M9C 3J5</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ display: "block" }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        Contact
                      </Typography>
                      <Typography>P : +1 253-863-8967</Typography>
                      <Typography>M : contact@designo.co</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={4} sx={{ order: { xs: 1, md: 2 } }}>
              <Box>
                <img
                  src={Australiamap}
                  alt=""
                  style={{
                    width: "100%",
                    height: "325px",
                    borderRadius: "1rem",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box sx={{ marginBlock: "5rem" }}>
          <Grid container columns={12} spacing={4}>
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <img
                  src={Canadamap}
                  alt=""
                  style={{
                    height: "325px",
                    width: "100%",
                    borderRadius: "1rem",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Box
                sx={{
                  padding: "5.7rem",
                  "@media (max-width: 600px)": {
                    padding: "1rem",
                  },
                  backgroundColor: "#f1c7c790",
                  borderRadius: "1rem",
                  alignContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#e7816b", fontWeight: "600" }}
                >
                  Australia
                </Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    paddingTop: "1.5rem",
                    flexWrap: "nowrap",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ display: "block" }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        Designo AU Office
                      </Typography>
                      <Typography>19 Balonne Street</Typography>
                      <Typography>New South Wales 2443</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ display: "block" }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        Contact
                      </Typography>
                      <Typography>P : (02) 6720 9092</Typography>
                      <Typography>M : contact@designo.au</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box sx={{ marginBlock: "5rem" }}>
          <Grid
            container
            columns={{ xs: 4, sm: 6, md: 12 }}
            spacing={{ xs: 2, sm: 3, md: 4 }}
          >
            <Grid item xs={12} sm={8} md={8} sx={{ order: { xs: 2, md: 1 } }}>
              <Box
                sx={{
                  padding: "5.7rem",
                  "@media (max-width: 600px)": {
                    padding: "1rem",
                  },
                  backgroundColor: "#f1c7c790",
                  borderRadius: "1rem",
                  alignContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#e7816b", fontWeight: "600" }}
                >
                  United Kingdom
                </Typography>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    paddingTop: "1.5rem",
                    flexWrap: "nowrap",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ display: "block" }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        Designo UK Office
                      </Typography>
                      <Typography>13 Colorado Way</Typography>
                      <Typography>Rhyd-y-fro SA8 9GA</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ display: "block" }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        Contact
                      </Typography>
                      <Typography>P : +1 253-863-8967</Typography>
                      <Typography>M : contact@designo.uk</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={4} sx={{ order: { xs: 1, md: 2 } }}>
              <Box>
                <img
                  src={UKmap}
                  alt=""
                  style={{
                    height: "325px",
                    width: "100%",
                    borderRadius: "1rem",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Location;
