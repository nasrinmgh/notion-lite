import React from "react";
import { Search } from "lucide-react";

export const FailedSearch = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Search />
      <h3>No Notes Found</h3>
      <p>Try a different search item</p>
    </div>
  );
};
