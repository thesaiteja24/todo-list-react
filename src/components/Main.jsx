import React from "react";
import ViewButtons from "./ViewButtons";
import TaskCard from "./TaskCard";
import Data from "./Data";

export default function Main({
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
      <ViewButtons />
      {isEditing ? (
        <Data
          todo={selectedTodo}
          handleSave={handleSave}
          handleCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="flex-1 overflow-y-scroll max-h-[calc(100vh-5rem)] no-scrollbar">
          <TaskCard todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </div>
      )}
    </div>
  );
}
