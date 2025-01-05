import { createContext, useContext } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const todoState = useTodos();
  return <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>;
}

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};