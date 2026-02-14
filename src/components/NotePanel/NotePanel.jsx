import React from "react";
import { Pin, Trash } from "lucide-react";
export const NotePanel = ({ title, text }) => {
  return (
    <div className="card flex items-center object-center bg-base-100 w-128 shadow-sm">
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title w-64 flex-1">{title}qwrety</h2>
          <div className="card-actions group justify-center items-center">
            <Trash
              className="icon group-hover:stroke-white ..."
              fill="none"
              viewBox="0 0 24 24"
              name="trash"
              id="trashIcon"
              size={12}
            />
            <Pin
              className="icon group-hover:stroke-white"
              name="bin"
              id="pinIcon"
              size={12}
            />
          </div>
        </div>
        <p>{text}text</p>
      </div>
    </div>
  );
};
