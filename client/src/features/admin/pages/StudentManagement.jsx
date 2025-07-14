import React from 'react'
import { Skeleton } from "@mui/material";

export default function StudentManagement() {
  return (
     <>
      <div>Student Management Page</div>
      <Skeleton />
      <Skeleton variant="rectangular" height={"70vh"} />
    </>
  )
}
