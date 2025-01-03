import { useState, useEffect, useCallback } from "react";
import {
  editTodo,
  saveTodo,
  deleteTodo,
  markAsDone,
} from "../utilities/todoUtils";
import { debounce } from "lodash";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  const syncToLocalStorage = debounce((todos) => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos:", error);
    }
  }, 300);

  useEffect(() => {
    syncToLocalStorage(todos);
  }, [todos]);

  const handleEdit = useCallback((index) => editTodo(todos, index), [todos]);

  const handleSave = useCallback((task) => {
    setTodos((prevTodos) => saveTodo(prevTodos, task));
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => deleteTodo(prevTodos, id));
  }, []);

  const handleComplete = useCallback((id) => {
    setTodos((prevTodos) => markAsDone(prevTodos, id));
  }, []);

  return {
    todos,
    setTodos,
    handleEdit,
    handleSave,
    handleDelete,
    handleComplete,
  };
};
