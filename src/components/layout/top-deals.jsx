import React from "react";
import { CiGift } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";

const deals = [
  {
    title: "Fever Essentials",
    subtitle: "Paracetamol, Dolo & more",
    discount: "Up to 30% off",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    tags: ["Dolo 650", "Crocin", "Combiflam"],
    color: "blue",
  },
  {
    title: "Diabetes Care",
    subtitle: "Monitors, strips & medicines",
    discount: "Up to 25% off",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["Metformin", "Glucometer", "Test Strips"],
    color: "green",
  },
  {
    title: "Skin & Hair",
    subtitle: "Dermatologist recommended",
    discount: "Up to 40% off",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
    tags: ["Minoxidil", "SPF 50", "Biotin"],
    color: "pink",
  },
  {
    title: "Vitamin Store",
    subtitle: "D3, B12, Omega-3 & more",
    discount: "Up to 35% off",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80",
    tags: ["Vitamin D3", "B-Complex", "Zinc"],
    color: "orange",
  },
];

const colorStyles = {
  blue: {
    border: "border-blue-200",
    tag: "bg-blue-50 text-blue-500 border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700",
    discount: "text-blue-500",
  },
  green: {
    border: "border-green-200",
    tag: "bg-green-50 text-green-500 border-green-200",
    button: "bg-green-600 hover:bg-green-700",
    discount: "text-green-500",
  },
  pink: {
    border: "border-pink-200",
    tag: "bg-pink-50 text-pink-500 border-pink-200",
    button: "bg-pink-600 hover:bg-pink-700",
    discount: "text-pink-500",
  },
  orange: {
    border: "border-orange-200",
    tag: "bg-orange-50 text-orange-500 border-orange-200",
    button: "bg-orange-600 hover:bg-orange-700",
    discount: "text-orange-500",
  },
};

const TopDeals = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-5 py-7">
        {/* HEADER */}
        <div className="flex items-center justify-between bg-gray-50 px-10 py-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-purple-100">
                <CiGift className="text-[11px] text-purple-600" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                Exclusive
              </span>
            </div>

            <h2 className="text-[22px] font-bold text-slate-900">Top Deals</h2>

            <p className="mt-1 text-xs text-slate-400">
              Unlock your best healthcare savings today
            </p>
          </div>

          <button className="self-start text-xs font-medium text-blue-500 hover:text-blue-600">
            All deals →
          </button>
        </div>

        {/* DEAL CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal) => {
            const style = colorStyles[deal.color];

            return (
              <div
                key={deal.title}
                className={`overflow-hidden rounded-2xl border ${style.border} bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* IMAGE */}
                <div className="relative h-[135px] overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-full w-full object-cover"
                  />

                  {/* IMAGE GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* DISCOUNT */}
                  <span
                    className={`absolute right-2.5 top-2.5 rounded-full bg-white px-3 py-1 text-[10px] font-semibold shadow-md ${style.discount}`}
                  >
                    {deal.discount}
                  </span>

                  {/* TITLE ON IMAGE */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/20 text-sm backdrop-blur-sm">
                      {deal.color === "blue" && "⌕"}
                      {deal.color === "green" && "♧"}
                      {deal.color === "pink" && "♡"}
                      {deal.color === "orange" && "✧"}
                    </span>

                    <span className="text-sm font-semibold">{deal.title}</span>
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-3.5">
                  {/* SUBTITLE */}
                  <p className="mb-2 text-xs text-slate-500">{deal.subtitle}</p>

                  {/* TAGS */}
                  <div className="mb-3.5 flex flex-wrap gap-1.5">
                    {deal.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${style.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <button
                    className={`flex w-full items-center justify-center gap-1 rounded-xl py-2.5 text-xs font-semibold text-white transition ${style.button}`}
                  >
                    Shop Now
                    <span className="text-sm">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TopDeals;
