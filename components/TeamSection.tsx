const team = [
    {
        name: "Founder & Lead Trader",
        role: "10+ Years Forex & Algo Trading",
        img: "/team/founder.jpg",
    },
    {
        name: "AI / ML Engineer",
        role: "Python • Machine Learning • MT5",
        img: "/team/ml.jpg",
    },
    {
        name: "Quant Strategist",
        role: "Scalping • Hedging • Risk Models",
        img: "/team/quant.jpg",
    },
];

export default function TeamSection() {
    return (
        <section className="py-20 px-6 bg-brand-dark/20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-3">Our Team</h2>
                <div className="h-1 w-16 bg-brand-accent mx-auto mb-10 rounded-full" />

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border border-brand-dark bg-black p-6 hover:scale-105 transition"
                        >
                            <div className="h-40 w-40 mx-auto rounded-full bg-brand-dark mb-4 overflow-hidden">
                                {/* image placeholder */}
                            </div>
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-brand-muted text-sm mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
