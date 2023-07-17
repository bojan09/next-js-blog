"use client";
import { ThemeContext } from "@/app/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="w-[45px] h-[24px] border-[#53c28b70] border-2 rounded-xl flex justify-between items-center p-1.5 relative cursor-pointer"
        onClick={toggle}
      >
        <div className="text-[10px]">🌙</div>
        <div className="text-[10px]">🔆</div>
        <div
          className="w-[16px] h-[16px] bg-[#53c28b] rounded-xl absolute"
          style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
