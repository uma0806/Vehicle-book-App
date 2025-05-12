import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
`;

const SummaryItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: left;
`;

const Label = styled.span`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.secondary ? "#ccc" : "#1976d2")};
  color: ${(props) => (props.secondary ? "#000" : "white")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Step6Summary = ({ formData, onBack, onSubmit }) => {
  // Helper to format dates
  const formatDate = (date) => {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <Container>
      <Heading>Review Your Details</Heading>
      <SummaryItem>
        <Label>First Name:</Label> {formData.firstName}
      </SummaryItem>
      <SummaryItem>
        <Label>Last Name:</Label> {formData.lastName}
      </SummaryItem>
      <SummaryItem>
        <Label>Number of Wheels:</Label> {formData.wheels}
      </SummaryItem>
      <SummaryItem>
        <Label>Vehicle Type ID:</Label> {formData.vehicleTypeId}
      </SummaryItem>
      <SummaryItem>
        <Label>Vehicle Model ID:</Label> {formData.vehicleModelId}
      </SummaryItem>
      <SummaryItem>
        <Label>Start Date:</Label> {formatDate(formData.startDate)}
      </SummaryItem>
      <SummaryItem>
        <Label>End Date:</Label> {formatDate(formData.endDate)}
      </SummaryItem>

      <ButtonGroup>
        <Button secondary onClick={onBack}>
          Back
        </Button>
        <Button onClick={onSubmit}>Submit</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Step6Summary;
