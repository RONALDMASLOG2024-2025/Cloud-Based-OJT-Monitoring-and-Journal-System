import React from "react";
import { Skeleton } from "@mui/material";
export default function Settings() {
  return (
    <>
      <div>Settings Page</div>
      <Skeleton />
      <Skeleton variant="rectangular" height={"70vh"} />
    </>
  );
}
