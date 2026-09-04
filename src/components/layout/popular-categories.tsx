import {
  FiActivity,
  FiHeart,
  FiSun,
  FiShield,
  FiCpu,
  FiGrid,
} from "react-icons/fi";

import { PiBabyBold } from "react-icons/pi";

const categories = [
  {
    title: "Medicines",
    products: "2,000+",
    bottomText: "Prescription & OTC",
    icon: FiActivity,
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Personal Care",
    products: "800+",
    bottomText: "Skin & Body Care",
    icon: FiHeart,
    bg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "Baby Care",
    products: "400+",
    bottomText: "For Little Ones",
    icon: PiBabyBold,
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Nutrition",
    products: "600+",
    bottomText: "Vitamins & Supplements",
    icon: FiSun,
    bg: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "Wellness",
    products: "500+",
    bottomText: "Health & Wellness",
    icon: FiShield,
    bg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Devices",
    products: "300+",
    bottomText: "Health Devices",
    icon: FiCpu,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

const PopularCategories = () => {
  return (
    <section className="w-full bg-[#eef8ff] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            {/* Browse */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                <FiGrid size={15} className="text-blue-600" strokeWidth={2} />
              </div>

              <span className="text-xs font-semibold text-blue-600">
                Browse
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">
              Popular Categories
            </h2>

            {/* Description */}
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Everything you need, neatly organised
            </p>
          </div>

          {/* See All */}
          <button className="hidden text-sm font-semibold text-blue-600 sm:block">
            See all →
          </button>
        </div>

        {/* ================= CATEGORY CARDS ================= */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-6 lg:gap-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div key={category.title} className="text-center">
                {/* CARD */}
                <div
                  className="
          flex
          h-[150px]
          w-full
          flex-col
          items-center
          justify-center
          rounded-xl
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-md
        "
                >
                  {/* Icon */}
                  <div
                    className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            ${category.bg}
          `}
                  >
                    <Icon size={22} className={category.iconColor} />
                  </div>

                  {/* Name inside card */}
                  <h3 className="mt-3 text-sm font-semibold text-gray-800">
                    {category.title}
                  </h3>

                  {/* Products inside card */}
                  <p className="mt-1 text-[11px] text-gray-400">
                    {category.products} products
                  </p>
                </div>

                {/* TEXT BELOW CARD */}
                <p className="mt-3 text-xs font-medium text-gray-600">
                  {category.bottomText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
