import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ToDoList from "./components/toDoList";
import ClickCounter from "./components/clickCounter";
import TicTacToe from "./components/ticTacToe";
import Calculator from "./components/calculator";
import CepSearch from "./components/cepSearch";

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="p-4 mb-4">
        <nav className="flex space-x-4">
          <Link to="/todo" className="text-blue-500">To-Do List</Link>
          <Link to="/counter" className="text-blue-500">Contador de Cliques</Link>
          <Link to="/tic-tac-toe" className="text-blue-500">Jogo da Velha</Link>
          <Link to="/calculator" className="text-blue-500">Calculadora</Link>
          <Link to="/cep-search" className="text-blue-500">Buscador de CEP</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/cep-search" element={<CepSearch />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
