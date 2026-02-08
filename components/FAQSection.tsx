"use client";

import { useState } from "react";
import { FAQItem } from "./FAQItem";

interface FAQSectionProps {
    title: string;
    subTitle: string;
    questions: { q: string; a: string }[];
    reverse?: boolean;
}

export function FAQSection({
                               title,
                               subTitle,
                               questions,
                               reverse = false,
                           }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen flex items-center bg-black text-white px-6">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-6 items-center">

                {/* TEXT */}
                <div className={`md:col-span-2 ${reverse ? "md:order-2" : ""}`}>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-brand-accent">
                        {title}
                    </h2>
                    <div className="mt-4 h-1 w-16 bg-brand-accent rounded-full" />
                    <p className="mt-6 text-brand-muted leading-relaxed">
                        {subTitle}
                    </p>
                </div>

                {/* FAQ LIST */}
                <div className={`md:col-span-4 ${reverse ? "md:order-1" : ""}`}>
                    <div className="space-y-4">
                        {questions.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.q}
                                answer={item.a}
                                isOpen={openIndex === index}
                                onToggle={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
