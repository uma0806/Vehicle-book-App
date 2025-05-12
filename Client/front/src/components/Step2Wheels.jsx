import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const RadioOption = styled.label`
  cursor: pointer;
  input {
    margin-right: 0.5rem;
  }
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
      onNext(); // This triggers Step 3
    }
  };

  return (
    <Container>
      <Heading>How many wheels does your vehicle have?</Heading>
      <RadioGroup>
        <RadioOption>
          <input
            type="radio"
            name="wheels"
            value="2"
            checked={formData.wheels === 2}
            onChange={handleChange}
          />
          2 Wheels
        </RadioOption>
        <RadioOption>
          <input
            type="radio"
            name="wheels"
            value="4"
            checked={formData.wheels === 4}
            onChange={handleChange}
          />
          4 Wheels
        </RadioOption>
      </RadioGroup>
      {error && <ErrorText>{error}</ErrorText>}
      <NextButton onClick={handleNext}>Next</NextButton>
    </Container>
  );
};

export default Step2Wheels;
