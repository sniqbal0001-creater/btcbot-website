const achievements = [
    { year: "2023", text: "Initial AI robot launch" },
    { year: "2024", text: "Strategy optimization & risk control" },
    { year: "2025", text: "v2.0 launch with 95% uptime" },
    { year: "10,000+", text: "Successful trades executed" },
];

export default function Achievements() {
    return (
        <section className="py-20 px-6 bg-brand-dark/20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-3">Achievements</h2>
                <div className="h-1 w-16 bg-brand-accent mx-auto mb-10 rounded-full" />

                <div className="grid md:grid-cols-4 gap-6">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-brand-dark p-6 bg-black"
                        >
                            <p className="text-2xl font-bold text-brand-accent">
                                {item.year}
                            </p>
                            <p className="text-brand-muted mt-2 text-sm">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
