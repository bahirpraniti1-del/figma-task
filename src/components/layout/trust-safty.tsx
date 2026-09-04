import React from "react";
import {
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const TrustSafty = () => {
  const cards = [
    {
      title: "100% Genuine Medicines",
      desc: "Every product is sourced from licensed manufacturers. FSSAI verified batch by batch.",
      icon: CheckCircle2,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50",
    },
    {
      title: "Licensed Pharmacy",
      desc: "Government registered, FSSAI certified. Our pharmacists verify every prescription.",
      icon: BadgeCheck,
      iconColor: "text-sky-500",
      iconBg: "bg-sky-50",
    },
    {
      title: "Secure Payments",
      desc: "256-bit SSL encryption. All payment methods secured. PCI DSS compliant gateway.",
      icon: CreditCard,
      iconColor: "text-violet-500",
      iconBg: "bg-violet-50",
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free return policy. Full refund for any unsealed product within 7 days.",
      icon: RotateCcw,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-50",
    },
    {
      title: "Verified Suppliers",
      desc: "We work only with authorised distributors. Every supply chain link is authenticated.",
      icon: ShieldCheck,
      iconColor: "text-teal-500",
      iconBg: "bg-teal-50",
    },
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* ================= TRUST & SAFETY ================= */}

      <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          {/* Heading */}
          <div className="text-center">
            <p className="text-[9px] font-bold tracking-[0.3em] text-emerald-500 sm:text-[10px]">
              TRUST & SAFETY
            </p>

            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#101827] sm:text-[27px] md:text-3xl">
              Your health is our responsibility
            </h1>
          </div>

          {/* Cards */}
          <div
            className="
              mt-10
              grid
              grid-cols-2
              gap-3
              sm:mt-12
              sm:gap-4
              md:grid-cols-2
              md:gap-5
              lg:grid-cols-5
            "
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="
                    min-h-[190px]
                    rounded-2xl
                    border
                    border-slate-100
                    bg-white
                    p-4
                    shadow-[0_8px_25px_rgba(15,23,42,0.07)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]
                    sm:min-h-[205px]
                    sm:p-5
                    md:min-h-[215px]
                    md:p-5
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      mb-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      ${card.iconBg}
                      sm:mb-5
                      sm:h-11
                      sm:w-11
                    `}
                  >
                    <Icon
                      size={19}
                      strokeWidth={2}
                      className={card.iconColor}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      min-h-[40px]
                      text-[12px]
                      font-bold
                      leading-5
                      text-slate-900
                      sm:text-[13px]
                      md:text-[14px]
                    "
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.65]
                      text-slate-400
                      sm:mt-3
                      sm:text-[11px]
                      sm:leading-[1.7]
                    "
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustSafty;
