import { useState } from "react";

import Button from "./Button";
import FormInput from "./FormInput";

const ImcCalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,.]/g, "");
  };

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2 className="text-center mb-8 font-bold text-2xl">
        Calculadora de IMC
      </h2>
      <form id="imc-form">
        <div id="form-inputs" className="flex flex-col justify-between">
          <FormInput
            text="Altura (m):"
            htmlFor="height"
            id="height"
            name="height"
            placeholder="Exemplo: 1.75"
            onChange={handleHeightChange}
            value={height}
          />
          <FormInput
            text="Peso (kg):"
            htmlFor="weight"
            id="weight"
            name="weight"
            placeholder="Exemplo: 70"
            onChange={handleWeightChange}
            value={weight}
          />
        </div>
        <div id="action-control" className="flex justify-between gap-4 mt-8">
          <Button id="calc-btn" text="Calcular" type="submit" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
