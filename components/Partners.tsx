export default function Partners() {
    return (
        <section className="min-h-[60vh] flex items-center px-6 bg-black text-white">
            <div className="max-w-6xl mx-auto w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">
                    Our Technology & Liquidity Partners
                </h2>

                <div className="flex flex-wrap justify-center gap-12 opacity-60">
                    {[
                        "MetaTrader 5",
                        "Top Forex Brokers",
                        "Liquidity Providers",
                        "Cloud AI Infra",
                    ].map((partner, i) => (
                        <span
                            key={i}
                            className="uppercase tracking-widest text-sm"
                        >
              {partner}
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
