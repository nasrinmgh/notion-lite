import React from "react";

export const SearchInput = ({ value, onChange }) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <div className="w-4 h-4 flex items-center justify-center">
        <svg
          className="h-[1em] opacity-50 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="0.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </div>
      <input
        type="search"
        defaultValue={value}
        onChange={onChange}
        placeholder="Search"
        className="flx-1"
      />
    </label>
  );
};
