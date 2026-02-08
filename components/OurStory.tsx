export default function OurStory() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <div className="h-1 w-16 bg-brand-accent mb-6 rounded-full" />

                    <p className="text-brand-muted leading-relaxed">
                        With over 5+ years of hands-on Forex trading experience, we noticed
                        that most traders struggle not due to lack of knowledge—but because
                        of emotions, inconsistency, and limited time.
                        <br /><br />
                        We built an AI-powered trading robot designed to operate 24/7,
                        eliminate emotional bias, and execute strategies with precision.
                        Today, over 1,000+ users trust our system to trade smarter using
                        reliable automation backed by real market logic.
                    </p>
                </div>

                <div className="rounded-2xl border border-brand-dark p-8 bg-brand-dark/30">
                    <p className="text-xl font-semibold">
                        “Empowering traders with automation,
                        precision, and discipline.”
                    </p>
                </div>
            </div>
        </section>
    );
}
