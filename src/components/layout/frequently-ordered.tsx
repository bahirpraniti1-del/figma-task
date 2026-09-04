import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import tabs from "../../assets/tablet-img.webp";

const medicines = [
  {
    name: "Dolo 650",
    image: tabs,
    category: "Pain Relief",
    company: "Micro Labs",
    price: "₹27",
    oldPrice: "₹30",
    discount: "10% OFF",
    save: "₹3",
  },
  {
    name: "Pan 40",
    image: tabs,
    category: "Gastric",
    company: "Alkem",
    price: "₹89",
    oldPrice: "₹105",
    discount: "15% OFF",
    save: "₹16",
  },
  {
    name: "Vitamin D3",
    image: tabs,
    category: "Vitamins",
    company: "HealthKart",
    price: "₹149",
    oldPrice: "₹175",
    discount: "15% OFF",
    save: "₹26",
  },
  {
    name: "Metformin 500",
    image: tabs,
    category: "Diabetes",
    company: "Sun Pharma",
    price: "₹45",
    oldPrice: "₹55",
    discount: "18% OFF",
    save: "₹10",
  },
  {
    name: "Metformin 500",
    image: tabs,
    category: "Diabetes",
    company: "Sun Pharma",
    price: "₹45",
    oldPrice: "₹55",
    discount: "18% OFF",
    save: "₹10",
  },
  {
    name: "Vitamin B12",
    image: tabs,
    category: "Vitamins",
    company: "HealthKart",
    price: "₹129",
    oldPrice: "₹160",
    discount: "19% OFF",
    save: "₹31",
  },
];

const FrequentlyOrdered = () => {
  return (
    <section className="mx-auto w-full max-w-[1300px] px-4 py-6 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#172033] sm:text-xl">
            Frequently Ordered
          </h2>

          <p className="mt-1 text-[11px] text-[#98a1b2] sm:text-xs">
            Popular medicines at the best prices
          </p>
        </div>

        {/* ================= HEADER ACTIONS ================= */}
        <div className="flex items-center gap-2">
          {/* Left */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#7d8798] shadow-sm transition-all duration-200 hover:border-[#2497df] hover:text-[#2497df] active:scale-95"
          >
            <FaAngleLeft size={13} />
          </button>

          {/* Right */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#7d8798] shadow-sm transition-all duration-200 hover:border-[#2497df] hover:text-[#2497df] active:scale-95"
          >
            <FaAngleRight size={13} />
          </button>

          {/* View All */}
          <button
            type="button"
            className="ml-1 flex items-center gap-1 text-[11px] font-semibold text-[#2497df]"
          >
            View All
            <FaAngleRight size={12} />
          </button>
        </div>
      </div>

      {/* ================= MEDICINE GRID ================= */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 lg:grid-cols-6">
        {medicines.map((medicine, index) => (
          <div key={index} className="group min-w-0">
            {/* ================= IMAGE ================= */}
            <div className="relative h-[125px] w-full overflow-hidden rounded-[18px] sm:h-[140px]">
              {/* Discount */}
              {medicine.discount && (
                <span className="absolute left-2 top-2 z-10 rounded-full bg-orange-500 px-2.5 py-1 text-[8px] font-bold text-white">
                  {medicine.discount}
                </span>
              )}

              {/* Heart */}
              <button
                type="button"
                className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-all duration-200 hover:text-red-500 active:scale-90"
              >
                <FiHeart size={14} />
              </button>

              {/* Product Image */}
              <img
                src={medicine.image}
                alt={medicine.name}
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="pt-3">
              {/* Category */}
              {medicine.category && (
                <p className="truncate text-[9px] font-medium text-[#98a1b2]">
                  {medicine.category}
                </p>
              )}

              {/* Name */}
              {medicine.name && (
                <h3 className="mt-1 truncate text-[12px] font-semibold text-[#202938] sm:text-[13px]">
                  {medicine.name}
                </h3>
              )}

              {/* Company */}
              {medicine.company && (
                <p className="mt-0.5 truncate text-[9px] text-[#98a1b2]">
                  {medicine.company}
                </p>
              )}

              {/* Price */}
              {medicine.price && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[13px] font-bold text-[#182230] sm:text-sm">
                    {medicine.price}
                  </span>

                  {medicine.oldPrice && (
                    <span className="text-[9px] text-[#98a1b2] line-through">
                      {medicine.oldPrice}
                    </span>
                  )}
                </div>
              )}

              {/* Save */}
              {medicine.save && (
                <p className="mt-1 text-[9px] font-medium text-green-500">
                  You save {medicine.save}
                </p>
              )}

              {/* Add To Cart */}
              <button
                type="button"
                className="mt-3 w-full rounded-full border border-[#2497df] bg-transparent py-2 text-[9px] font-semibold text-[#2497df] transition-all duration-200 hover:bg-[#2497df] hover:text-white active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyOrdered;
