import React, { useState } from "react";
import "../App.css"; // Certifique-se de que o estilo global está importado

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="click-counter">
      <h2>Contador de Cliques</h2>
      <p className="counter-value">{count}</p>
      <button onClick={() => setCount(count + 1)}>Clique Aqui</button>
    </div>
  );
};

export default ClickCounter;
