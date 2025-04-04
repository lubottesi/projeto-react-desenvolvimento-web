import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <input className="calculator-display" value={input} readOnly />
      <div className="calculator-grid">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
          >
            {char}
          </button>
        ))}
        <button onClick={() => setInput("")} className="clear-button">Limpar</button>
      </div>
    </div>
  );
  
};

export default Calculator;
