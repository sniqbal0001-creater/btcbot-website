import { FAQSection } from "@/components/FAQSection";

export default function FAQPage() {

    // data/faqData.ts
    const faqData = [
        {
            title: "How the System Works",
            subTitle: "Understand how the automated trading system operates",
            questions: [
                {
                    q: "How does the automated trading system work?",
                    a: "The system uses AI-driven algorithms to analyze the forex market in real time and automatically execute trades based on predefined rules.",
                },
                {
                    q: "Do I need trading experience to use it?",
                    a: "No. The system is designed for beginners and experienced traders alike. You only need to choose basic settings like risk level.",
                },
                {
                    q: "Can I monitor trades in real time?",
                    a: "Yes. Every trade, profit, and loss is visible in real time through your trading dashboard.",
                },
                {
                    q: "Is the system fully automated?",
                    a: "Yes. Trades are executed automatically, but you always remain in full control of your account.",
                },
            ],
        },
        {
            title: "Risk, Safety & Control",
            subTitle: "How your funds and trading risk are handled",
            questions: [
                {
                    q: "Is forex trading risky?",
                    a: "Yes. All trading involves risk. The system focuses on minimizing emotional errors and managing risk through automation.",
                },
                {
                    q: "What happens if the market moves against me?",
                    a: "The system uses stop-loss and risk limits to reduce losses. You can also choose conservative settings.",
                },
                {
                    q: "Is my money safe?",
                    a: "Your funds remain in your own broker account at all times. We never hold or withdraw your money.",
                },
                {
                    q: "Can I stop trading anytime?",
                    a: "Yes. You can pause or stop the system instantly with one click whenever you choose.",
                },
            ],
        },
        {
            title: "Earnings & Expectations",
            subTitle: "Realistic performance and transparency",
            questions: [
                {
                    q: "Are profits guaranteed?",
                    a: "No. There are no guaranteed profits in trading. Market conditions vary, and results depend on risk settings and capital.",
                },
                {
                    q: "How much can I earn monthly?",
                    a: "Returns depend on market conditions, account size, and risk level. The focus is on steady, sustainable growth.",
                },
                {
                    q: "How soon can I see results?",
                    a: "Some users see results within days, but consistent performance is best evaluated over longer periods.",
                },
                {
                    q: "Is compounding possible?",
                    a: "Yes. Many users reinvest profits to grow their accounts gradually over time.",
                },
            ],
        },
        {
            title: "Trust, Proof & Transparency",
            subTitle: "Why users trust the system",
            questions: [
                {
                    q: "How do I know this is not a scam?",
                    a: "Your money never comes to us. All funds stay in your personal broker account, and every trade is visible.",
                },
                {
                    q: "Do you provide earning proof?",
                    a: "Yes. We share verified trade histories and performance screenshots for transparency.",
                },
                {
                    q: "Do you guarantee results?",
                    a: "We never guarantee profits. What we guarantee is transparency, control, and system-driven execution.",
                },
                {
                    q: "What makes this different from other platforms?",
                    a: "Most platforms require you to send funds. Here, you stay in control of your money at all times.",
                },
            ],
        },
        {
            title: "Technical & Platform Access",
            subTitle: "Devices, platforms, and system setup",
            questions: [
                {
                    q: "Can I use the system on mobile?",
                    a: "Yes. The system works on Android, iOS, and web-based platforms.",
                },
                {
                    q: "Is it cloud-based or installed?",
                    a: "It is cloud-based and runs 24/7 even if your device is turned off.",
                },
                {
                    q: "Can I connect multiple accounts?",
                    a: "Yes. You can connect and manage multiple broker accounts if needed.",
                },
                {
                    q: "Do I need a powerful computer?",
                    a: "No. Any device with an internet connection is sufficient.",
                },
            ],
        },
        {
            title: "Support, Training & Long-Term Use",
            subTitle: "Help, learning, and ongoing support",
            questions: [
                {
                    q: "Do you provide training or onboarding?",
                    a: "Yes. We provide onboarding guidance, tutorials, and support to help users get started.",
                },
                {
                    q: "Is customer support available?",
                    a: "Support is available via chat, email, and phone during active hours.",
                },
                {
                    q: "Is this suitable for long-term use?",
                    a: "Yes. Many users use the system for long-term compounding and passive trading.",
                },
                {
                    q: "Can I withdraw profits anytime?",
                    a: "Yes. You have full withdrawal rights directly from your broker account.",
                },
            ],
        },
    ];



    return (
        <main>
            {faqData.map((section, index) => (
                <FAQSection
                    key={section.title}
                    title={section.title}
                    subTitle={section.subTitle}
                    questions={section.questions}
                    reverse={index % 2 !== 0}
                />
            ))}
        </main>
    );
}
