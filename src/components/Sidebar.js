import React from "react";
import {
  ChevronDown,
  Home,
  Clipboard,
  LayoutGrid,
  Truck,
  BarChart,
  CreditCard,
  Navigation,
  BadgePercent,
  Users,
  Palette,
  Zap,
  Megaphone,
  Wallet,
} from "lucide-react";
const Sidebar = () => {
  
  const links = [
    { icon: <Home strokeWidth={1} size={26} />, tag: "Home" },
    { icon: <Clipboard strokeWidth={1} size={26} />, tag: "Orders" },
    { icon: <LayoutGrid strokeWidth={1} size={26} />, tag: "Products" },
    { icon: <Truck strokeWidth={1} size={26} />, tag: "Delivery" },
    { icon: <Megaphone strokeWidth={1} size={26} />, tag: "Marketing" },
    { icon: <BarChart strokeWidth={1} size={26} />, tag: "Analytics" },
    { icon: <CreditCard strokeWidth={1} size={26} />, tag: "Payments" },
    { icon: <Navigation strokeWidth={1} size={26} />, tag: "Tools" },
    { icon: <BadgePercent strokeWidth={1} size={26} />, tag: "Discount" },
    { icon: <Users strokeWidth={1} size={26} />, tag: "Audience" },
    { icon: <Palette strokeWidth={1} size={26} />, tag: "Appereance" },
    { icon: <Zap strokeWidth={1} size={26} />, tag: "Plugins" },
  ];

  
  return (
    <div className="flex fixed flex-col w-1/6 bg-[#1E2640] p-4 gap-5 h-[100vh] ">
      <div className="flex flex-row gap-2 items-center px-2 w-32">
        <div className="text-black text-3xl border border-3 font-bold h-12 rounded-md border-slate-100 aspect-square flex justify-center items-center bg-white ">
          N
        </div>
        <div className="flex flex-col text-white text-lg p-1 gap-1 ">
          <p>Nishyan</p>
          <a
            href="#"
            className="text-xs underline underline-offset-4 text-gray-50"
          >
            Visit store
          </a>
        </div>
        <button>
          <ChevronDown className="font-bold text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start w-full ">
        {links.map((link) => (
          <button className={`flex px-2 py-1 gap-3 text-white text-lg font-light hover:bg-[#484f64] rounded-md w-full ${link.tag==='Payments'?"bg-[rgba(255,255,255,.2)]":""}`}>
            {link.icon}
            {link.tag}
          </button>
        ))}
      </div>
      <div class="mt-auto box-border w-48 h-24 border-2 border-gray-800 bg-900 bg-[#353C53] rounded-md text-white flex items-center justify-evenly">
        <div className="p-2 bg-[#494F64] rounded-sm" >
          <Wallet />
        </div>
        <div className="flex flex-col justify-center  h-10">
          <p class="text-sm font-light ">Available credits</p>
          <p class="text-l font-medium">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
