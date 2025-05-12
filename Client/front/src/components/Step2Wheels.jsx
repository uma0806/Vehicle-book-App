import React, { useState } from "react";
import {
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Paper,
  Box,
} from "@mui/material";

const Step2Wheels = ({ onNext, formData, setFormData }) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, wheels: parseInt(e.target.value) });
    setError("");
  };

  const handleNext = () => {
    if (!formData.wheels) {
      setError("Please select number of wheels.");
    } else {
      onNext();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          How many wheels does your vehicle have?
        </Typography>

        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="wheels"
            name="wheels"
            value={formData.wheels || ""}
            onChange={handleChange}
            sx={{ justifyContent: "center", mt: 2 }}
          >
            <FormControlLabel value={2} control={<Radio />} label="2 Wheels" />
            <FormControlLabel value={4} control={<Radio />} label="4 Wheels" />
          </RadioGroup>
        </FormControl>

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
      </Paper>
    </Container>
  );
};

export default Step2Wheels;
