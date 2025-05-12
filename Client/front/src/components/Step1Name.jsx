// import React, { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   padding: 2rem;
//   text-align: center;
// `;

// const InputGroup = styled.div`
//   margin: 1rem 0;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin: 0 0.5rem;
// `;

// const Button = styled.button`
//   margin-top: 2rem;
//   padding: 10px 20px;
//   background-color: #1976d2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const ErrorText = styled.p`
//   color: red;
// `;

// const Step1Name = ({ formData, setFormData, onNext }) => {
//   const [error, setError] = useState("");

//   const handleNext = () => {
//     if (formData.firstName.length < 2 || formData.lastName.length < 2) {
//       setError("Both names should be at least 2 characters long.");
//     } else {
//       setError("");
//       onNext();
//     }
//   };

//   return (
//     <Container>
//       <h2>What is your name?</h2>
//       <InputGroup>
//         <Input
//           type="text"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={(e) =>
//             setFormData({ ...formData, firstName: e.target.value })
//           }
//         />
//         <Input
//           type="text"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={(e) =>
//             setFormData({ ...formData, lastName: e.target.value })
//           }
//         />
//       </InputGroup>
//       {error && <ErrorText>{error}</ErrorText>}
//       <Button onClick={handleNext}>Next</Button>
//     </Container>
//   );
// };

// export default Step1Name;
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Stack,
  Paper,
} from "@mui/material";

const Step1Name = ({ formData, setFormData, onNext }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (formData.firstName.length < 2 || formData.lastName.length < 2) {
      setError("Both names should be at least 2 characters long.");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom align="center">
          What is your name?
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </Stack>

        {error && (
          <Typography color="error" variant="body2" mb={2}>
            {error}
          </Typography>
        )}

        <Box textAlign="center">
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Step1Name;
