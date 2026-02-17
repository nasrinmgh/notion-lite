import React, { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import TaskCard from "../TaskCard/TaskCard";

export const AppLayout = ({ isLightMode, setIsLightMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Header
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && <TaskCard onClose={() => setIsOpen(false)} />}
      <SideBar />
    </div>
  );
};
