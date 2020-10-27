import React from "react";

interface RadioButtonProps {
  name: string;
  value: number;
  isChecked: boolean;
  label: string;
}

const RadioButton = ({ isChecked, name, value, label }: RadioButtonProps) => {
  const handleChange = (value: string) => {
    console.info(value);
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        checked={isChecked}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
