import React from "react";
import { PageName } from "../ui/PageName";
import { SearchInput } from "../ui/SearchInput";
import { Button } from "../AddNoteBtn/Button";
import { ToggleMode } from "../Togglemode/ToggleMode";

export const Header = ({
  isLightMode,
  setIsLightMode,
  setIsOpen,
  setSearchTerm,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6 w-full max-w-xl">
      <PageName label={"Notes"} className="w-14 flex-none" />
      <div className="flex justify-center items-center gap-2">
        <SearchInput
          className="w-64 flex-initial"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ToggleMode
          isLightMode={isLightMode}
          setIsLightMode={setIsLightMode}
          className="w-14 flex-none"
        />
      </div>
      <Button
        type="primary"
        label="New Note"
        onClick={() => setIsOpen(true)}
        className="w-32 flex-initial"
      />
    </div>
  );
};
