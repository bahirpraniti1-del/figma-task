import { useState } from "react";

const navItems = [
  "Medicines",
  "Personal Care",
  "Baby Care",
  "Super Saver",
  "Offers",
  "Lab Tests",
];

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Searching:", search);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex h-[72px] items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B5ED7] text-white">
              <span className="material-symbols-outlined">medication</span>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold leading-none text-[#0B5ED7]">
                DavaDay
              </h1>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                Licensed Pharmacy
              </p>
            </div>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="mx-auto hidden max-w-[600px] flex-1 md:block"
          >
            <div className="flex h-11 items-center rounded-xl border border-gray-200 bg-gray-50 px-3 transition focus-within:border-[#0B5ED7] focus-within:bg-white">
              <span className="material-symbols-outlined text-gray-500">
                search
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines, health products..."
                className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="hidden rounded-lg bg-[#0B5ED7] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0954c6] lg:block"
              >
                Search
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* Upload Prescription */}
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg border border-[#0B5ED7] px-3 py-2 text-sm font-semibold text-[#0B5ED7] transition hover:bg-blue-50 lg:flex"
            >
              <span className="material-symbols-outlined text-[19px]">
                upload_file
              </span>

              <span>Upload Rx</span>
            </button>

            {/* Cart */}
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">shopping_cart</span>

              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            {/* User */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden h-12 items-center justify-between lg:flex">
          <div className="flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="text-sm font-medium text-gray-700 transition hover:text-[#0B5ED7]"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
            <span className="material-symbols-outlined text-[17px]">
              verified
            </span>
            100% Genuine Pharmacy Certified
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="flex h-11 items-center rounded-xl border border-gray-200 bg-gray-50 px-3">
              <span className="material-symbols-outlined text-gray-500">
                search
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search medicines..."
                className="ml-2 w-full bg-transparent text-sm outline-none"
              />
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="border-t border-gray-100 py-3 lg:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="border-b border-gray-100 px-2 py-3 text-left text-sm font-medium text-gray-700 hover:text-[#0B5ED7]"
                  onClick={() => setMobileMenu(false)}
                >
                  {item}
                </button>
              ))}

              <button
                type="button"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#0B5ED7] px-4 py-3 text-sm font-semibold text-white"
              >
                <span className="material-symbols-outlined text-[18px]">
                  upload_file
                </span>
                Upload Prescription
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
