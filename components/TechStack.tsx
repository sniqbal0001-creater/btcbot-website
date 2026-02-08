const tech = [
    "AI-driven market prediction algorithms",
    "Real-time data from top-tier brokers",
    "Custom scalping & hedging strategies",
    "Python-based ML models",
    "MT5 ultra-fast trade execution",
    "Secure API & encrypted data flow",
];

export default function TechStack() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-3 text-center">
                    Technology Stack
                </h2>
                <div className="h-1 w-16 bg-brand-accent mx-auto mb-10 rounded-full" />

                <ul className="grid md:grid-cols-2 gap-6">
                    {tech.map((item, i) => (
                        <li
                            key={i}
                            className="border border-brand-dark rounded-xl p-5 hover:bg-brand-dark/40 transition"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
