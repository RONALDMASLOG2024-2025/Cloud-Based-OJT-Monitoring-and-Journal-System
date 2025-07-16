import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
export default function Settings() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", agree: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI Template
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box p={2} bgcolor="#f5f5f5" borderRadius={2}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Welcome to the MUI Demo UI
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    User Form
                  </Typography>

                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                      />
                    }
                    label="I agree to the terms"
                  />
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => setOpen(true)}
                  >
                    Submit
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box bgcolor="primary.main" color="white" p={3} borderRadius={2}>
                <Typography variant="h6">Live Preview</Typography>
                <Typography variant="body1">
                  Name: {formData.name || "N/A"}
                </Typography>
                <Typography variant="body2">
                  Agreed: {formData.agree ? "Yes" : "No"}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2} mt={4} justifyContent="center">
            <Button variant="outlined" color="primary">
              Secondary Action
            </Button>
            <Button variant="text" color="secondary">
              Cancel
            </Button>
          </Stack>
        </Box>
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Submission Received</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Thanks, {formData.name || "Guest"}! Your form was submitted.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
