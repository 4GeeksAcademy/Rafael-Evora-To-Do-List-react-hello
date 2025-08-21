import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState(null); // track selected task index

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  const toggleSelect = (idx) => {
    setSelected(selected === idx ? null : idx); // deselect if clicked again
  };

  return (
    <div className="text-center">
      <h1>My toDo List</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask}>Add</button>
        <ul id="task-list" className="card">
          {tasks.length === 0 ? (
            <li
              style={{
                textAlign: "center",
                color: "#888",
                fontStyle: "italic",
                padding: "10px"
              }}
            >
              No tasks, add a task
            </li>
          ) : (
            tasks.map((task, idx) => (
              <li
                key={idx}
                onClick={() => toggleSelect(idx)}
                className="task-item"
                style={{
                  cursor: "pointer",
                  backgroundColor: selected === idx ? "#f0f0f0" : "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px",
                  borderBottom: "1px solid #ddd",
                  position: "relative"
                }}
              >
                - {task}
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting when deleting
                    deleteTask(idx);
                  }}
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
