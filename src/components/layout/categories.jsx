import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import images from "../../assets/healthcare.png";
const Categories = () => {
  const slides = [
    {
      id: 1,
      image: images,
    },
    {
      id: 2,
      image: images,
    },
    {
      id: 3,
      image: images,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full  overflow-hidden">
      <div className="relative w-full">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0">
              <img
                src={slide.image}
                alt={`Hero Slide ${slide.id}`}
                className="block w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2
                     flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center
                     rounded-full bg-white/90 shadow-md
                     text-gray-700 hover:bg-white transition"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2
                     flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center
                     rounded-full bg-white/90 shadow-md
                     text-gray-700 hover:bg-white transition"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-7 bg-orange-500" : "w-2 bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
