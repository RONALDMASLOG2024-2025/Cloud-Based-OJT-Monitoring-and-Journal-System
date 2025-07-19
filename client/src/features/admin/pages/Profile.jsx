import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Profile() {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <TextField
          value={name}
          onChange={handleChange}
          label="First Name"
          variant="outlined"
        />
        {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button> */}
      </Stack>

      <Typography variant="h4" gutterBottom>
        Your Name: {name || "No name provided"}
      </Typography>
    </>
  );
}
