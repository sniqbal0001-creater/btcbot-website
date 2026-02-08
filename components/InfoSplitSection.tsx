import Image from "next/image";

interface InfoSplitSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    points: string[];
    image: string;
    imageAlt?: string;
    mirror?: boolean; // 👈 flips layout
}

export default function InfoSplitSection({
                                             title,
                                             subtitle,
                                             description,
                                             points,
                                             image,
                                             imageAlt = "",
                                             mirror = false,
                                         }: InfoSplitSectionProps) {
    return (
        <section className="bg-black text-white min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div
                    className={`grid gap-14 items-center md:grid-cols-2 ${
                        mirror ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                >
                    {/* CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-brand-accent">
                            {title}
                        </h2>

                        {subtitle && (
                            <p className="mt-2 text-sm uppercase tracking-widest text-brand-muted">
                                {subtitle}
                            </p>
                        )}

                        <div className="mt-4 mb-6 h-1 w-16 rounded-full bg-brand-accent/80" />

                        <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">
                            {description}
                        </p>

                        <ul className="space-y-4">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-accent shrink-0" />
                                    <span className="text-sm md:text-base text-white/90">
                    {point}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IMAGE */}
                    <div className="relative flex justify-center">
                        <div className="absolute -inset-6 bg-brand-accent/10 blur-3xl rounded-full" />
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={520}
                            height={520}
                            className="relative z-10 rounded-2xl opacity-95"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
