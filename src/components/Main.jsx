import React from "react";
import ViewButtons from "./ViewButtons";
import TaskCard from "./TaskCard";
import Data from "./Data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Main() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([
    {
      _id: uuidv4(),
      title: "Title 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus.",
      date: "17-11-24",
    },
    {
      _id: uuidv4(),
      title: "Title 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus.",
      date: "17-11-24",
    },
    {
      _id: uuidv4(),
      title: "Title 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus.",
      date: "17-11-24",
    },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Toggles edit card

  function handleEdit(index) {
    // Passing task and its index
    setSelectedTodo({ ...todos[index], index });
    setIsEditing(true);
  }

  function handleSave(task) {
    if (task.index !== undefined) {
      // Updating existing todo
      const updatedTodos = [...todos];
      updatedTodos[task.index] = { ...task };
      delete updatedTodos[task.index].index;
      setTodos(updatedTodos);
    } else {
      // Adding new todo
      setTodos([...todos, { ...task, _id: uuidv4() }]);
    }
    setIsEditing(false);
    setSelectedTodo(null);
  }

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
