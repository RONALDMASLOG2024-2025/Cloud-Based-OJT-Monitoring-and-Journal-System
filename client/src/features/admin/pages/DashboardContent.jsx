import { Skeleton } from "@mui/material";
import React from "react";

export default function DashboardContent() {
  return (
    <>
      <div>Dashboard Content</div>
      <Skeleton />
      <Skeleton variant="rectangular" height={"70vh"} />
    </>
  );
}
