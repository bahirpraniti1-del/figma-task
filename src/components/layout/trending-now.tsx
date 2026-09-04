import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import tabs from "../../assets/tablet-img.webp";

const products = [
  {
    name: "Omega-3 Fish Oil",
    image: tabs,
    company: "HealthKart",
    price: "₹349",
    oldPrice: "₹499",
    discount: "30%",
    rating: 4.5,
    reviews: "2.3k",
    badge: "Trending",
  },
  {
    name: "Whey Protein 1kg",
    image: tabs,
    company: "MuscleBlaze",
    price: "₹799",
    oldPrice: "₹1199",
    discount: "33%",
    rating: 4.8,
    reviews: "5.7k",
    badge: "Best Seller",
  },
  {
    name: "Glucometer Kit",
    image: tabs,
    company: "Accu-Chek",
    price: "₹649",
    oldPrice: "₹899",
    discount: "28%",
    rating: 4.6,
    reviews: "1.9k",
    badge: "New",
  },
  {
    name: "Multivitamin 60s",
    image: tabs,
    company: "Centrum",
    price: "₹429",
    oldPrice: "₹599",
    discount: "28%",
    rating: 4.7,
    reviews: "3.2k",
    badge: "Trending",
  },
  {
    name: "Ashwagandha 500",
    image: tabs,
    company: "Himalaya",
    price: "₹189",
    oldPrice: "₹249",
    discount: "24%",
    rating: 4.5,
    reviews: "4.1k",
    badge: "Popular",
  },
  {
    name: "BP Monitor Digital",
    image: tabs,
    company: "Omron",
    price: "₹1299",
    oldPrice: "₹1799",
    discount: "28%",
    rating: 4.8,
    reviews: "6.9k",
    badge: "Best Seller",
  },
];

const TrendingNow = () => {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        {/* ================= HOT RIGHT NOW + TITLE ================= */}
        <div className="flex items-end justify-between">
          <div>
            {/* Hot Right Now */}
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-50 text-[10px]">
                🔥
              </span>

              <span className="text-[10px] font-bold tracking-[1px] text-orange-500">
                HOT RIGHT NOW
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[22px] font-bold leading-none text-[#172033]">
              Trending Now
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-[12px] text-[#98a1b2]">
              Most purchased by customers like you this week
            </p>
          </div>

          {/* ================= ARROWS ================= */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#7d8798] transition hover:border-[#2497df] hover:text-[#2497df]"
            >
              <FaAngleLeft size={13} />
            </button>

            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#7d8798] transition hover:border-[#2497df] hover:text-[#2497df]"
            >
              <FaAngleRight size={13} />
            </button>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            type="button"
            className="whitespace-nowrap rounded-full bg-[#172033] px-4 py-2 text-[11px] font-semibold text-white"
          >
            All
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-[11px] font-medium text-[#667085] transition hover:border-[#2497df] hover:text-[#2497df]"
          >
            Supplements
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-[11px] font-medium text-[#667085] transition hover:border-[#2497df] hover:text-[#2497df]"
          >
            Devices
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-[11px] font-medium text-[#667085] transition hover:border-[#2497df] hover:text-[#2497df]"
          >
            Skincare
          </button>

          <button
            type="button"
            className="whitespace-nowrap rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-[11px] font-medium text-[#667085] transition hover:border-[#2497df] hover:text-[#2497df]"
          >
            Diabetes
          </button>
        </div>

        {/* ================= PRODUCTS ================= */}
        {/* ================= PRODUCTS ================= */}
        <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((product, index) => (
            <div key={product.id || index} className="group w-full min-w-0">
              {/* IMAGE */}
              <div className="relative h-[120px] w-full overflow-hidden rounded-[14px] bg-[#f4f5f6]">
                {product.badge && (
                  <span
                    className={`absolute left-2 top-2 z-10 rounded-full px-2 py-[4px] text-[8px] font-bold ${
                      product.badge === "Best Seller"
                        ? "bg-blue-50 text-blue-600"
                        : product.badge === "New"
                          ? "bg-green-50 text-green-600"
                          : product.badge === "Popular"
                            ? "bg-green-50 text-green-600"
                            : "bg-orange-50 text-orange-500"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}

                {product.discount && (
                  <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-[4px] text-[8px] font-bold text-[#344054]">
                    -{product.discount}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* DETAILS */}
              <div className="pt-3">
                <h3 className="truncate text-[12px] font-bold text-[#202938]">
                  {product.name}
                </h3>

                <p className="mt-[3px] truncate text-[9px] text-[#9aa2b1]">
                  {product.company}
                </p>

                <div className="mt-2 flex items-center gap-1">
                  <span className="text-[10px] tracking-[-1px] text-[#fdbb20]">
                    ★★★★★
                  </span>

                  <span className="text-[8px] text-[#9aa2b1]">
                    {product.reviews}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[13px] font-bold text-[#182230]">
                    {product.price}
                  </span>

                  <span className="text-[9px] text-[#98a2b1] line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full rounded-full bg-[#2497df] py-[7px] text-[9px] font-bold text-white transition hover:bg-[#1688d0]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
