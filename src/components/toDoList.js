import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Adicione uma tarefa..."
      />
      <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded">Adicionar</button>
      <ul className="mt-4">
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            {t}
            <button onClick={() => removeTask(index)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
