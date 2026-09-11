import React from "react";

export const EmptyState = ({ icon: Icon, title, message }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2.5 mt-30">
      <Icon />
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};
