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
    <div className="p-4 bg-white shadow rounded text-center">
      <h2 className="text-xl font-bold">Calculadora</h2>
      <input className="border p-2 mb-2 w-full text-right" value={input} readOnly />
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <button
            key={char}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
            className="p-2 bg-gray-300 text-xl"
          >
            {char}
          </button>
        ))}
        <button onClick={() => setInput("")} className="col-span-4 p-2 bg-red-500 text-white">Limpar</button>
      </div>
    </div>
  );
};

export default Calculator;
