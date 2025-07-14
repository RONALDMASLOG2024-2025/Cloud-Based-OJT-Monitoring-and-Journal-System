import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/common/ResponsiveAppBar";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="xxl">
        <Box sx={{ textAlign: "center", marginTop: 10 }}>
          <Typography variant="h1" fontWeight="semibold">
            Cloud-Based OJT Monitoring and Journal System
          </Typography>

          <Button
            startIcon={<LoginIcon />}
            variant="contained"
            size="large"
            color="primary"
            sx={{ marginTop: 5 }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>
        </Box>
      </Container>
    </>
  );
}
