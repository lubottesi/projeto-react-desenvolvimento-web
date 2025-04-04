import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import ToDoList from "./components/toDoList";
import ClickCounter from "./components/clickCounter";
import TicTacToe from "./components/ticTacToe";
import Calculator from "./components/calculator";
import CepSearch from "./components/cepSearch";

// Header estilizado e centralizado
const Header = () => {
  const location = useLocation();
  const tabs = [
    { path: "/todo", name: "To-Do List" },
    { path: "/counter", name: "Click Counter" },
    { path: "/tic-tac-toe", name: "Tic-Tac-Toe" },
    { path: "/calculator", name: "Calculator" },
    { path: "/cep-search", name: "ZIP Code Finder" },
  ];

  return (
    <header className="header p-4 shadow mb-8">
  <nav>
    <ul>
      {tabs.map(tab => (
        <li key={tab.path}>
          <Link
            to={tab.path}
            className={`nav-link ${location.pathname === tab.path ? 'active' : ''}`}
          >
            {tab.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</header>

  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
        <Header />
        <main className="w-full max-w-3xl">
          <Routes>
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/counter" element={<ClickCounter />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/cep-search" element={<CepSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
