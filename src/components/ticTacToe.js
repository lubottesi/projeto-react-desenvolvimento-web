import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || checkWinner()) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
      [0, 4, 8], [2, 4, 6]  // Diagonais
    ];
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div className="tictactoe">
      <h2>Jogo da Velha</h2>
      <div className="tictactoe-grid">
        {board.map((cell, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      {checkWinner() && (
        <p className="winner">Vencedor: {checkWinner()}</p>
      )}
    </div>
  );
  
};

export default TicTacToe;
