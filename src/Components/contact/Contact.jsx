import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TextField, Button } from "@mui/material";
import Objectives4 from "../../Assets/Objectives4.svg";
import Objectives5 from "../../Assets/Objectives5.svg";
import Objectives6 from "../../Assets/Objectives6.svg";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
    };
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Container>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginBlock: "5rem",
            padding: "60px",
            borderRadius: "20px",
            display: "flex",
            background:
              "radial-gradient(circle, #f54c64, #f65b61, #f76860, #f77560, #f78161)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Box sx={{ display: "block" }}>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "1.2rem", color: "white" }}
                  >
                    Ready to take it to the next level? Let’s talk about your
                    project or idea and find out how we can help your business
                    grow. If you are looking for unique digital experiences
                    that’s relatable to your users, drop us a line.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box sx={{ display: "block" }}>
                <Box>
                  <TextField
                    name="name"
                    variant="standard"
                    fullWidth
                    label="Name"
                  />
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    name="email"
                    variant="standard"
                    fullWidth
                    label="Email Address"
                  />
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    name="phone"
                    variant="standard"
                    fullWidth
                    label="Phone"
                  />
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    name="message"
                    variant="standard"
                    fullWidth
                    label="Your Message"
                  />
                </Box>
                <Box
                  sx={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: {
                      sm: "flex-start",
                      md: "flex-start",
                      lg: "flex-end",
                    },
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      padding: "13px 44px",
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#ffffff80",
                      },
                    }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
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
  );
}
