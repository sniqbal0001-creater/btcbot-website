"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
    "/ssImgs/btc-bot-01-26-ss (1).jpg",
    "/ssImgs/btc-bot-12-25-ss (1).jpg",
    "/ssImgs/btc-bot-11-25-ss (1).jpg",
    "/ssImgs/btc-bot-10-25-ss (1).jpg",
    "/ssImgs/btc-bot-09-25-ss (1).jpg",
    "/ssImgs/btc-bot-08-25-ss (1).jpg",
    "/ssImgs/btc-bot-07-25-ss (1).jpg",

    // "/Growth-pic.jpg",
    // "/hero-trading-bg.jpg",
    // "/Growth-pic.jpg",
];

export default function EarningsHero() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState(0);

    /* ---------- AUTO SLIDE (MOBILE ONLY) ---------- */
    useEffect(() => {
        if (window.innerWidth >= 768) return;

        const interval = setInterval(() => {
            goToSlide((current + 1) % screenshots.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [current]);

    /* ---------- GO TO SLIDE ---------- */
    const goToSlide = (index: number) => {
        const slider = sliderRef.current;
        if (!slider) return;

        setCurrent(index);
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: "smooth",
        });
    };

    return (
        <section className="min-h-screen bg-black text-white flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">

                {/* TEXT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold uppercase text-brand-accent">
                        Monthly Earnings Proof
                    </h1>
                    <div className="mt-4 h-1 w-16 bg-brand-accent rounded-full" />
                    <p className="mt-6 text-brand-muted text-lg">
                        Swipe on mobile · Use arrows on desktop
                    </p>
                </div>

                {/* PHONE */}
                <div className="relative flex justify-center">

                    {/* LEFT BUTTON (DESKTOP ONLY) */}
                    <button
                        onClick={() =>
                            goToSlide((current - 1 + screenshots.length) % screenshots.length)
                        }
                        className="hidden md:flex absolute -left-1 top-1/2 -translate-y-1/2 z-20
                       bg-black/80 border border-white/20 rounded-full p-3
                       hover:bg-brand-accent transition"
                    >
                        <ChevronLeft />
                    </button>

                    {/* PHONE FRAME */}
                    <div className="relative w-[260px] md:w-[300px] aspect-[9/18]
                          rounded-[2.5rem] bg-black border-4 border-brand-dark
                          shadow-2xl overflow-hidden">

                        {/* NOTCH */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2
                            w-16 h-3 bg-black rounded-full z-12" />

                        {/* SLIDER */}
                        <div
                            ref={sliderRef}
                            className="
                flex h-full
                overflow-x-auto md:overflow-hidden
                snap-x snap-mandatory
                scroll-smooth
                scrollbar-hide
              "
                        >
                            {screenshots.map((src, i) => (
                                <div key={i} className="min-w-full h-full snap-center relative">
                                    <Image
                                        src={src}
                                        alt={`Earning screenshot ${i + 1}`}
                                        fill
                                        className="object-cover select-none"
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT BUTTON (DESKTOP ONLY) */}
                    <button
                        onClick={() => goToSlide((current + 1) % screenshots.length)}
                        className="hidden md:flex absolute -right-1 top-1/2 -translate-y-1/2 z-20
                       bg-black/80 border border-white/20 rounded-full p-3
                       hover:bg-brand-accent transition"
                    >
                        <ChevronRight />
                    </button>

                </div>
            </div>
        </section>
    );
}
