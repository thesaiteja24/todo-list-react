// src/context/TodoContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { editTodo, saveTodo, deleteTodo } from "../utilities/todoUtils";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load todos from localStorage on mount
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const handleEdit = (index) => {
    const todo = editTodo(todos, index);
    setSelectedTodo(todo);
    setIsEditing(true);
  };

  const handleSave = (task) => {
    const updatedTodos = saveTodo(todos, task);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setIsEditing(false);
    setSelectedTodo(null);
  };

  const handleDelete = (id) => {
    const updatedTodos = deleteTodo(todos, id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const value = {
    todos,
    selectedTodo,
    isEditing,
    handleEdit,
    handleSave,
    handleDelete,
    setIsEditing,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export const useTodo = () => useContext(TodoContext);
