import Section from "@/components/Section";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('/hero-trading-bg.jpg')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-brand-dark" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1
                    className="
            animate-hero
            text-4xl md:text-4xl lg:text-7xl
            font-extrabold uppercase tracking-widest
            text-brand-accent
          "
                >
                    AI-Powered FOREX & CRYPTO Trading.
                </h1>

                <p
                    className="
            animate-hero-delay-1
            mt-6 text-brand-muted
            text-lg md:text-xl font-extrabold uppercase tracking-widest
          "
                >
                    Trade Smarter. Trade Emotion-Free.
                </p>
                <p
                    className="
            animate-hero-delay-1
            mt-6 text-brand-muted
            text-lg md:text-xl
          " 
                >
                    Automated trading Strategy that works directly on your broker account,
                    fully transparent.
                </p>

                <div className="animate-hero-delay-2 mt-10 flex justify-center gap-4 md:gap-8">
                    {/* <a
                        href="/contactus"
                        className="
              rounded-2xl px-4 md:px-8 py-2 md:py-4
              bg-brand-accent text-black text-sm md:text-lg
              font-semibold
              hover:opacity-90 transition
            "
                    >
                        CONTACT US
                    </a> */}

                    <a
                        href="/portfolio"
                        className="
              rounded-2xl px-4 md:px-8 py-2 md:py-4  text-sm md:text-lg
              border border-brand-muted
              text-brand-muted
              hover:text-white hover:border-white
              transition
            "
                    >
                        VIEW RESULTS
                    </a>
                </div>
            </div>
        </section>
    );
}
