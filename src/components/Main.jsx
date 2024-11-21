import React from "react";
import ViewButtons from "./ViewButtons";
import TaskCard from "./TaskCard";

export default function Main() {
  const data = {
    name: "Task 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum dolores, tempora voluptatem alias similique nihil modi odit a provident magni, voluptate placeat suscipit dolorem ipsum debitis veritatis ratione repellendus.",
    date: "17-11-24",
  };
  return (
    <div className="main border-black border-2 min-h-full rounded-lg">
      <ViewButtons />
      <TaskCard data={data} />
    </div>
  );
}
