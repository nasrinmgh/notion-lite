import React, { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import TaskCard from "../TaskCard/TaskCard";
import { TasksContainer } from "../pages/TasksContainer";
import { PreDisplay } from "../pages/PreDisplay";

export const AppLayout = ({ isLightMode, setIsLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {tasks.length === 0 && <PreDisplay />}
      {isOpen && (
        <TaskCard
          onClose={() => setIsOpen(false)}
          setTaskData={(newTask) => {
            setTasks((prev) => [...prev, newTask]);
          }}
        />
      )}
      <TasksContainer
        tasks={tasks}
        onDelete={handleDelete}
        setTasks={setTasks}
      />
      <SideBar />
    </div>
  );
};
