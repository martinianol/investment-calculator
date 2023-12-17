import { useState } from "react";
import UserInput from "./UserInput";

const INITIAL_VALUES = {
  initialInvestment: 0,
  anualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

const UserInputs = () => {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (id, value) => {
    setValues((prevState) => {
      const newValues = { ...prevState };
      newValues[id] = value;
      return newValues;
    });
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          id="initialInvestment"
          title="Initial Investment"
          value={values.initialInvestment}
          onChange={handleChange}
          />
        <UserInput
          id="anualInvestment"
          title="Anual Investment"
          value={values.anualInvestment}
          onChange={handleChange}
          />
      </div>
      <div className="input-group">
        <UserInput
          id="expectedReturn"
          title="Expected Return"
          value={values.expectedReturn}
          onChange={handleChange}
          />
        <UserInput id="duration" title="Duration" value={values.duration} onChange={handleChange}/>
      
      </div>
    </div>
  );
};

export default UserInputs;
