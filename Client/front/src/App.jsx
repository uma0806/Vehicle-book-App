import React, { useState } from "react";
import Step1Name from "./components/Step1Name";
import Step2Wheels from "./components/Step2Wheels";
import Step3VehicleType from "./components/Step3VehicleType";
import Step4VehicleModel from "./components/Step4VehicleModel";
import Step5DateRange from "./components/Step5DateRange";
import Step6Summary from "./components/Step6Summary";

const App = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: null,
    vehicleTypeId: null,
    vehicleModelId: null,
    startDate: null,
    endDate: null,
  });

  const goToNextStep = () => setStep(step + 1);
  const goToPrevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && (
        <Step1Name
          formData={formData}
          setFormData={setFormData}
          onNext={goToNextStep}
        />
      )}
      {step === 2 && (
        <Step2Wheels
          formData={formData}
          setFormData={setFormData}
          onNext={goToNextStep}
        />
      )}
      {step === 3 && (
        <Step3VehicleType
          formData={formData}
          setFormData={setFormData}
          onNext={goToNextStep}
        />
      )}
      {step === 4 && (
        <Step4VehicleModel
          formData={formData}
          setFormData={setFormData}
          onNext={goToNextStep}
        />
      )}
      {step === 5 && (
        <Step5DateRange
          formData={formData}
          setFormData={setFormData}
          onNext={goToNextStep}
        />
      )}
      {step === 6 && (
        <Step6Summary
          formData={formData}
          onBack={goToPrevStep}
          onSubmit={() => {
            console.log("Final Submitted Data:", formData);
            alert("Booking submitted! (You can connect this to backend later)");
          }}
        />
      )}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { ThemeProvider, createGlobalStyle } from "styled-components";
// import styled from "styled-components";
// import theme from "./components/theme";
// import Step1Name from "./components/Step1Name";
// import Step2Wheels from "./components/Step2Wheels";
// import Step3VehicleType from "./components/Step3VehicleType";
// import Step4VehicleModel from "./components/Step4VehicleModel";
// import Step5DateRange from "./components/Step5DateRange";
// import Step6Summary from "./components/Step6Summary";

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//     background-color: ${theme.colors.background};
//     color: ${theme.colors.text};
//   }

//   * {
//     box-sizing: border-box;
//   }
// `;

// const MainContainer = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem 1rem;
//   min-height: 100vh;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const StepperContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 3rem;
// `;

// const StepCircle = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: ${(props) =>
//     props.active ? theme.colors.primary : "#e2e8f0"};
//   color: ${(props) => (props.active ? "white" : theme.colors.text)};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 600;
//   position: relative;
//   margin: 0 1rem;

//   &::after {
//     content: "";
//     position: absolute;
//     width: 60px;
//     height: 2px;
//     background: #e2e8f0;
//     right: -60px;
//     ${(props) => props.last && "display: none;"}
//   }
// `;

// const App = () => {
//   const [step, setStep] = useState(1);
//   const totalSteps = 6;

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     wheels: null,
//     vehicleTypeId: null,
//     vehicleModelId: null,
//     startDate: null,
//     endDate: null,
//   });

//   const goToNextStep = () => setStep(step + 1);
//   const goToPrevStep = () => setStep(step - 1);

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <Step1Name
//             formData={formData}
//             setFormData={setFormData}
//             onNext={goToNextStep}
//           />
//         );
//       case 2:
//         return (
//           <Step2Wheels
//             formData={formData}
//             setFormData={setFormData}
//             onNext={goToNextStep}
//           />
//         );
//       case 3:
//         return (
//           <Step3VehicleType
//             formData={formData}
//             setFormData={setFormData}
//             onNext={goToNextStep}
//           />
//         );
//       case 4:
//         return (
//           <Step4VehicleModel
//             formData={formData}
//             setFormData={setFormData}
//             onNext={goToNextStep}
//           />
//         );
//       case 5:
//         return (
//           <Step5DateRange
//             formData={formData}
//             setFormData={setFormData}
//             onNext={goToNextStep}
//           />
//         );
//       case 6:
//         return (
//           <Step6Summary
//             formData={formData}
//             onBack={goToPrevStep}
//             onSubmit={handleSubmit}
//           />
//         );
//       default:
//         return (
//           <Step1Name
//             formData={formData}
//             setFormData={setFormData}
//             onNext={goToNextStep}
//           />
//         );
//     }
//   };

//   const handleSubmit = () => {
//     console.log("Final Submitted Data:", formData);
//     alert("Booking submitted! Check console for details.");
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <MainContainer>
//         <StepperContainer>
//           {[...Array(totalSteps)].map((_, index) => (
//             <StepCircle
//               key={index + 1}
//               active={step > index}
//               last={index === totalSteps - 1}
//             >
//               {index + 1}
//             </StepCircle>
//           ))}
//         </StepperContainer>

//         {renderStep()}
//       </MainContainer>
//     </ThemeProvider>
//   );
// };

// export default App;
