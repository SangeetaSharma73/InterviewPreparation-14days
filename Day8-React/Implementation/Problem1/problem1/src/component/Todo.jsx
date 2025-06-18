import React, { useState } from "react";
import RealTimeValidationForm from "./RealTimeValidationForm";
import ParentComponent from "./ParentComponent";
import List from "./List";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [editingId, setEditingId] = useState(null); // Track which todo is being edited

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: input,
        isCompleted: false,
      },
    ]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = (id) => {
    const updatedTask = todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTask);
  };

  const handleEdit = (id, currentTask) => {
    setEditingId(id);
    setEditInput(currentTask); // Set the current task as the value for the edit input
  };

  const saveEdit = (id) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, task: editInput } : t
    );
    setTodos(updatedTodos);
    setEditingId(null); // Clear the editing state after saving
  };

  return (
    <>
      <div>
        <h1>Add Todo Here</h1>
        <input
          type="text"
          value={input}
          placeholder="add task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>add todo</button>
      </div>
      <div>
        <h1>All Tasks</h1>
        {todos.length > 0 ? (
          todos.map((t) => (
            <div
              key={t.id}
              style={{ border: "2px dotted cyan", margin: "1rem" }}
            >
              {editingId === t.id ? (
                <div>
                  <input
                    type="text"
                    value={editInput}
                    placeholder="editTodo"
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button onClick={() => saveEdit(t.id)}>Save Edit</button>
                </div>
              ) : (
                <div>
                  <h2>Id: {t.id}</h2>
                  <h2>Task: {t.task}</h2>
                  <button
                    style={{
                      color: "cyan",
                      backgroundColor: t.isCompleted ? "green" : "orange",
                    }}
                    onClick={() => handleToggle(t.id)}
                  >
                    {t.isCompleted ? "Completed" : "Incomplete"}
                  </button>
                  <button
                    style={{
                      color: "red",
                    }}
                    onClick={() => deleteTodo(t.id)}
                  >
                    Delete Todo
                  </button>
                </div>
              )}
              {editingId !== t.id && (
                <button onClick={() => handleEdit(t.id, t.task)}>
                  Edit Todo
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No data found...</p>
        )}
      </div>
      <RealTimeValidationForm />
      <ParentComponent />
      <List items={todos} />
    </>
  );
};

export default Todo;
