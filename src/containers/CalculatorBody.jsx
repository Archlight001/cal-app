import React from "react";
import Numbers from "../components/Numbers";
import Operators from "../components/Operators";

function CalculatorBody() {
  return (
    <div className="calculator__body">
      <Numbers />
      <Operators />
    </div>
  );
}

export default CalculatorBody;
