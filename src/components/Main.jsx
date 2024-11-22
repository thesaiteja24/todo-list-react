import React from "react";
import ViewButtons from "./ViewButtons";
import TaskCard from "./TaskCard";
import Data from "./Data";

export default function Main({ todos, selectedTodo, isEditing, handleEdit, handleSave, setIsEditing }) {
  return (
    <div className="main border-black border-2 min-h-full rounded-lg">
      <ViewButtons />
      {isEditing ? (
        <Data
          todo={selectedTodo}
          handleSave={handleSave}
          handleCancel={() => setIsEditing(false)}
        />
      ) : (
        <TaskCard todos={todos} handleEdit={handleEdit} />
      )}
    </div>
  );
}
