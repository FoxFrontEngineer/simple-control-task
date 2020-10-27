import React from "react";
import "./style.sass";

interface TogglerProps {
  preLabel: string;
  postLabel: string;
  isChecked: boolean;
  onSwitch: any;
}

const Toggler = ({
  preLabel,
  postLabel,
  isChecked,
  onSwitch,
}: TogglerProps) => {
  const handleChange = () => {
    onSwitch && onSwitch();
  };

  return (
    <div>
      <span>{preLabel}</span>
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={isChecked} />
        <span className="slider round"></span>
      </label>
      <span>{postLabel}</span>
    </div>
  );
};

export default Toggler;
