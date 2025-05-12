import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { DateRangePicker } from "@mui/x-date-pickers-pro";
// import { DateRangePicker } from "@mui/x-date-pickers/DateRangePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro";

import { Box, TextField } from "@mui/material";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 1rem;
`;

const NextButton = styled.button`
  margin-top: 2rem;
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Step5DateRange = ({ formData, setFormData, onNext }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [error, setError] = useState("");

  useEffect(() => {
    setDateRange([formData.startDate || null, formData.endDate || null]);
  }, []);

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
    <Container>
      <Heading>Select Booking Date Range</Heading>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)}
          renderInput={(startProps, endProps) => (
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <TextField {...startProps} />
              <TextField {...endProps} />
            </Box>
          )}
        />
      </LocalizationProvider>
      {error && <ErrorText>{error}</ErrorText>}
      <NextButton onClick={handleNext}>Next</NextButton>
    </Container>
  );
};

export default Step5DateRange;
