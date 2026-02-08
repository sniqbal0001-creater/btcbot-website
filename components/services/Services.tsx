import ServiceCard from "./ServiceCard";

interface Service {
    title: string;
    description: string;
    icon: string;
}

interface ServicesProps {
    heading?: string;
    subheading?: string;
    services: Service[];
}

export default function Services(
    {
        heading = "Our Services",
        subheading = "What we offer to grow your business",
        services,
    }: ServicesProps) {
    return (
        <section className="bg-black py-20 px-6 min-h-screen">
            {/* Header */}
            <div className="max-w-dvw mx-auto text-center mb-10 mt-50">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 uppercase text-white">
                    {heading}
                </h2>
                <div className="mx-auto mb-10 h-1 w-50 rounded-full bg-brand-accent/80" />
                <p className="mt-4 text-[#ACBAC4] max-w-2xl mx-auto">
                    {subheading}
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const isLast =
                        index === services.length - 1 &&
                        services.length % 3 === 1;

                    return (
                        <div
                            key={index}
                            className={isLast ? "lg:col-start-2" : ""}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
