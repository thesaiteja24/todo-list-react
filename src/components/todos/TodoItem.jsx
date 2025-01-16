import React from "react";
import { useTodo } from "../../context/TodoContext";

export default function TodoItem({ todo, index }) {
  const { handleEdit, handleDelete, handleComplete } = useTodo();
  return (
    <div
      key={todo._id}
      className="task-card m-3 p-2 border-black border-2 rounded-xl hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.7)]"
    >
      <h1 className="name font-extrabold text-2xl">{todo.title}</h1>
      <h6>{todo.desc}</h6>

      <div className="buttons flex flex-row justify-between">
        <h6 className="date m-1 font-semibold">Created At: {todo.date}</h6>
        <h6 className="date m-1 font-semibold">Deadline: {todo.deadline}</h6>
        <div>
          {todo.markAsDone ? (
            <span></span>
          ) : (
            <button
              type="button"
              className="text-white bg-yellow-700 hover:bg-yellow-800 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-1 mt-1 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
              onClick={() => handleComplete(todo._id)}
            >
              Mark As Done
            </button>
          )}

          {todo.markAsDone ? (
            <span></span>
          ) : (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-1 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
              onClick={() => {
                handleEdit(index);
              }}
            >
              Edit
            </button>
          )}
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-1 mt-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => handleDelete(todo._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
