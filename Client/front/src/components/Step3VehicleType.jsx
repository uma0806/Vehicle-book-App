//for mock data

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// // ✅ Styled Components
// const Container = styled.div`
//   padding: 2rem;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   margin-bottom: 1rem;
// `;

// const TypeList = styled.div`
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

// // ✅ Component
// const Step3VehicleType = ({ formData, setFormData, onNext }) => {
//   const [types, setTypes] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!formData.wheels) return;

//     // ✅ Mocked vehicle types with wheel counts
//     const mockTypes = [
//       { id: 1, name: "Sedan", wheels: 4 },
//       { id: 2, name: "SUV", wheels: 4 },
//       { id: 3, name: "Hatchback", wheels: 4 },
//       { id: 4, name: "Cruiser", wheels: 2 },
//       { id: 5, name: "Sports", wheels: 2 },
//     ];

//     // Filter based on selected wheels
//     const filtered = mockTypes.filter(
//       (type) => type.wheels === formData.wheels
//     );

//     setTypes(filtered);
//   }, [formData.wheels]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, vehicleTypeId: parseInt(e.target.value) });
//     setError("");
//   };

//   const handleNext = () => {
//     if (!formData.vehicleTypeId) {
//       setError("Please select a vehicle type.");
//     } else {
//       onNext();
//     }
//   };

//   return (
//     <Container>
//       <Heading>Select Vehicle Type</Heading>
//       <TypeList>
//         {types.map((type) => (
//           <RadioOption key={type.id}>
//             <input
//               type="radio"
//               name="vehicleType"
//               value={type.id}
//               checked={formData.vehicleTypeId === type.id}
//               onChange={handleChange}
//             />
//             {type.name}
//           </RadioOption>
//         ))}
//       </TypeList>
//       {error && <ErrorText>{error}</ErrorText>}
//       <NextButton onClick={handleNext}>Next</NextButton>
//     </Container>
//   );
// };

// export default Step3VehicleType;

//for API fetching data
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const TypeList = styled.div`
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
  min-width: 120px;
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

const Step3VehicleType = ({ formData, setFormData, onNext }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Ensure wheels value exists before making API call
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
    <div>
      <h2>Select Vehicle Type</h2>
      {vehicleTypes.map((type) => (
        <div key={type.id}>
          <input
            type="radio"
            name="vehicleType"
            value={type.id}
            checked={formData.vehicleTypeId === type.id}
            onChange={() => handleSelect(type.id)}
          />
          {type.typeName} ({type.wheels} wheels)
        </div>
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step3VehicleType;
