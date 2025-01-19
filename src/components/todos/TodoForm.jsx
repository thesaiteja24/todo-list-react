import React, { useEffect, useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { useTheme } from "../../context/ThemeContext";

export default function TodoForm() {
  const { selectedTodo, handleSave, handleCancel } = useTodo();
  const { theme } = useTheme(); // Access the current theme
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title || "");
      setDesc(selectedTodo.desc || "");
      setDeadline(selectedTodo.deadline || "");
    }
  }, [selectedTodo]);

  const saveTodo = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    handleSave({
      ...selectedTodo,
      title,
      desc,
      date: selectedTodo?.date || currentDate,
      deadline,
    });
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`mx-auto my-4 p-4 w-11/12 rounded-xl border-2 transition-all duration-300 ${
        isDark
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-black border-black"
      }`}
    >
      <div className="m-2">
        <label
          htmlFor="task-title"
          className="font-extrabold font-mono text-lg block mb-2"
        >
          Title:
        </label>
        <input
          className={`w-full p-2 rounded-lg border-2 ${
            isDark
              ? "bg-gray-700 text-white border-gray-500 focus:border-gray-400"
              : "bg-white text-black border-gray-300 focus:border-black"
          }`}
          type="text"
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="m-2">
        <label
          htmlFor="task-desc"
          className="font-extrabold font-mono text-lg block mb-2"
        >
          Description:
        </label>
        <textarea
          className={`w-full p-2 rounded-lg border-2 ${
            isDark
              ? "bg-gray-700 text-white border-gray-500 focus:border-gray-400"
              : "bg-white text-black border-gray-300 focus:border-black"
          }`}
          rows={5}
          id="task-desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="m-2">
        <label
          htmlFor="deadline"
          className="font-extrabold font-mono text-lg block mb-2"
        >
          Deadline:
        </label>
        <input
          type="date"
          id="deadline"
          className={`w-full p-2 rounded-lg border-2 ${
            isDark
              ? "bg-gray-700 text-white border-gray-500 focus:border-gray-400"
              : "bg-white text-black border-gray-300 focus:border-black"
          }`}
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div className="flex justify-end gap-3 m-2">
        <button
          type="button"
          className={`rounded-full text-sm px-5 py-2 font-medium transition-all ${
            isDark
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-green-500 hover:bg-green-600 text-black"
          }`}
          onClick={saveTodo}
        >
          SAVE
        </button>
        <button
          type="button"
          className={`rounded-full text-sm px-5 py-2 font-medium transition-all ${
            isDark
              ? "bg-gray-600 hover:bg-gray-700 text-white"
              : "bg-gray-500 hover:bg-gray-600 text-black"
          }`}
          onClick={handleCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
