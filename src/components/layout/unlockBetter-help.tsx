import React from "react";

const CheckIcon = ({ color = "text-green-400" }) => (
  <span className={`text-[11px] ${color}`}>◉</span>
);

const plans = [
  {
    name: "BASIC",
    subtitle: "Essential healthcare savings",
    price: "₹299",
    period: "/month",
    features: [
      "Auto Refill",
      "Priority Reminders",
      "Free Delivery above ₹500",
      "5% Extra Savings on Generics",
      "Email Support",
    ],
    button: "Get Started",
    popular: false,
    annual: false,
  },
  {
    name: "PREMIUM",
    subtitle: "Everything you need, unlocked",
    price: "₹599",
    period: "/month",
    features: [
      "Everything in Basic",
      "Locked Medicine Prices",
      "Free Delivery on Every Order",
      "15% Extra Savings",
      "2× Loyalty Rewards",
      "Priority Customer Support",
    ],
    button: "Subscribe Now",
    popular: true,
    annual: false,
  },
  {
    name: "ANNUAL",
    subtitle: "Best value for families",
    price: "₹4,999",
    period: "/year",
    features: [
      "Everything in Premium",
      "Annual Health Report",
      "Priority Lab Test Booking",
      "Dedicated Health Manager",
      "Family Sharing (3 Members)",
      "Exclusive Health Events",
    ],
    button: "Choose Annual Plan",
    popular: false,
    annual: true,
  },
];

const UnlockBetterHelp = () => {
  return (
    <div className="min-h-screen bg-white text-[#172033]">
      {/* Hero */}
      <section className="bg-[#f7f9fc] px-5 pt-16 pb-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-[10px] font-bold tracking-[2px] text-[#2864f0]">
            ✦ MEMBERSHIP
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl">
            Unlock Better Healthcare Savings
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-[#9aa5b7] sm:text-sm">
            Join Dava Day Care Plan and enjoy exclusive pricing, priority
            healthcare services,
            <br className="hidden sm:block" />
            faster delivery, and loyalty rewards – all in one membership.
          </p>

          {/* Plans */}
          <div className="relative mx-auto mt-12 grid max-w-5xl items-center gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl bg-white text-left transition-all duration-300 ${
                  plan.popular
                    ? "border-t-2 border-[#2864f0] shadow-[0_12px_35px_rgba(40,100,240,0.15)] md:-mt-3 md:mb-[-3px]"
                    : "border border-[#edf0f5] shadow-[0_5px_20px_rgba(30,45,70,0.06)]"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#2864f0] px-4 py-1 text-[9px] font-semibold text-white shadow-md">
                    ✦ Most Popular
                  </div>
                )}

                {/* Save badge */}
                {plan.annual && (
                  <div className="absolute right-8 top-0 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#20c56a] px-3 py-1 text-[9px] font-bold text-white shadow-md">
                    Save ₹2,189
                  </div>
                )}

                <div className="p-7">
                  <p className="text-[9px] font-bold tracking-[1.5px] text-[#8290a5]">
                    {plan.name}
                  </p>

                  <p className="mt-1 text-[10px] text-[#9aa5b7]">
                    {plan.subtitle}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    <span
                      className={`text-3xl font-extrabold ${
                        plan.popular ? "text-[#2864f0]" : "text-[#172033]"
                      }`}
                    >
                      {plan.price}
                    </span>

                    <span className="mb-1 text-[10px] text-[#9aa5b7]">
                      {plan.period}
                    </span>
                  </div>

                  {plan.annual && (
                    <p className="mt-1 text-[8px] text-[#9aa5b7]">
                      Billed as ₹4,999 annually = ₹417/mo
                    </p>
                  )}

                  <div className="my-5 h-px bg-[#edf0f5]" />

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-[10px] text-[#536075]"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ecfff5]">
                          <CheckIcon />
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-6 h-10 w-full rounded-lg text-[10px] font-bold transition hover:opacity-90 ${
                      plan.popular
                        ? "bg-[#2864f0] text-white shadow-[0_5px_15px_rgba(40,100,240,0.2)]"
                        : plan.annual
                          ? "bg-[#172033] text-white"
                          : "border border-[#dfe4ec] bg-white text-[#536075]"
                    }`}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="mt-8 text-[9px] text-[#9aa5b7]">
            All plans include a 7-day free trial · Cancel anytime · GST
            applicable
          </p>
        </div>
      </section>
    </div>
  );
};

export default UnlockBetterHelp;
