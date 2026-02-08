import Image from "next/image";
import Section from "@/components/Section";

export default function OurEdge() {
    return (
        <section className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid gap-14 items-center md:grid-cols-2">

                    {/* LEFT — CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-brand-accent">
                            Our Trading Edge
                        </h2>
                        <div className="mt-3 mb-6 h-1 w-16 rounded-full bg-brand-accent/80" />

                        <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">
                            We combine disciplined risk management, real-time market intelligence,
                            and strategic execution to help traders navigate volatile markets with confidence.
                        </p>

                        {/* Highlight points (NOT cards) */}
                        <ul className="space-y-4">
                            {[
                                "REAL-TIME FOREX & CRYPTO MARKET DATA",
                                "PROVEN RISK MANAGEMENT STRATEGIES",
                                "DATA-BACKED DECISION MAKING",
                                "FOCUSED ON CONSISTENCY, NOT HYPE",
                            ].map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                                    <span className="text-sm md:text-base text-white/90">
                    {point}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT — VISUAL */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-accent/10 blur-2xl rounded-full" />

                        <Image
                            src="/robot-tread.png"
                            alt="Market analysis"
                            width={520}
                            height={520}
                            className="relative z-10 rounded-2xl opacity-90"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
