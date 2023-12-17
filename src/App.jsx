import { useState } from "react";

import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

const INITIAL_VALUES = {
  initialInvestment: 0,
  anualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [inputValues, setInputValues] = useState(INITIAL_VALUES);

  const handleInputChange = (id, value) => {
    setInputValues((prevState) => {
      const newValues = { ...prevState };
      newValues[id] = value;
      return newValues;
    });
  };

  return (
    <>
      <Header />
      <UserInputs onChange={handleInputChange} values={inputValues} />
      <Results />
    </>
  );
}

export default App;
