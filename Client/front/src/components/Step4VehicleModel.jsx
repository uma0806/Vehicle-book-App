//for mock data

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   padding: 2rem;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   margin-bottom: 1rem;
// `;

// const ModelList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 1.5rem;
//   margin-top: 2rem;
// `;

// const RadioOption = styled.label`
//   cursor: pointer;
//   display: block;
//   border: 1px solid #ccc;
//   padding: 1rem;
//   border-radius: 8px;
//   min-width: 120px;
//   input {
//     margin-right: 0.5rem;
//   }
// `;

// const ErrorText = styled.p`
//   color: red;
//   margin-top: 1rem;
// `;

// const NextButton = styled.button`
//   margin-top: 2rem;
//   padding: 10px 20px;
//   background-color: #1976d2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Step4VehicleModel = ({ formData, setFormData, onNext }) => {
//   const [models, setModels] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!formData.vehicleTypeId) return;

//     // ✅ Mock vehicle models data
//     const mockModels = [
//       { id: 1, name: "Honda Civic", typeId: 1 },
//       { id: 2, name: "Hyundai Verna", typeId: 1 },
//       { id: 3, name: "Hyundai Creta", typeId: 2 },
//       { id: 4, name: "Tata Nexon", typeId: 2 },
//       { id: 5, name: "Maruti Swift", typeId: 3 },
//       { id: 6, name: "KTM Duke", typeId: 4 },
//       { id: 7, name: "Royal Enfield Classic", typeId: 4 },
//       { id: 8, name: "Yamaha R15", typeId: 5 },
//     ];

//     // Filter models by selected vehicleTypeId
//     const filtered = mockModels.filter(
//       (model) => model.typeId === formData.vehicleTypeId
//     );

//     setModels(filtered);
//   }, [formData.vehicleTypeId]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, vehicleModelId: parseInt(e.target.value) });
//     setError("");
//   };

//   const handleNext = () => {
//     if (!formData.vehicleModelId) {
//       setError("Please select a vehicle model.");
//     } else {
//       onNext();
//     }
//   };

//   return (
//     <Container>
//       <Heading>Select Specific Vehicle Model</Heading>
//       <ModelList>
//         {models.map((model) => (
//           <RadioOption key={model.id}>
//             <input
//               type="radio"
//               name="vehicleModel"
//               value={model.id}
//               checked={formData.vehicleModelId === model.id}
//               onChange={handleChange}
//             />
//             {model.name}
//           </RadioOption>
//         ))}
//       </ModelList>
//       {error && <ErrorText>{error}</ErrorText>}
//       <NextButton onClick={handleNext}>Next</NextButton>
//     </Container>
//   );
// };

// export default Step4VehicleModel;
// //======================================================

//for fetching the API

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const ModelList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const RadioOption = styled.label`
  cursor: pointer;
  display: block;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  min-width: 150px;
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

const Step4VehicleModel = ({ formData, setFormData, onNext }) => {
  const [models, setModels] = useState([]);
  const [error, setError] = useState("");

  console.log(models);

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
      });
  }, [formData.vehicleTypeId]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleModelId: parseInt(e.target.value) });
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
    <Container>
      <Heading>Select a Vehicle Model</Heading>
      <ModelList>
        {models.map((model) => (
          <RadioOption key={model.id}>
            <input
              type="radio"
              name="vehicleModel"
              value={model.id}
              checked={formData.vehicleModelId === model.id}
              onChange={handleChange}
            />
            {model.modelName}
          </RadioOption>
        ))}
      </ModelList>
      {error && <ErrorText>{error}</ErrorText>}
      <NextButton onClick={handleNext}>Next</NextButton>
    </Container>
  );
};

export default Step4VehicleModel;
