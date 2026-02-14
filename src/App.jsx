import React from "react";
import { Header } from "./components/layout/Header";
import { SideBar } from "./components/layout/SideBar";
import { useState, useEffect } from "react";
import { AppLayout } from "./components/layout/AppLayout";
export const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  return (
    <>
      <AppLayout isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
    </>
  );
};

export default App;
