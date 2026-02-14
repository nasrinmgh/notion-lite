import React, { useState } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { NotePanel } from "../NotePanel/NotePanel";
export const AppLayout = ({ isLightMode, setIsLightMode }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <NotePanel />
      <SideBar />
    </div>
  );
};
