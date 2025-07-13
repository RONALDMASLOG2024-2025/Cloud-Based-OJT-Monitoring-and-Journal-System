import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";

export default function LandingPage() {
  return (


      <Container maxWidth="xxl">
        <Box sx={{ textAlign: "center", marginTop: 10 }}>


           <Typography variant="h1"   fontWeight="semibold" >Cloud-Based OJT Monitoring and Journal System</Typography>

          <Button
            startIcon={<LoginIcon />}
            variant="contained"
            size="large"
            color="primary"
            sx={{ marginTop: 5 }}
            href="/login"
          >
            Sign In
          </Button>
        </Box>
      </Container>
    
  );
}
