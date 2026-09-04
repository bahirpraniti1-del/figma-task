import React from "react";
import {
  LuShieldCheck,
  LuBadgeCheck,
  LuClock3,
  LuLink,
  LuChevronDown,
} from "react-icons/lu";

import doctorImage from "../../assets/doctor.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef9ff] via-[#f8fcff] to-[#eaf7ff]">
      <div className="mx-auto max-w-[1320px] px-8 lg:px-12">
        {/* ================= NAVIGATION ================= */}
        <nav className="flex h-[42px] items-center justify-center">
          <div className="flex items-center gap-10 text-[11px] font-medium">
            <a
              href="#"
              className="text-slate-600 transition hover:text-[#159ee9]"
            >
              Medicines
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-[#159ee9]"
            >
              Personal Care
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-[#159ee9]"
            >
              Baby Care
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-[#159ee9]"
            >
              Offers
            </a>

            <a
              href="#"
              className="flex items-center gap-1 font-semibold text-[#ff8a27]"
            >
              <Zap size={11} className="text-orange-500" />
              Super Saver
            </a>
          </div>
        </nav>

        {/* ================= SEARCH ================= */}
        <div className="relative z-50">
          <div className="mx-auto max-w-[1320px] px-8 py-3 lg:px-12">
            <div className="mx-auto max-w-[800px] px-8 py-2">
              <div className="mb-2 flex items-center justify-between px-2">
                <span className="text-[11px] font-bold text-[#102a43]">
                  What are you looking for?
                </span>

                <button className="flex items-center gap-1.5 text-[10px] font-bold text-[#102a43]">
                  <span>UPLOAD NOW</span>

                  <span className="text-[14px] font-bold leading-none">
                    <FaAngleRight />
                  </span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex h-[44px] w-full items-center rounded-full bg-white px-2 shadow-[0_4px_18px_rgba(16,42,67,0.12)]">
                <CiSearch
                  size={17}
                  className="ml-3 mr-2 shrink-0 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search medicines, vitamins..."
                  className="
                    h-full
                    min-w-0
                    flex-1
                    bg-transparent
                    px-2
                    text-[11px]
                    outline-none
                    placeholder:text-slate-400
                  "
                />

                <button
                  className="
                    h-[25px]
                    shrink-0
                    rounded-full
                    bg-[#159ee9]
                    px-6
                    text-[10px]
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
          </div>
        </div>

        {/* ================= HERO AREA ================= */}
        <div className="relative min-h-[300px]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 w-full max-w-[620px] pt-10 pb-8">
            {/* Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#dceef5]/70
                px-3
                py-1.5
                shadow-[0_2px_8px_rgba(100,140,160,0.08)]
                backdrop-blur-sm
              "
            >
              <LuLink size={12} strokeWidth={2} className="text-[#159ee9]" />

              <span className="text-[10px] font-semibold text-[#159ee9]">
                Licensed Online Pharmacy
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[600px]
                text-[40px]
                font-extrabold
                leading-[1.05]
                tracking-[-1.5px]
                text-[#102a43]
              "
            >
              Say Hi 👋 to Big Savings on Every Medicine
            </h1>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-3">
              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-[15px]
                  bg-[#ff8a27]
                  px-6
                  py-3
                  text-[12px]
                  font-bold
                  text-white
                  shadow-[0_8px_20px_rgba(255,138,39,0.22)]
                  transition
                  hover:bg-[#f57d18]
                "
              >
                Get App
              </button>
            </div>

            {/* TRUST FEATURES */}
            <div className="mt-7 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center">
                  <LuShieldCheck size={14} className="text-green-500" />
                </div>

                <span className="text-[10px] font-medium text-green-500">
                  Licensed Pharmacy
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center">
                  <LuBadgeCheck size={14} className="text-green-500" />
                </div>

                <span className="text-[10px] font-medium text-green-500">
                  100% Genuine Products
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center">
                  <LuClock3 size={14} className="text-green-500" />
                </div>

                <span className="text-[10px] font-medium text-green-500">
                  2-4 Hour Delivery
                </span>
              </div>
            </div>
          </div>

          {/* ================= DOCTOR IMAGE ================= */}
          <div
            className="
              absolute
              right-[-25px]
              top-[-80px]
              z-10
              hidden
              h-[480px]
              w-[560px]
              lg:block
            "
          >
            <img
              src={doctorImage}
              alt="Doctor"
              className="
                absolute
                right-0
                bottom-0
                z-10
                h-[480px]
                w-auto
                object-contain
              "
            />

            {/* Floating Genuine Card */}
            <div
              className="
                absolute
                right-[25px]
                top-[95px]
                z-20
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white
                bg-white/95
                px-3
                py-2
                shadow-[0_8px_25px_rgba(16,42,67,0.10)]
              "
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e2f8eb]">
                <LuShieldCheck size={14} className="text-[#18a957]" />
              </div>

              <div>
                <p className="text-[9px] font-bold text-[#102a43]">
                  100% Genuine
                </p>

                <p className="text-[8px] text-slate-400">Trusted medicines</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EXPLORE ================= */}
        <div className="relative z-30 flex flex-col items-center justify-center pb-4">
          <LuChevronDown size={14} strokeWidth={2} className="text-slate-400" />

          <span className="text-[10px] font-semibold text-blue-500">
            EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
