export default function TrustedClients() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-black text-white">
            <div className="max-w-6xl w-full text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Trusted by Traders Worldwide
                </h2>
                <div className="h-1 w-20 bg-brand-accent mx-auto mb-10 rounded-full" />

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-10 my-20">
                    {[
                        { label: "Active Clients", value: "1,000+" },
                        { label: "Countries Served", value: "15+" },
                        { label: "Daily Trades", value: "300+" },
                    ].map((item, i) => (
                        <div key={i}>
                            <p className="text-4xl font-extrabold text-brand-accent">
                                {item.value}
                            </p>
                            <p className="text-brand-muted mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Logos strip */}
                {/* <div className="flex flex-wrap justify-center gap-10 opacity-70">
                    {["Broker A", "Broker B", "Prop Firm", "Crypto Desk"].map(
                        (name, i) => (
                            <span
                                key={i}
                                className="text-sm uppercase tracking-widest"
                            >
                {name}
              </span>
                        )
                    )}
                </div> */}
            </div>
        </section>
    );
}
