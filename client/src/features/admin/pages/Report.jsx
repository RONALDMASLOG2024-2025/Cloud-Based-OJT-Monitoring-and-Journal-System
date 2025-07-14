import React from "react";
import { Skeleton } from "@mui/material";
export default function Report() {
  return (
    <>
      <div>Report Page</div>
      <Skeleton />
      <Skeleton variant="rectangular" height={"70vh"} />
    </>
  );
}
