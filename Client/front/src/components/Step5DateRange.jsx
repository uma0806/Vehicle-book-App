import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Step5DateRange = ({ formData, setFormData, onNext }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [error, setError] = useState("");

  useEffect(() => {
    setDateRange([formData.startDate || null, formData.endDate || null]);
  }, [formData]);

  const handleNext = () => {
    if (!dateRange[0] || !dateRange[1]) {
      setError("Please select a valid date range.");
    } else {
      setFormData({
        ...formData,
        startDate: dateRange[0],
        endDate: dateRange[1],
      });
      setError("");
      onNext();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Select Booking Date Range
        </Typography>

        <Box mt={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              renderInput={(startProps, endProps) => (
                <Box display="flex" gap={2} justifyContent="center">
                  <TextField fullWidth {...startProps} />
                  <TextField fullWidth {...endProps} />
                </Box>
              )}
            />
          </LocalizationProvider>
        </Box>

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

export default Step5DateRange;
