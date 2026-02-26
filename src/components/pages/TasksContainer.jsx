import React from "react";
import { useState } from "react";
import { TaskPreview } from "./TaskPreview";
import DeleteTaskModal from "../ui/DeleteTaskModal";
import TaskCard from "../TaskCard/TaskCard";

export const TasksContainer = ({ tasks, setTasks, setSelectedTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const openDeleteModal = (id) => {
    setSelectedTaskId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setTasks((prev) => prev.filter((task) => task.id !== selectedTaskId));
    setIsModalOpen(false);
  };

  return (
    <div className=" grid grid-cols-[300px_300px] gap-4">
      <DeleteTaskModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      {tasks.map((task) => (
        <TaskPreview
          key={task.id}
          task={task}
          onDelete={() => openDeleteModal(task.id)}
          onClick={() => setSelectedTask(task)}
        />
      ))}
    </div>
  );
};
