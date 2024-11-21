import React, { useEffect } from "react";
import { useState } from "react";

export default function Data({ todo, handleSave, handleCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title || "");
      setDesc(todo.desc || "");
    }
  }, [todo]);

  const saveTodo = () => {
    handleSave({ ...todo, title, desc });
  };

  return (
    <div className="border-2 border-black m-2 p-2 w-1/2 rounded-xl">
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
        rows={10}
        cols={30 }
          className="border-2 border-black rounded-lg"
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
