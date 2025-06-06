// src/App.jsx
import React from "react";
import ValidationForm from "./components/ValidationForm";
import RadioButtonForm from "./components/RadioButtonForm";
import MultiFieldForm from "./components/MultiFieldForm";
import CustomHookForm from "./components/CustomHookForm";
import ComplexForm from "./components/ComplexForm";
import ControlledForm from "./components/ControlledForm";
import CheckboxForm from "./components/CheckboxForm";
import UncontrolledForm from "./components/UncontrolledForm";
import SelectForm from "./components/SelectForm";

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>1. Validation Form</h2>
      <ValidationForm />

      <h2>2️. Radio Button Form</h2>
      <RadioButtonForm />

      <h2>3️.Multi-Field Form</h2>
      <MultiFieldForm />

      <h2>4.Custom Hook Form</h2>
      <CustomHookForm />

      <h2>5️. Complex Form with useReducer</h2>
      <ComplexForm />

      <h2>6. Controlled Form</h2>
      <ValidationForm />

      <h2>7. Uncontrolled Form</h2>
      <ValidationForm />

      <h2>8. Checkbox Form</h2>
      <ValidationForm />

      <h2>9. Select Form</h2>
      <SelectForm />
    </div>
  );
};

export default App;
