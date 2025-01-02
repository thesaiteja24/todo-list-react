import React, { useEffect } from "react";
import { useState } from "react";

export default function Data({ todo, handleSave, handleCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title || "");
      setDesc(todo.desc || "");
      setDate(todo.date || "");
    }
  }, [todo]);

  const saveTodo = () => {
    if (!todo || !todo.date) {
      // New todo or no existing date
      const currentDate = new Date().toLocaleDateString("en-GB");
      handleSave({ ...todo, title, desc, date: currentDate });
    } else {
      // Existing todo with date - keep the original date
      handleSave({ ...todo, title, desc, date: todo.date });
    }
  };
  return (
    <div className="mx-auto my-4 border-2 border-black p-2 w-11/12 rounded-xl">
      <div className="m-2 p-2">
        <label
          htmlFor="task-title"
          className="font-extrabold font-mono text-lg"
        >
          Title:
        </label>
        <br />
        <input
          className="border-2 border-black rounded-lg"
          type="text"
          id="task-title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="m-2 p-2">
        <label htmlFor="task-desc" className="font-extrabold font-mono text-lg">
          Description:
        </label>
        <br />
        <textarea
          className="border-2 border-black rounded-lg w-full"
          rows={5}
          type="text"
          id="task-desc"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-end m-1 p-1">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800  font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
          onClick={saveTodo}
        >
          SAVE
        </button>
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800  font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 "
          onClick={handleCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
