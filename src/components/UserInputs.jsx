import UserInput from "./UserInput";

const UserInputs = ({ values, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          id="initialInvestment"
          title="Initial Investment"
          value={values.initialInvestment}
          onChange={onChange}
        />
        <UserInput
          id="annualInvestment"
          title="Anual Investment"
          value={values.annualInvestment}
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
    </section>
  );
};

export default UserInputs;
