import React, { useState } from "react";d
import TodoForm from "../components/todos/TodoForm";
import { editTodo, saveTodo, deleteTodo } from "../utilities/todoUtils";
import TodoList from "../components/todos/TodoList";

export default function MainContent({ todos, setTodos }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit(index) {
    const todo = editTodo(todos, index);
    setSelectedTodo(todo);
    setIsEditing(true);
  }

  function handleSave(task) {
    const updatedTodos = saveTodo(todos, task);
    setTodos(updatedTodos);
    setIsEditing(false);
    setSelectedTodo(null);
  }

  function handleDelete(id) {
    const updatedTodos = deleteTodo(todos, id);
    setTodos(updatedTodos);
  }

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
            <TodoList
              todos={todos}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
}
