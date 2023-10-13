import { Box, Container } from "@mui/material";
import React from "react";
import { TextField, Stack, Button } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            marginBlock: "5rem",
            borderRadius: "10px",
            padding: "5rem",
            height: "250px",
            backgroundColor: "gold",
          }}
        >
          <Stack component="form" sx={{ width: "60%" }}>
            <TextField variant="standard" label="Name" />
            <TextField variant="standard" label="Email Address" />
            <TextField variant="standard" label="Phone" />
            <TextField variant="standard" label="Your Message" />
            <Button variant="contained" type="submit" sx={{ width: "60%", marginBlock:'2rem'}}>
              submit
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Contact;
