import React from "react";
import { TaskPreview } from "./TaskPreview";

export const TasksContainer = ({ tasks }) => {
  return (
    <div className=" grid grid-cols-[300px_300px] gap-4">
      {tasks.map((task) => (
        <TaskPreview key={task.id} task={task} />
      ))}
    </div>
  );
};
