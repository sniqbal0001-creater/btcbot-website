"use client";

interface Testimonial {
    name: string;
    role: string;
    message: string;
}

interface TestimonialsProps {
    title?: string;
    subtitle?: string;
    testimonials: Testimonial[];
}

export default function TestimonialsMarquee({
                                                title = "Trusted by Traders",
                                                subtitle = "Real feedback from our global clients",
                                                testimonials,
                                            }: TestimonialsProps) {
    return (
        <section className="bg-black text-white min-h-screen flex items-center">
            <div className="w-full">

                {/* Header */}
                <div className="max-w-6xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
                        {title}
                    </h2>

                    {/* Underline */}
                    <div className="mx-auto mt-3 mb-6 h-1 w-16 rounded-full bg-brand-accent/80" />

                    <p className="text-brand-muted max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee gap-12 px-6 hover:[animation-play-state:paused]">
                        {[...testimonials, ...testimonials].map((t, index) => (
                            <div
                                key={`${t.name}-${index}`}
                                className="
                  min-w-[320px]
                  max-w-[320px]
                  bg-brand-dark/90
                  border border-white/10
                  rounded-2xl
                  p-6
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-105
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:shadow-black/40
                "
                            >
                                {/* Message */}
                                <p className="text-brand-soft text-sm leading-relaxed mb-6">
                                    “{t.message}”
                                </p>

                                {/* User */}
                                <div className="border-t border-white/10 pt-4">
                                    <div className="font-semibold text-white">
                                        {t.name}
                                    </div>
                                    <div className="text-xs uppercase tracking-wide text-brand-muted">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
                </div>

            </div>
        </section>
    );
}
