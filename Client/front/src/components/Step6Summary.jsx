import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

const Step6Summary = ({ formData, onBack, onSubmit }) => {
  // Helper to format dates
  const formatDate = (date) => {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Review Your Details
        </Typography>

        <Box mb={3}>
          <Divider />
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            <strong>First Name:</strong> {formData.firstName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>Last Name:</strong> {formData.lastName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>Number of Wheels:</strong> {formData.wheels}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>Vehicle Type ID:</strong> {formData.vehicleTypeId}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>Vehicle Model ID:</strong> {formData.vehicleModelId}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>Start Date:</strong> {formatDate(formData.startDate)}
          </Typography>
          <Typography variant="h6" gutterBottom>
            <strong>End Date:</strong> {formatDate(formData.endDate)}
          </Typography>
        </Box>

        <Box mt={4} display="flex" justifyContent="center" gap={2}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onBack}
            sx={{ padding: "10px 20px", width: "120px" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            sx={{ padding: "10px 20px", width: "120px" }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Step6Summary;
