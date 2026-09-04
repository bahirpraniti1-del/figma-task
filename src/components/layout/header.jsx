import React from "react";
import {
  MapPin,
  UserRound,
  ShoppingCart,
  ChevronDown,
  Zap,
  LucideSparkles,
  LucideSearchCheck,
} from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-white">
      {/* Main Header */}
      <div className="h-[64px] flex items-center justify-between px-8 lg:px-12 border-b border-slate-100">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center">
            <div className="relative w-[30px] h-[20px]">
              <div className="absolute left-0 top-[5px] w-[22px] h-[12px] rounded-[4px] border-[3px] border-[#159ee9]" />
              <div className="absolute left-[9px] top-[5px] w-[22px] h-[12px] rounded-[4px] border-[3px] border-[#ff8a27]" />
            </div>

            <span className="ml-1 text-[20px] font-bold tracking-tight text-[#102a43]">
              Dava<span className="text-[#159ee9]">Day</span>
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-500">
            <MapPin size={15} className="text-[#159ee9]" />

            <div className="leading-tight">
              <p className="text-[9px] text-slate-400">Deliver to</p>
              <p className="font-semibold text-slate-700">Mumbai - 400001</p>
            </div>
          </div>

          {/* User */}
          <button
            className="
              w-8 h-8 rounded-full
              bg-[#159ee9]
              text-white
              flex items-center justify-center
              hover:bg-[#0e8dd3]
              transition
            "
          >
            <UserRound size={15} />
          </button>

          {/* Cart */}
          <button
            className="
              relative
              w-9 h-9
              flex items-center justify-center
              rounded-full
              hover:bg-slate-50
              transition
            "
          >
            <ShoppingCart size={19} className="text-slate-600" />

            <span
              className="
                absolute -top-0.5 -right-0.5
                w-[15px] h-[15px]
                rounded-full
                bg-[#ff8a27]
                text-white
                text-[8px]
                font-bold
                flex items-center justify-center
              "
            >
              0
            </span>
          </button>
        </div>
      </div>

      {/* Promotional Strip */}
      <div
        className="
          h-[32px]
          bg-[#168ec7]
          text-white
          flex items-center justify-center
          text-[14px]
          p-5
        "
      >
        <div className="flex items-center gap-2 ">
          <LucideSparkles size={15} className="text-white/60 " />

          <span className="text-white font-medium">Welcome to DavaDay!</span>

          <span className="text-white/60">
            Get 20% off your first order with code
          </span>

          <span
            className="
      px-2.5 py-1
      rounded-full
      bg-white/20
      border border-white/30
      text-white
      font-bold
      tracking-wide
    "
          >
            FIRST20
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
