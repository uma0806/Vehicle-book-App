import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Grid,
  Box,
} from "@mui/material";

const Step3VehicleType = ({ formData, setFormData, onNext }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (formData.wheels) {
      axios
        .get(
          `http://localhost:5000/api/vehicle-types?wheels=${formData.wheels}`
        )
        .then((res) => setVehicleTypes(res.data))
        .catch((err) => {
          console.error("Error fetching vehicle types:", err);
          setError("Failed to fetch vehicle types. Please try again.");
        });
    } else {
      setError("Wheels information is missing. Please go back and select.");
    }
  }, [formData.wheels]);

  const handleSelect = (id) => {
    setFormData({ ...formData, vehicleTypeId: id });
    setError("");
  };

  const handleNext = () => {
    if (!formData.vehicleTypeId) {
      setError("Please select a vehicle type.");
    } else {
      onNext();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Select Vehicle Type
      </Typography>

      <Grid container spacing={2} justifyContent="center" mt={2}>
        {vehicleTypes.map((type) => (
          <Grid item xs={12} sm={6} md={4} key={type.id}>
            <Paper
              elevation={formData.vehicleTypeId === type.id ? 6 : 1}
              sx={{
                p: 2,
                border:
                  formData.vehicleTypeId === type.id
                    ? "2px solid #1976d2"
                    : "1px solid #ccc",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => handleSelect(type.id)}
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={formData.vehicleTypeId === type.id}
                    onChange={() => handleSelect(type.id)}
                  />
                }
                label={`${type.typeName} (${type.wheels} wheels)`}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {error && (
        <Typography color="error" variant="body2" align="center" mt={2}>
          {error}
        </Typography>
      )}

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Step3VehicleType;
