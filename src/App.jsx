import { useState } from "react";

import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

import { calculateInvestmentResults, formatter } from "./util/investment";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [inputValues, setInputValues] = useState(INITIAL_VALUES);

  const handleInputChange = (id, value) => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [id]: Number(value),
      };
    });
  };

  const annualData = calculateInvestmentResults(inputValues);
  const inputIsValid = inputValues.duration > 0;

  return (
    <>
      <Header />
      <UserInputs onChange={handleInputChange} values={inputValues} />
      {inputIsValid ? (
        <Results data={annualData} />
      ) : (
        <p className="center">Duration should be higher than 0</p>
      )}
    </>
  );
}

export default App;
