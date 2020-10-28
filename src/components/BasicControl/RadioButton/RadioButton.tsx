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
    <div className="form-check">
      <input
        className="form-check__input"
        type="radio"
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        checked={isChecked}
      />
      <label className="form-check__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
