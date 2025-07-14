import { Skeleton } from "@mui/material";
import React from "react";

export default function Chat() {
  return (
    <>
      <div>Chat Page</div>
      <Skeleton />
      <Skeleton variant="rectangular" height={"70vh"} />
    </>
  );
}
