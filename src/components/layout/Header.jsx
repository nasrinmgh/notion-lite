import React from "react";
import { PageName } from "../ui/PageName";
import { SearchInput } from "../ui/SearchInput";
import { Button } from "../ui/Button";

export const Header = () => {
  return (
    <div>
      <PageName label={"Notes"} />
      <SearchInput />
      <Button label="New Note" />
    </div>
  );
};
