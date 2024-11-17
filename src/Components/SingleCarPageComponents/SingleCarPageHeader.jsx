import React, { useContext } from "react";
import { SidebarNavigationsContent } from "../../App";
import { MdMenu } from "react-icons/md";

export default function SingleCarPageHeader() {
  const handleSidebarState = useContext(SidebarNavigationsContent);
  return (
    <div className="w-full bg-[#091d2c] lg:hidden flex py-4 justify-center items-center gap-5 px-5">
      <div className="w-[10%]">
        {" "}
        <MdMenu
          className=" cursor-pointer text-3xl text-[#cc5d00] lg:hidden"
          onClick={handleSidebarState}
        />
      </div>
      <div className="w-[80%] flex justify-start items-center ">
      <img src="/logo.png" className=" w-[220px] sm:w-[370px]" alt="StandGest" />
      </div>
    </div>
  );
}
