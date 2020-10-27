import React, { useState } from "react";

import "./style.sass";

const InformationToolTip = () => {
  const [mode, setMode] = useState("hover");

  const handleMode = (mode: string) => {
    setMode(mode);
  };

  return (
    <div className="information">
      {mode === "hover" ? (
        <>
          <span className="info-hover" onClick={() => handleMode("static")}>
            i
          </span>
          <div className="info-hover__tooltip">
            МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
          </div>
        </>
      ) : (
        <>
          <span onClick={() => handleMode("hover")}>x</span>
          <div className="info-hover__tooltip info-hover__tooltip--show">
            МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
          </div>
        </>
      )}
    </div>
  );
};

export default InformationToolTip;
