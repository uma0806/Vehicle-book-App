import React, { useState } from "react";
import Step1Name from "./components/Step1Name";
import Step2Wheels from "./components/Step2Wheels";
import Step3VehicleType from "./components/Step3VehicleType";
import Step4VehicleModel from "./components/Step4VehicleModel";
import Step5DateRange from "./components/Step5DateRange";
import Step6Summary from "./components/Step6Summary";
// import App.css from "./App.css";
import "./App.css";

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
