import React from "react";
import "../Projects/Projects.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Container } from "@mui/material"
const Projects = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginBlock: "5rem",
            display: "flex",
          }}
        >
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={6}>
              <Box
                className="projects_image_first"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "block" }}>
                  <Typography variant="h3" sx={{ color: "white" }}>
                    WEB DESIGN
                  </Typography>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    VEIW PROJECTS
                    <ArrowForwardIosOutlinedIcon
                      sx={{
                        color: "#ffbc00",
                        alignContent: "baseline",
                        fontSize: "17px",
                        paddingLeft: "5px",
                      }}
                    />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "block", textAlign: "center" }}>
                <Box
                  className="projects_image_second"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "block" }}>
                    <Typography variant="h3" sx={{ color: "white" }}>
                      APP DESIGN
                    </Typography>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      VEIW PROJECTS
                      <ArrowForwardIosOutlinedIcon
                        sx={{
                          color: "#ffbc00",
                          alignContent: "baseline",
                          fontSize: "17px",
                          paddingLeft: "5px",
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="projects_image_third"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "block" }}>
                    <Typography variant="h3" sx={{ color: "white" }}>
                      GRAPHIC DESIGN
                    </Typography>
                    <Typography variant="h6" sx={{ color: "white" }}>
                      VEIW PROJECTS
                      <ArrowForwardIosOutlinedIcon
                        sx={{
                          color: "#ffbc00",
                          alignContent: "baseline",
                          fontSize: "17px",
                          paddingLeft: "5px",
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Projects;
