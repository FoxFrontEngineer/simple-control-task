import React from "react";

import "./style.sass";

interface RadioButtonProps {
  name: string;
  value: number;
  isChecked: boolean;
  label: string;
  onCheck: any;
}

const RadioButton = ({
  isChecked,
  name,
  value,
  label,
  onCheck,
}: RadioButtonProps) => {
  const handleChange = (value: string) => {
    onCheck && onCheck(+value);
  };

  return (
    <div className="radio">
      <input
        className="radio__input"
        type="radio"
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        checked={isChecked}
      />
      <label htmlFor={name}>{label}</label>
      <span className="checkmark"></span>
    </div>
  );
};

export default RadioButton;
