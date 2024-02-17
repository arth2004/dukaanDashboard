import { ChevronDown } from "lucide-react";
import React from "react";

const Hero = () =>{
    return(
        <div className="flex flex-col px-8 py-3 gap-4 ">
            <div className="flex flex-row justify-between items-centre">
                <p className="text-xl font-medium">
                    Overview
                </p>
                <button className="px-2 py-2 flex gap-1 border rounded-md items-center text-base">
                    Last Month
                    <ChevronDown/>
                </button>
            </div>
            <div className="grid grid-cols-2 gap-10 h-20 ">
                <div className="flex flex-col gap-3 w-full bg-white shadow-md rounded-md px-4 py-4 ">
                    <p className="font-light text-xs">Online orders</p>
                    <p className="font-semibold text-xl" >231</p>
                </div>
                <div className="flex flex-col gap-3 w-full bg-white shadow-md rounded-md px-4 py-4">
                    <p className="font-light text-xs">Amount received</p>
                    <p className="font-semibold text-xl" >&#8377;23,92,312.19</p>
                </div>
            </div>

        </div>
    );
};

export default Hero;