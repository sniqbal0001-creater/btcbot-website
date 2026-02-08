interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
    return (
        <section
            className={`
        snap-section
        min-h-screen
        flex items-center justify-center
        px-6
        ${className}
      `}
        >
            <div className="w-full max-w-7xl">
                {children}
            </div>
        </section>
    );
}
