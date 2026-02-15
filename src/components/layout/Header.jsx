import React from "react";
import { PageName } from "../ui/PageName";
import { SearchInput } from "../ui/SearchInput";
import { Button } from "../Button/Button";
import { ToggleMode } from "../Togglemode/ToggleMode";

export const Header = ({ isLightMode, setIsLightMode, setIsOpen }) => {
  return (
    <div className="flex items-center justify-between gap-3 mt-6">
      <PageName label={"Notes"} className="flex-auto" />
      <SearchInput />
      <ToggleMode isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <Button type="primary" label="New Note" onClick={setIsOpen} />
    </div>
  );
};
