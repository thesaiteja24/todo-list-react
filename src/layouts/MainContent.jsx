import React from "react";
import TodoItem from "../components/todos/TodoItem";
import TodoForm from "../components/todos/TodoForm";

export default function MainContent({
  todos,
  selectedTodo,
  isEditing,
  handleEdit,
  handleSave,
  handleDelete,
  setIsEditing,
}) {
  return (
    <div className="main border-black border-2 min-h-full rounded-lg ">
      {/* <ViewButtons /> */}
      {isEditing ? (
        <TodoForm
          todo={selectedTodo}
          handleSave={handleSave}
          handleCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="flex-1 overflow-y-scroll max-h-[calc(100vh-5rem)] no-scrollbar">
          <TodoItem
            todos={todos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}
