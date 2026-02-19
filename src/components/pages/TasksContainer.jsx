import React from "react";
import { useState } from "react";
import { TaskPreview } from "./TaskPreview";

export const TasksContainer = ({ tasks, onDelete }) => {
  return (
    <div className=" grid grid-cols-[300px_300px] gap-4">
      {tasks.map((task) => (
        <TaskPreview
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};
