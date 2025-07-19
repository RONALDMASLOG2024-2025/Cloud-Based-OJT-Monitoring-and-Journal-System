import React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    light: "#ffffff",
  },
});

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xxl">
      <AppProvider theme={theme}>
        {/* <SignInPage
          providers={[{ id: "google", name: "Google" }]}
          signIn={async (provider) => {
            // Your sign in logic
            alert(`Signing in with ${provider.name}`);
            navigate("/admin/dashboard");
          }}
        /> */}
        <Stack direction={"column"} spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin/dashboard")}
          >
            Sign in as Admin
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/student/dashboard")}
          >
            Sign in as Student
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/hte/dashboard")}
          >
            Sign in as HTE
          </Button>
        </Stack>
      </AppProvider>
    </Container>
  );
}
