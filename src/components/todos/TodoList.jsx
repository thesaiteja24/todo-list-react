import React from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "../../context/TodoContext";

export default function TodoList({ handleEdit, handleDelete }) {
  const { todos } = useTodo();
  
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
