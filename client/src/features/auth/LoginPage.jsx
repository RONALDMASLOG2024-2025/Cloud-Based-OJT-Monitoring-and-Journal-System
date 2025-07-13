import React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  colorSchemes: {
    light: "#ffffff",
  },
});

export default function LoginPage() {

   const Navigate = useNavigate();
    

  return (
    <Container maxWidth="xxl">
      <AppProvider theme={theme}>
        <SignInPage
          providers={[{ id: "google", name: "Google" }]}

          signIn={async (provider) => {
            // Your sign in logic
            alert(`Signing in with ${provider.name}`);
            Navigate("/admin/dashboard");
           
          }}
          
        />
      </AppProvider>
      
    </Container>
  );
}
