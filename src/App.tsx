import React from "react";

import BasicControl from "./components/BasicControl/BasicControl";

import "./App.sass";

const App = () => {
  return (
    <div className="container mt-5">
      <p className="label">Сумма</p>
      <BasicControl />
    </div>
  );
};

export default App;
