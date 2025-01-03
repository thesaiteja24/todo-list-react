// src/layouts/MainContent.jsx
import React from "react";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import { useTodo } from "../context/TodoContext";

export default function MainContent() {
  const {
    isEditing,
    selectedTodo,
    handleEdit,
    handleSave,
    handleDelete,
    setIsEditing,
    handleComplete,
  } = useTodo();

  return (
    <div className="main md:w-5/6 md:min-h-screen md:max-h-full p-2">
      <div className="main border-black border-2 min-h-full rounded-lg ">
        {isEditing ? (
          <TodoForm
            todo={selectedTodo}
            handleSave={handleSave}
            handleCancel={() => setIsEditing(false)}
          />
        ) : (
          <div className="flex-1 overflow-y-scroll max-h-[calc(100vh-5rem)] no-scrollbar">
            <TodoList handleEdit={handleEdit} handleDelete={handleDelete} handleComplete={handleComplete}/>
          </div>
        )}
      </div>
    </div>
  );
}
