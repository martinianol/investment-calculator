const UserInput = ({ id, title, value, onChange }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      />
    </div>
  );
};

export default UserInput;
