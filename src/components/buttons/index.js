import React, { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Buttons = () => {
  const [selectedButton, setSelectedButton] = useState("left");

  const handlerColorChange = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex flex-row">
      <div
        className={`w-32 h-10 my-2 border-[#79747E] border border-solid rounded-l-full flex items-center justify-center space-x-1 cursor-pointer ${
          selectedButton === "left" ? "bg-[#E8DEF8]" : "bg-white hover:bg-[#E8DEF8]/[.82]"
        }`}
        onClick={() => handlerColorChange("left")}
      >
        <IoCheckmarkOutline className="text-xl" color="#1D192B" />
        <div className="font-roboto text-sm font-bold text-center">Label</div>
      </div>
      <div
        className={`w-32 h-10 my-2 border-[#79747E] border border-solid rounded-r-full flex items-center justify-center cursor-pointer  ${
          selectedButton === "right" ? "bg-[#E8DEF8] " : "bg-white hover:bg-[#E8DEF8]/[.82]"
        }`}
        onClick={() => handlerColorChange("right")}
      >
        <div className="font-roboto text-sm font-bold text-center">Label</div>
      </div>
    </div>
  );
};

export default Buttons;
