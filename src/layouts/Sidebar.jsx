// src/layouts/Sidebar.jsx
import React from "react";
import QuoteCard from "../components/quotes/QuoteCard";
import { useTodo } from "../context/TodoContext";

export default function Sidebar() {
  const { handleEdit } = useTodo();

  return (
    <div className="sidebar md:w-1/6 md:min-h-screen md:max-h-full p-2">
      <div className="side-bar border-black border-2 min-h-full rounded-lg">
        <div className="todo-list">
          <h1 className="font-bold text-2xl m-2 font-mono text-center">
            TODO List
          </h1>
        </div>
        <div className="action-buttons flex flex-col sm:flex-row md:flex-col items-center p-2">
          <button
            type="button"
            className="text-black-700 hover:text-white border border-black-700 hover:bg-black font-medium rounded-lg text-sm px-2 py-2 m-2 w-full text-center"
            onClick={() => handleEdit(undefined)}
          >
            Add new TODO
          </button>
          <button
            type="button"
            className="text-black-700 hover:text-white border border-black-700 hover:bg-black font-medium rounded-lg text-sm px-2 py-2 m-2 w-full text-center"
          >
            Show all TODO(s)
          </button>
          <button
            type="button"
            className="text-black-700 hover:text-white border border-black-700 hover:bg-black font-medium rounded-lg text-sm px-2 py-2 m-2 w-full text-center"
          >
            Completed TODO(s)
          </button>
        </div>
        <div className="quotes">
          <QuoteCard />
        </div>
      </div>
    </div>
  );
}
