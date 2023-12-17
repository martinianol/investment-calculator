import { useState } from "react";
import UserInput from "./UserInput";

const INITIAL_VALUES = {
  initialInvestment: 0,
  anualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

const UserInputs = ({ values, onChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          id="initialInvestment"
          title="Initial Investment"
          value={values.initialInvestment}
          onChange={onChange}
        />
        <UserInput
          id="anualInvestment"
          title="Anual Investment"
          value={values.anualInvestment}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <UserInput
          id="expectedReturn"
          title="Expected Return"
          value={values.expectedReturn}
          onChange={onChange}
        />
        <UserInput
          id="duration"
          title="Duration"
          value={values.duration}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default UserInputs;
