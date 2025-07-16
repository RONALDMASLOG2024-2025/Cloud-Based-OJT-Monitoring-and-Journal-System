import { Skeleton, Container, Box, Grid } from "@mui/material";
import React from "react";

export default function DashboardContent() {
  return (
    <Container maxWidth="xxl">
      <Skeleton variant="rectangular" height={400} />
      <Box sx={{ my: 4 }}/>
    </Container>
  );
}
