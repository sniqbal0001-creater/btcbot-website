export default function TradePerformance() {
    return (
        <section className="min-h-screen flex items-center px-6 bg-brand-dark">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Consistent Trading Performance
                    </h2>
                    <div className="h-1 w-16 bg-brand-accent mb-6 rounded-full" />
                    <p className="text-brand-muted leading-relaxed">
                        Our AI trading system is designed to maintain consistency through
                        strict risk control, disciplined execution, and data-driven
                        strategies. Every trade is executed based on predefined logic —
                        no emotions, no overtrading.
                    </p>
                </div>

                {/* Metrics */}
                <div className="space-y-8">
                    {[
                        { label: "Win Rate", value: "65-78%" },
                        { label: "Max Drawdown", value: "15%" },
                        { label: "Risk per Trade", value: "4.7%" },
                        { label: "Avg Monthly ROR", value: "12–18%" },
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm mb-2 text-white">
                                <span>{item.label}</span>
                                <span className="text-brand-accent">{item.value}</span>
                            </div>
                            <div className="h-2 bg-brand-dark rounded-full overflow-hidden">
                                <div className="h-full bg-brand-accent w-[75%]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
