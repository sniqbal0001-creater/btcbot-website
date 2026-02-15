"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is forex trading risky?",
    answer:
      "Yes. Forex trading involves market risk and is not risk-free. Our system focuses on disciplined, rule-based trading with built-in risk management, but losses are still possible. Trade only what you can afford to lose.",
  },
  {
    question: "Do you control or hold my money?",
    answer:
      "No. Your funds always remain in your own broker account. We never have access to deposits or withdrawals. The system only places trades with your permission.",
  },
  {
    question: "Is profit guaranteed?",
    answer:
      "No. There are no guaranteed profits in trading. Anyone claiming guaranteed returns is misleading. Our goal is consistency and risk control, not false promises.",
  },
  {
    question: "Can I stop or pause the trading anytime?",
    answer:
      "Yes. You have full control. You can pause, stop, or disconnect the system from your broker account at any time with a single action.",
  },
  {
    question: "Do I need trading experience to use this?",
    answer:
      "No. The system is designed for both beginners and experienced traders. Beginners can start with a small investment on the account, while professionals can customize risk settings.",
  },
  {
    question: "Can I try the system before going live?",
    answer:
      "No. We recommend starting with a Small deposit on the account so you can see real trades, performance, and behavior before investing a large amount.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase  mb-3">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mb-10 h-1 w-50 rounded-full bg-brand-accent/80" />

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-brand-dark rounded-xl overflow-hidden transition-all"
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-brand-soft hover:bg-brand-dark/40 transition"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-xl transform transition-transform ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-4 text-brand-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="m-3">
          <Link
            href="/faqs"
            className="
          text-sm font-semibold
          text-[#E1D9BC]
          group-hover:text-white
          transition-colors
        "
          >
            Now More →
          </Link>
        </div>
      </div>
    </section>
  );
}
