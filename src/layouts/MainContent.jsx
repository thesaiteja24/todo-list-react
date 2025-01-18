import React from "react";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import { useTodo } from "../context/TodoContext";
import { useTheme } from "../context/ThemeContext";

export default function MainContent() {
  const { isEditing } = useTodo();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      className={`main md:w-5/6 md:min-h-screen md:max-h-full p-2 ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        className={`main min-h-full rounded-lg ${
          isDark ? " border-gray-600 border-2" : "border-black border-2"
        }`}
      >
        {isEditing ? (
          <TodoForm />
        ) : (
          <div className="flex-1 overflow-y-scroll max-h-[calc(100vh-5rem)] no-scrollbar">
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
}
