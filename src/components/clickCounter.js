import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white shadow rounded text-center">
      <h2 className="text-xl font-bold">Contador de Cliques</h2>
      <p className="text-2xl my-4">{count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-green-500 text-white p-2 rounded">
        Clique Aqui
      </button>
    </div>
  );
};

export default ClickCounter;
