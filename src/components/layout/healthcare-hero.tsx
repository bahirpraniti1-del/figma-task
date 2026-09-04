const HealthcareHero = () => {
  return (
    <section className="mx-auto w-full max-w-[1300px] px-4 py-6 sm:px-6">
      <div className="relative min-h-[300px] overflow-hidden rounded-[8px] bg-[#eef8ff]">
        {/* Content */}
        <div className="relative z-10 flex h-full max-w-[600px] flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2497df]">
            Your Health, Our Priority
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Healthcare
            <br />
            Made <span className="text-[#2497df]">Simple</span>
          </h1>

          <p className="mt-3 max-w-[450px] text-xs leading-5 text-gray-500 sm:text-sm">
            Get genuine medicines, affordable prices and convenient healthcare
            delivered right to your doorstep.
          </p>

          <button className="mt-5 w-fit rounded-[6px] bg-[#f7941d] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#e9840d]">
            Explore Medicines
          </button>

          {/* Features */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-[10px] text-gray-500">
                Trusted Medicines
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-[10px] text-gray-500">
                Affordable Prices
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-[10px] text-gray-500">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="absolute bottom-0 right-0 hidden h-full w-[45%] md:block">
          <img
            src={heroImage}
            alt="Healthcare"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;
