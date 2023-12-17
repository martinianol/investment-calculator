const UserInput = ({ id, title, value, onChange }) => {
  return (
    <p>
      <label>{title}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        required
      />
    </p>
  );
};

export default UserInput;
