import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Paper,
  Radio,
  FormControlLabel,
  Grid,
  Button,
  Box,
} from "@mui/material";

const Step4VehicleModel = ({ formData, setFormData, onNext }) => {
  const [models, setModels] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!formData.vehicleTypeId) return;

    axios
      .get(
        `http://localhost:5000/api/vehicles?typeId=${formData.vehicleTypeId}`
      )
      .then((res) => setModels(res.data))
      .catch((err) => {
        console.error("Error fetching vehicle models", err);
        setModels([]);
        setError("Failed to fetch models. Please try again.");
      });
  }, [formData.vehicleTypeId]);

  const handleSelect = (id) => {
    setFormData({ ...formData, vehicleModelId: id });
    setError("");
  };

  const handleNext = () => {
    if (!formData.vehicleModelId) {
      setError("Please select a vehicle model.");
    } else {
      onNext();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Select a Vehicle Model
      </Typography>

      <Grid container spacing={2} justifyContent="center" mt={2}>
        {models.map((model) => (
          <Grid item xs={12} sm={6} md={4} key={model.id}>
            <Paper
              elevation={formData.vehicleModelId === model.id ? 6 : 1}
              sx={{
                p: 2,
                border:
                  formData.vehicleModelId === model.id
                    ? "2px solid #1976d2"
                    : "1px solid #ccc",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => handleSelect(model.id)}
            >
              <FormControlLabel
                control={
                  <Radio
                    checked={formData.vehicleModelId === model.id}
                    onChange={() => handleSelect(model.id)}
                  />
                }
                label={model.modelName}
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

export default Step4VehicleModel;
