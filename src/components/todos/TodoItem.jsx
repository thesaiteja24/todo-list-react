import React, { useContext } from "react";
import { useTodo } from "../../context/TodoContext";
import { useTheme } from "../../context/ThemeContext";

export default function TodoItem({ todo, index }) {
  const { handleEdit, handleDelete, handleComplete } = useTodo();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      key={todo._id}
      className={`task-card m-3 p-4 rounded-xl transition-all duration-300 shadow-lg ${
        isDark
          ? "bg-gray-800 text-white border-gray-600 hover:shadow-gray-700"
          : "bg-white text-black border-black hover:shadow-gray-400"
      }`}
    >
      <h1 className="name font-extrabold text-2xl mb-2">{todo.title}</h1>
      <p className="desc text-sm mb-4">{todo.desc}</p>

      <div className="buttons flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
        <div className="dates text-sm font-semibold mb-2 sm:mb-0">
          <p>Created At: {todo.date}</p>
          <p>Deadline: {todo.deadline}</p>
        </div>
        <div className="actions flex flex-wrap gap-2">
          {!todo.markAsDone && (
            <button
              type="button"
              className={`rounded-full text-sm px-5 py-1 font-medium transition-all ${
                isDark
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : "bg-yellow-500 hover:bg-yellow-600 text-black"
              }`}
              onClick={() => handleComplete(todo._id)}
            >
              Mark As Done
            </button>
          )}
          {!todo.markAsDone && (
            <button
              type="button"
              className={`rounded-full text-sm px-5 py-1 font-medium transition-all ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-black"
              }`}
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className={`rounded-full text-sm px-5 py-1 font-medium transition-all ${
              isDark
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-black"
            }`}
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
