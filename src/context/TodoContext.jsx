import { createContext, useContext } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const { todos, handleEdit, handleSave, handleDelete, handleComplete } =
    useTodos();

  const value = {
    todos,
    handleEdit,
    handleSave,
    handleDelete,
    handleComplete,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export const useTodo = () => useContext(TodoContext);