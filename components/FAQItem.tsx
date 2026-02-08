"use client";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export function FAQItem({
                            question,
                            answer,
                            isOpen,
                            onToggle,
                        }: FAQItemProps) {
    return (
        <div className="border border-brand-dark rounded-xl overflow-hidden transition-all">
            {/* Question */}
            <button
                onClick={onToggle}
                className="
          w-full flex justify-between items-center
          px-6 py-4 text-left
          font-semibold text-brand-soft
          hover:bg-brand-dark/40
          transition
        "
            >
                <span>{question}</span>
                <span
                    className={`text-2xl transform transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-brand-accent" : "rotate-0"
                    }`}
                >
          +
        </span>
            </button>

            {/* Answer */}
            <div
                className={`
          grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
            >
                <div className="overflow-hidden px-6 pb-5 text-brand-muted leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}
