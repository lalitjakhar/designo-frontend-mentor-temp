import React from "react";
import "../Projects/Projects.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Projects = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "5rem",
          display: "flex",
        }}
      >
        <Grid container spacing={2} columns={12}>
          <Grid item xs={6}>
            <Box className="projects_image_first">
              <Typography variant="h3" sx={{ color: "white" }}>
                WEB DESIGN
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "block" }}>
              <Box className="projects_image_second">
                <Typography variant="h3" sx={{ color: "white" }}>
                  WEB DESIGN
                </Typography>
              </Box>
              <Box className="projects_image_third">
                <Typography variant="h3" sx={{ color: "white" }}>
                  WEB DESIGN
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

{
  /* <Box
        sx={{
          marginTop: "5rem",
          marginBottom: "5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box className="projects_image_first">
          <Box 
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Typography variant="h3"
            sx={{color:'white'}}>WEB DESIGN</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "block" }}>
          <Box>
            <img
              src={Project2}
              alt=""
              style={{ width: "530px", height: "328px", borderRadius: "20px" }}
            />
          </Box>
          <Box>
            <img
              src={Projects3}
              alt=""
              style={{
                marginTop: "28px",
                width: "530px",
                height: "300px",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Box>
      </Box> */
}
