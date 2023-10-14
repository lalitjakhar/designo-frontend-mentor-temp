import React from "react";
import Tour from "../tour/Tour";
import { Box, Container, Typography } from "@mui/material";

export default function Company() {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginBlock:'5rem',
            height: "400px",
            backgroundColor: "coral",
            borderRadius: "20px",
          }}
        >
          <Box sx={{padding:'2rem'}}>
            <Typography>
              djkfhgfdgh fjkgf f dsjkfdshf dsfgdsfg dsf gdf
            </Typography>
          </Box>
        </Box>
      </Container>
      <Tour />
    </>
  );
}
