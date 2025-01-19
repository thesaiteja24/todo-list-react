import React from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import { useTodo } from "../context/TodoContext";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { handleEdit, viewComplete, viewPending } = useTodo();
  const { toggleTheme, theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      className={`sidebar md:w-1/6 md:min-h-screen md:max-h-full p-2 transition-all duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`side-bar border-2 min-h-full rounded-lg ${
          isDark ? "border-gray-600" : "border-black"
        }`}
      >
        <div className="todo-list">
          <h1 className="font-bold text-2xl m-2 font-mono text-center">
            TODO List
          </h1>
        </div>
        <div className="action-buttons flex flex-col sm:flex-row md:flex-col items-center p-2">
          <button
            type="button"
            className={`font-medium rounded-lg text-sm px-2 py-2 m-2 w-full text-center ${
              isDark
                ? "text-white border-gray-600 border-2 hover:bg-gray-700"
                : "text-black border-black border-2 hover:bg-black hover:text-white"
            }`}
            onClick={() => handleEdit(undefined)}
          >
            Add new TODO
          </button>
          <button
            type="button"
            className={`font-medium rounded-lg text-sm px-2 py-2 m-2 w-full text-center ${
              isDark
                ? "text-white border-gray-600 border-2 hover:bg-gray-700"
                : "text-black border-black border-2 hover:bg-black hover:text-white"
            }`}
            onClick={viewPending}
          >
            Pending TODO(s)
          </button>
          <button
            type="button"
            className={`font-medium rounded-lg text-sm px-2 py-2 m-2 w-full text-center ${
              isDark
                ? "text-white border-gray-600 border-2 hover:bg-gray-700"
                : "text-black border-black border-2 hover:bg-black hover:text-white"
            }`}
            onClick={viewComplete}
          >
            Completed TODO(s)
          </button>
          <button
            className={`font-medium rounded-lg text-sm px-2 py-2 m-2 ${
              isDark ? "text-gray-400" : "text-black"
            }`}
            onClick={toggleTheme}
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>
        </div>
        <div className="quotes">
          <QuoteCard />
        </div>
      </div>
    </div>
  );
}
