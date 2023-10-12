import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Objectives1 from "../../Assets/Objectives1.svg";
import Objectives2 from "../../Assets/Objectives2.svg";
import Objectives3 from "../../Assets/Objectives3.svg";

export const Objectives = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBlock: "10rem" }}>
        <Grid
          container
          columns={{ xs: 4, sm: 12, md: 12 }}
          spacing={{ xs: 3, sm: 6, md: 6 }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={Objectives1} alt="" />
            </Box>
            <Typography sx={{ display: "flex", justifyContent: "center", paddingTop:'10px' }}>
              PASSIONATE
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "__Jost_e3788e,__Jost_Fallback_e3788e",
                color: "#333136",
                paddingTop:'10px'
              }}
            >
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={Objectives2} alt="" />
            </Box>
            <Typography sx={{ display: "flex", justifyContent: "center", paddingTop:'10px' }}>
              RESOURCEFUL
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "__Jost_e3788e,__Jost_Fallback_e3788e",
                color: "#333136",
                paddingTop:'10px'
              }}
            >
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={Objectives3} alt="" />
            </Box>
            <Typography sx={{ display: "flex", justifyContent: "center", paddingTop:'10px' }}>
              FRIENDLY
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "__Jost_e3788e,__Jost_Fallback_e3788e",
                color: "#333136",
                paddingTop:'10px'
              }}
            >
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
