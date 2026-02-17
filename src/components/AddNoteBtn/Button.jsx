import React from "react";

export const Button = ({ label, type, onClick }) => {
  const className = `btn btn-${type} flex-none bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg transition`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
