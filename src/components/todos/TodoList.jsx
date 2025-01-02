import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos = [], handleEdit, handleDelete }) {
  if (!Array.isArray(todos) || todos.length === 0) {
    return <div>No tasks available</div>;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
