import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      initials: "PS",
      color: "bg-sky-500",
      text: "Dava Day has been a lifesaver. My parents get their regular medications delivered within hours at prices that are really half of what I used to pay at a local pharmacy. The peace of mind knowing these are genuine medicines is priceless.",
    },
    {
      name: "Rahul Mehta",
      location: "Bangalore",
      initials: "RM",
      color: "bg-purple-500",
      text: "Super impressed with the service quality. I uploaded my prescription and everything was sorted within minutes. The app is incredibly intuitive and the delivery tracking is real-time. Finally a pharmacy platform that works.",
    },
    {
      name: "Anita Krishnan",
      location: "Chennai",
      initials: "AK",
      color: "bg-orange-400",
      text: "The generic alternatives feature is brilliant. It saved me over ₹4,000 on my monthly medicines alone. The quality is identical — same active ingredients — just without the expensive brand markup.",
    },
    {
      name: "Vikram Patel",
      location: "Delhi",
      initials: "VP",
      color: "bg-green-500",
      text: "From prescription upload to delivery tracking, everything works seamlessly. Customer support is exceptionally responsive. Dava Day is the only pharmacy app I recommend to my entire family and colleagues.",
    },
  ];

  return (
    <section className="w-full  bg-[#f8fafc] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1000px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[9px] font-semibold tracking-[0.08em] text-sky-500">
            REVIEWS
          </p>

          <h2 className="mt-2 text-[24px] font-bold tracking-[-0.5px] text-[#172033] sm:text-[26px]">
            What Customers Say
          </h2>

          {/* Rating */}
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="flex gap-[2px] text-[14px] text-amber-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>

            <span className="text-[11px] font-semibold text-gray-700">4.9</span>

            <span className="text-[9px] text-gray-400">
              · 50,000+ verified reviews
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="flex h-[250px] flex-col rounded-[18px] bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-[3px] text-[16px] text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 flex-1 text-[11px] leading-[1.6] text-gray-600">
                “{item.text}”
              </p>

              {/* User */}
              <div className="mt-5 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.color} text-[10px] font-semibold text-white`}
                >
                  {item.initials}
                </div>

                <div>
                  <h4 className="text-[11px] font-semibold leading-4 text-gray-800">
                    {item.name}
                  </h4>

                  <div className="mt-1 flex items-center gap-1 text-[9px] text-gray-400">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span className="text-green-500">✓ Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
