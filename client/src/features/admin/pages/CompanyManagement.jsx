import React from 'react'
import { Skeleton } from "@mui/material";

export default function CompanyManagement() {
  return (
     <>
      <div>Company Management Page</div>
      <Skeleton />
      <Skeleton variant="rectangular" height={"70vh"} />
    </>
  )
}
