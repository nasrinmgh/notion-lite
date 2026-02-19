import React from "react";
import { File } from "lucide-react";
export const PreDisplay = () => {
  return (
    <div className="flex flex-col justify-center items-center  gap-2.5 mt-30">
      <File />
      <h2>No Notes Yet</h2>
      <p>Create your first notes to get started</p>
    </div>
  );
};
