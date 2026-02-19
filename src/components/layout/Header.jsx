import React from "react";
import { PageName } from "../ui/PageName";
import { SearchInput } from "../ui/SearchInput";
import { Button } from "../AddNoteBtn/Button";
import { ToggleMode } from "../Togglemode/ToggleMode";

export const Header = ({ isLightMode, setIsLightMode, setIsOpen }) => {
  return (
    <div className="flex items-center justify-around gap-2 mt-6 w-full max-w-2xl">
      <PageName label={"Notes"} className="flex-auto" />
      <div className="flex justify-center items-center gap-2">
        <SearchInput />
        <ToggleMode isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      </div>
      <Button type="primary" label="New Note" onClick={() => setIsOpen(true)} />
    </div>
  );
};
