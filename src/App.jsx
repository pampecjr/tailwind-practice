import React from "react";
import { RiComputerFill } from "react-icons/ri";
import { ListItem } from "./components/list-item";
import { Header } from "./components/header";
import { ToggleButton } from "./components/toggle-button";
function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full" >
      <div className="w-[812px]">
        <Header/>
        <ToggleButton/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    </div>
  );
}

export default App;
