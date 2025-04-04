import React, { useState } from "react";

const CepSearch = () => {
  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchCep = async () => {
    if (!cep.match(/^[0-9]{8}$/)) {
      setError("CEP inválido");
      return;
    }
    setError("");
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const result = await response.json();
      if (result.erro) {
        setError("CEP não encontrado");
      } else {
        setData(result);
      }
    } catch {
      setError("Erro ao buscar CEP");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded text-center">
      <h2 className="text-xl font-bold">Buscador de CEP</h2>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        className="border p-2 w-full"
        placeholder="Digite o CEP"
      />
      <button onClick={fetchCep} className="bg-blue-500 text-white p-2 mt-2">Buscar</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {data && (
        <div className="mt-4 text-left">
          <p><strong>Logradouro:</strong> {data.logradouro}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.localidade} - {data.uf}</p>
        </div>
      )}
    </div>
  );
};

export default CepSearch;
