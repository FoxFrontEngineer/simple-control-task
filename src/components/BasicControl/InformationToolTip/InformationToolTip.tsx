import React, { useState } from "react";
import classnames from "classnames";

import "./style.sass";

const InformationToolTip = () => {
  const [mode, setMode] = useState("hover");

  const handleMode = (mode: string) => {
    setMode(mode);
  };

  return (
    <div className={classnames("info", mode === "static" && "info--close")}>
      {mode === "hover" ? (
        <>
          <div className="info-hover" onClick={() => handleMode("static")}>
            <span>i</span>
          </div>
          <div className="info-hover__tooltip">
            МРОТ &mdash; минимальный размер оплаты труда. Разный для разных
            регионов.
          </div>
        </>
      ) : (
        <>
          <div className="info-hover" onClick={() => handleMode("hover")}>
            <span className="close"></span>
          </div>
          <div className="info-hover__tooltip info-hover__tooltip--show">
            МРОТ &mdash; минимальный размер оплаты труда. Разный для разных
            регионов.
          </div>
        </>
      )}
    </div>
  );
};

export default InformationToolTip;
