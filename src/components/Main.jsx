import React, { useDebugValue } from "react";
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
  const [dataTitle, setDataTitle] = useState("");
  const [dataDesc, setDataDesc] = useState("");

  function handleEdit(index) {
    todos[index];
  }

  return (
    <div className="main border-black border-2 min-h-full rounded-lg">
      <ViewButtons />
      <TaskCard todos={todos} />
      <Data title={dataTitle} desc={dataDesc}/>
    </div>
  );
}
