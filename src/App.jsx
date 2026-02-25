import React from "react";
import { useState, useEffect } from "react";
import { AppLayout } from "./components/layout/AppLayout";
export const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <AppLayout isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
    </div>
  );
};

export default App;
