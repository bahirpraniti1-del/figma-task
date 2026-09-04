import React from "react";
import {
  FaArrowRight,
  FaCheck,
  FaInfo,
  FaRotateRight,
  FaShieldHalved,
} from "react-icons/fa6";

const MedicineIcon = ({ generic = false }) => (
  <div
    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
      generic ? "bg-emerald-100 text-emerald-600" : "bg-blue-500 text-white"
    }`}
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 20.5a5 5 0 0 1-7-7l7-7a5 5 0 0 1 7 7l-7 7Z" />
      <path d="m8 8 8 8" />
    </svg>
  </div>
);

const GenericAlternative = () => {
  return (
    <section className="mx-auto w-full max-w-[1200px] rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-8 md:px-10">
      {/* =====================================================
          HEADER
      ====================================================== */}

      {/* =====================================================
    HEADER
====================================================== */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
        {/* LEFT - TITLE */}
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>

          <div>
            <h2 className="text-base font-bold leading-5 text-slate-700 sm:text-lg">
              Save with a Generic Alternative
            </h2>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
              Same active ingredient • verified lower price
            </p>
          </div>
        </div>

        {/* RIGHT - MEDICINE CHIPS */}
        <div
          className="
      w-full
      overflow-x-auto
      pb-1
      md:w-auto
      md:max-w-[60%]
      md:overflow-x-auto
      [scrollbar-width:thin]
      [&::-webkit-scrollbar]:h-1
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-slate-300
    "
        >
          <div className="flex w-max items-center gap-2">
            <button className="shrink-0 rounded-full bg-emerald-700 px-4 py-2 text-[9px] font-semibold text-white shadow-sm sm:text-[10px]">
              Azithromycin 500 mg
            </button>

            <button className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-[9px] font-semibold text-slate-500 transition hover:bg-slate-200 sm:text-[10px]">
              Azithromycin 100 mg
            </button>

            <button className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-[9px] font-semibold text-slate-500 transition hover:bg-slate-200 sm:text-[10px]">
              Paracetamol 400 mg
            </button>

            <button className="shrink-0 rounded-full bg-slate-100 px-4 py-2 text-[9px] font-semibold text-slate-500 transition hover:bg-slate-200 sm:text-[10px]">
              Metformin 500 mg
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          COMPARISON
      ====================================================== */}

      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_44px_1fr]">
        {/* =================================================
            BRAND CARD
        ================================================== */}

        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-3">
          {/* HEADER BOX */}
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5">
            <span className="text-[9px] font-bold tracking-wide text-slate-400 sm:text-[10px]">
              YOU SELECTED
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-[8px] font-bold tracking-wide text-blue-600">
              BRAND
            </span>
          </div>

          {/* MEDICINE */}
          <div className="mt-5 flex items-center gap-3 px-1">
            <MedicineIcon />

            <div>
              <h3 className="text-base font-bold text-slate-700">
                Azithral 500
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Azithromycin 500mg
              </p>

              <p className="mt-1 text-[10px] text-slate-400">Alembic</p>
            </div>
          </div>

          {/* PRICE */}
          <div className="mt-6 px-1">
            <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Price per strip
            </p>

            <span className="text-[26px] font-bold text-slate-300 line-through">
              ₹132
            </span>
          </div>

          {/* COST BAR */}
          <div className="mt-4 px-1">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[9px] font-medium text-slate-400">
                Cost
              </span>

              <span className="text-[9px] font-semibold text-slate-500">
                100%
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-full rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* =================================================
            ARROW
        ================================================== */}

        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-500 shadow-sm">
          <FaArrowRight size={11} />
        </div>

        {/* =================================================
            GENERIC CARD
        ================================================== */}

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-3">
          {/* HEADER BOX */}
          <div className="flex items-center justify-between rounded-xl border border-emerald-200 bg-white px-3 py-2.5">
            <span className="text-[9px] font-bold tracking-wide text-emerald-600 sm:text-[10px]">
              GENERIC OPTION
            </span>

            <span className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-2.5 py-1.5 text-[7px] font-bold tracking-wide text-white sm:text-[8px]">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[7px] font-black text-emerald-600">
                !
              </span>
              RECOMMENDED
            </span>
          </div>

          {/* MEDICINE */}
          <div className="mt-5 flex items-center gap-3 px-1">
            <MedicineIcon generic />

            <div>
              <h3 className="text-base font-bold text-slate-700">
                Azithral 500
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Azithromycin 500mg
              </p>

              <p className="mt-1 text-[10px] font-medium text-emerald-500">
                DavaGen
              </p>
            </div>
          </div>

          {/* PRICE */}
          <div className="mt-6 px-1">
            <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wide text-emerald-600">
              Price per strip
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-end gap-2">
                <span className="text-[26px] font-bold text-emerald-700">
                  ₹38
                </span>

                <del className="mb-1 text-[10px] text-slate-400">₹132</del>
              </div>

              {/* DISCOUNT */}
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-bold text-emerald-700">
                -71%
              </span>
            </div>
          </div>

          {/* COST BAR */}
          <div className="mt-4 px-1">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[9px] font-medium text-slate-400">
                Cost
              </span>

              <span className="text-[9px] font-semibold text-emerald-600">
                29% of Brand
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-emerald-100">
              <div className="h-full w-[29%] rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SAVING BANNER
      ====================================================== */}

      <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* SAVING INFO */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[8px]">
                  <FaCheck size={7} />
                </span>
              </div>

              <p className="text-[11px] font-bold text-emerald-700">
                You save on this item
              </p>
            </div>

            <p className="mt-1.5 text-[9px] text-slate-500 sm:text-[10px]">
              Same salt • CDSCO approved substitute
            </p>
          </div>

          {/* SAVING AMOUNT */}
          <div className="text-left sm:text-right">
            <p className="text-2xl font-bold text-emerald-700">₹94</p>

            <p className="text-[9px] font-semibold text-emerald-600">71% off</p>
          </div>
        </div>

        {/* =================================================
            ACTION BUTTONS
        ================================================== */}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          {/* SWITCH */}
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-[10px] font-bold text-white shadow-sm transition hover:bg-emerald-800 sm:text-[11px]">
            <FaCheck size={10} />

            <span>Switch to generic & save ₹94</span>
          </button>

          {/* SEPARATOR */}
          <div className="hidden w-px bg-emerald-200 sm:block" />

          {/* KEEP ORIGINAL */}
          <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-[10px] font-semibold text-slate-600 transition hover:bg-slate-50 sm:text-[11px]">
            <FaShieldHalved size={10} className="text-slate-400" />
            Keep original
          </button>

          {/* SEPARATOR */}
          <div className="hidden w-px bg-emerald-200 sm:block" />

          {/* REFRESH */}
          <button className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-400 transition hover:bg-slate-50">
            <FaRotateRight size={12} />
          </button>
        </div>
      </div>

      {/* =====================================================
          DISCLAIMER
      ====================================================== */}

      <p className="mt-4 flex items-start gap-1.5 text-[8px] leading-4 text-slate-400 sm:text-[9px]">
        <FaInfo className="mt-0.5 shrink-0 text-[8px]" />

        <span>
          Generic substitutions are subject to prescription and pharmacist
          confirmation. Availability may vary by location.
        </span>
      </p>
    </section>
  );
};

export default GenericAlternative;
