import React from "react";
import { ArrowUpDown, ChevronDown, ChevronRight } from "lucide-react";
import { Search } from "lucide-react";
import { Download } from "lucide-react";
import { Info } from "lucide-react";

const Table = () => {
  const data = [
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
    { id: "#281209", date: "7 July, 2023", amount: "₹1,278.23", value: "22" },
  ];
  return (
    <div className="flex flex-col gap-4 px-8 py-3 ">
      <div>
        <p className="font-semibold text-l">Transaction | This Month</p>
      </div>
      <div className="flex flex-col bg-white shadow-sm ">
        <div className="flex justify-between">
          <div className="bg-white border-2 px-2 py-2 m-2 gap-2 rounded-md w-80 flex items-center">
            <Search size={15} strokeWidth={1} className="text-[#808080]" />
            <input
              type="text"
              placeholder="Search by order ID..."
              className="bg-white w-60 h-4 aspect-square text-[#808080] placeholder:text-[#808080]"
            />
          </div>
          <div className="flex flex-row gap-2 m-2">
            <button className="flex gap-2 items-center border-2 px-2 py-2 font-light text-base rounded-md justify-center">
              Sort <ArrowUpDown size={18} />
            </button>
            <button className="flex gap-2 items-center border-2 px-2 py-2 font-light text-base rounded-md justify-center">
              <Download size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 px-4 py-3 rounded-md bg-[#F2F2F2] text-[#4C4C4C] font-medium m-2">
          <p className="flex gap-1 item-center w-full justify-start">
            Order ID
          </p>
          <p className="flex gap-1 item-center w-full justify-start">
            Order date
            <ChevronDown size={15} />
          </p>
          <p className="flex gap-1 item-center w-full justify-start">
            Order amount
          </p>
          <p className="flex gap-1 item-center w-full justify-start ">
            Transaction fees <Info size={15} />
          </p>
        </div>
        <div className="flex flex-col gap-2 m-4">
          {data.map((row) => {
            return (
              <div className="w-full grid grid-cols-4 font-normal ">
                <p className="text-[#3180BD]">{row.id}</p>
                <p className="mx-3">{row.date}</p>
                <p className="mx-8">{row.amount}</p>
                <p className="mx-28">{row.value}</p>
              </div>
            );
          })}
        </div>
          <div className="flex items-center justify-center w-full mt-5 ">
            <div className="flex">
              <button className="flex flex-row px-2 py-1 gap-1 text-[#4c4c4c] font-light text-base rounded md border-2 item-center justify-center">
              <ChevronDown size={23}></ChevronDown>
              Previous
              </button>
              <button className=" px-2 py-1 gap-1 text-[#4c4c4c] font-light text-base rounded-md">
                1
              </button>
              <button className=" px-2 py-1 gap-1 text-[#4c4c4c] font-light text-base rounded-md">
                ...
              </button>
              {Array(10).fill(0).map((_,index)=>{
                return(
                    <button className=" px-2 py-1 gap-1 text-[#4c4c4c] font-light text-base rounded-md">
                        {index+10}
                    </button>
                );
              })}
              <button className="flex flex-row px-2 py-1 gap-1 text-[#4c4c4c] font-light text-base rounded md border-2 item-center justify-center">
              Next
              <ChevronRight size={23}></ChevronRight>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Table;
