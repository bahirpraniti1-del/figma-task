import { GoPerson } from "react-icons/go";

const WelcomeBar = () => {
  return (
    <div className="w-full bg-[#eef7ff] border-b border-blue-100 my-3 p-2">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
            <GoPerson className="h-4 w-4 text-[#2497df]" />
          </div>

          <div>
            <p className="text-[11px] font-semibold text-gray-700 sm:text-xs">
              Welcome to DavaDay
            </p>

            <p className="text-[8px] text-gray-400 sm:text-[9px]">
              Login for faster checkout, order history and exclusive deals
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="rounded-[10px] bg-[#2497df] px-3 py-1 text-[9px] font-semibold text-white transition hover:bg-[#1686cd] sm:px-4 sm:py-1.5 sm:text-[10px]">
            Log In
          </button>

          <button className="rounded-[10px] border border-[#2497df] bg-white px-3 py-1 text-[9px] font-semibold text-[#2497df] transition hover:bg-blue-50 sm:px-4 sm:py-1.5 sm:text-[10px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBar;
