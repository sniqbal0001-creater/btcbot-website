export default function AboutHero() {
    return (
        <section className="relative py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    About <span className="text-brand-accent">Us</span>
                </h1>

                <p className="mt-6 text-lg text-brand-muted">
                    Building intelligent trading systems powered by AI, precision,
                    and real market experience.
                </p>
            </div>

            {/* subtle glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-accent/10 to-transparent" />
        </section>
    );
}
