import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <section className="relative z-30 -mb-7">
      <div className="mx-auto max-w-[900px] px-4">
        {/* Heading */}
        <div className="mb-2 text-center">
          <span className="text-[11px] font-semibold text-[#102a43]">
            What are you looking for?
          </span>
        </div>

        {/* Search Box */}
        <div
          className="
            flex items-center
            rounded-2xl
            border border-[#d8edf8]
            bg-white
            p-1.5
            shadow-[0_10px_30px_rgba(20,159,239,0.12)]
          "
        >
          {/* Search Icon */}
          <div className="pl-4 pr-2">
            <LuSearch size={18} className="text-slate-400" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search medicines, vitamins..."
            className="
              h-11
              flex-1
              bg-transparent
              px-2
              text-[12px]
              text-slate-700
              outline-none
              placeholder:text-slate-400
            "
          />

          {/* Button */}
          <button
            className="
              h-11
              rounded-xl
              bg-[#159ee9]
              px-6
              text-[11px]
              font-bold
              text-white
              transition
              hover:bg-[#0e8dd3]
            "
          >
            Search Medicines
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
