const records = [
    { month: "Jan 2025", profit: "+14.2%" },
    { month: "Feb 2025", profit: "+11.8%" },
    { month: "Mar 2025", profit: "+17.5%" },
    { month: "Apr 2025", profit: "+13.1%" },
];

export default function ProfitRecords() {
    return (
        <section className="min-h-screen flex items-center px-6 bg-black text-white">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-center mb-3">
                    Verified Profit Records
                </h2>
                <div className="h-1 w-20 bg-brand-accent mx-auto mb-12 rounded-full" />

                <div className="border-l border-brand-dark pl-8 space-y-10">
                    {records.map((item, i) => (
                        <div key={i} className="relative">
                            <span className="absolute -left-3 top-1.5 h-3 w-3 rounded-full bg-brand-accent" />
                            <p className="text-sm text-brand-muted">{item.month}</p>
                            <p className="text-xl font-semibold text-green-400">
                                {item.profit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
