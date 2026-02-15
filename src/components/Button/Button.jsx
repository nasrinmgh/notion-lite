import React from "react";

export const Button = ({ label, type, onClick }) => {
  const className = `btn btn-${type} flex-none`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
