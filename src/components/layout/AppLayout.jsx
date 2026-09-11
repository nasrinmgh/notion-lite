import React, { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import TaskCard from "../TaskCard/TaskCard";
import { TasksContainer } from "../pages/TasksContainer";
import { File, Search } from "lucide-react";
import { EmptyState } from "../ui/EmptyState ";

export const AppLayout = ({ isLightMode, setIsLightMode }) => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [taskEditor, setTaskEditor] = useState(null);

  const handleCreate = () => {
    setTaskEditor("create");
  };

  const handleSaveNewTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
    setTaskEditor(null);
  };
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  const handleUpdate = (updated) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));

    setTaskEditor(null);
  };
  // * Search & Filter  logics * //
  const search = searchTerm.trim().toLowerCase();
  const isSearching = search.length > 0;
  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search)
    );
  });

  const hasNoResults = isSearching && filteredTasks.length === 0;

  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        // isOpen={isOpen}
        // setIsOpen={setIsOpen}
        handleCreate={handleCreate}
        //setTaskEditor={setTaskEditor}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {tasks.length === 0 && (
        <EmptyState
          icon={File}
          title={"No Notes Yet"}
          message={"Create your first notes to get started"}
        />
      )}

      {hasNoResults && (
        <EmptyState
          icon={Search}
          title={"No Notes Found"}
          message={"Try a different search item"}
        />
      )}
      {!hasNoResults && tasks.length > 0 && (
        <TasksContainer
          tasks={isSearching ? filteredTasks : tasks}
          setTasks={setTasks}
          onDelete={handleDelete}
          setTaskEditor={setTaskEditor}
          //setIsOpen={setIsOpen}
          //  setSelectedTask={setSelectedTask}
        />
      )}
      {taskEditor && (
        <div className="fixed inset-0 flex items-center justify-center">
          <TaskCard
            task={taskEditor === "create" ? null : taskEditor}
            onClose={() => setTaskEditor(null)}
            setTaskData={
              taskEditor === "create" ? handleSaveNewTask : handleUpdate
            }
          />
        </div>
      )}
      <SideBar />
    </div>
  );
};
