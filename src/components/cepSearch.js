// src/components/cepSearch.js
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
        setData(null);
      } else {
        setData(result);
      }
    } catch {
      setError("Erro ao buscar CEP");
      setData(null);
    }
  };

  return (
    <div className="cep-search">
      <h2>Buscador de CEP</h2>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        className="cep-input"
        placeholder="Digite o CEP (ex: 01001000)"
      />
      <button onClick={fetchCep} className="cep-button">Buscar</button>
      {error && <p className="cep-error">{error}</p>}
      {data && (
        <div className="cep-result">
          <p><strong>Logradouro:</strong> {data.logradouro}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.localidade} - {data.uf}</p>
        </div>
      )}
    </div>
  );
};

export default CepSearch;
