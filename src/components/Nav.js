import {
  ChevronDown,
  HelpCircle,
  MessageCircleMore,
  Search,
} from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-row px-3 py-3 w-full h-12 justify-between items-center border-b-2 bg-white ">
      <div className="flex flex-row gap-4 p-4 ">
        <p className="text-sm font-medium ">Payments</p>
        <a href="#" className="flex flex-row items-center gap-1  ">
          <HelpCircle strokeWidth={1} size={13} />
          <p className="text-xs">How it works</p>
        </a>
      </div>
      <div className="bg-[#F2F2F2] px-2 py-2 gap-2 rounded-md flex items-center">
        <Search size={15} strokeWidth={2} className="text-[#808080]" />
        <input
          type="text"
          placeholder="Search features,tutorials,etc."
          className="bg-[#f2f2f2] w-60 h-4 aspect-square text-[#808080] placeholder:text-[#808080]"
        />
      </div>
      <div className="flex flex-row gap-2 px-2 py-2">
        <button className="h-10 aspect-square rounded-full bg-[#E6E6E6] flex items-center justify-center">
          <MessageCircleMore size={25} />
        </button>
        <button className="h-10 aspect-square rounded-full bg-[#E6E6E6] flex items-center justify-center">
          <ChevronDown size={25} />
        </button>
      </div>
    </div>
  );
};
export default Nav;
