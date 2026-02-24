import React, { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import TaskCard from "../TaskCard/TaskCard";
import { TasksContainer } from "../pages/TasksContainer";
import { PreDisplay } from "../pages/PreDisplay";
import { FailedSearch } from "../ui/FailedSearch";

export const AppLayout = ({ isLightMode, setIsLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    return task.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const isSearching = searchTerm.length > 0;
  const hasNoResults = isSearching && filteredTasks.length === 0;

  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSearchTerm={setSearchTerm}
      />

      {tasks.length === 0 && <PreDisplay />}
      {hasNoResults && <FailedSearch />}

      {isOpen && (
        <TaskCard
          onClose={() => setIsOpen(false)}
          setTaskData={(newTask) => {
            setTasks((prev) => [...prev, newTask]);
          }}
        />
      )}

      {!hasNoResults && tasks.length > 0 && (
        <TasksContainer
          tasks={isSearching ? filteredTasks : tasks}
          setTasks={setTasks}
          onDelete={handleDelete}
        />
      )}

      <SideBar />
    </div>
  );
};
