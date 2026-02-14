import React from "react";

export const Button = ({ label, type }) => {
  const className = `btn btn-${type} flex-none`;

  return <button className={className}>{label}</button>;
};
