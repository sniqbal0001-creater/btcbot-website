import Hero from "@/components/Hero";
import Services from "@/components/services/Services";
import MarketTicker from "@/components/MarketTicker";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import InfoSplitSection from "@/components/InfoSplitSection";


const servicesData = [
    {
        title: "Automated Forex Trading",
        description:
            "AI-powered trading automation designed to execute rule-based forex strategies 24/7 without emotional interference.",
        icon: "/icons/forex.png",
    },
    {
        title: "Advanced Risk Management",
        description:
            "Built-in stop-loss logic, position sizing, and drawdown controls to help protect capital during volatile markets.",
        icon: "/icons/risk.png",
    },

    {
        title: "Performance Analytics",
        description:
            "Access transparent trade history, win/loss ratios, and performance metrics to track system behavior over time.",
        icon: "/icons/graph.png",
    },
    {
        title: "Strategy Flexibility",
        description:
            "Supports multiple trading styles such as scalping, intraday, and swing-based logic depending on market conditions.",
        icon: "/icons/strategy.png",
    },
    {
        title: "Full User Control",
        description:
            "You always remain in control — pause, stop, or disconnect the system from your broker account at any time.",
        icon: "/icons/control.png",
    },
    {
        title: "Broker-Compatible Setup",
        description:
            "Designed to work with popular MT4/MT5 brokers using secure, user-authorized connections.",
        icon: "/icons/broker.png",
    },
];


const testimonialsData = [
    {
        name: "Rahul Mehta",
        role: "Retail Forex Trader",
        message:
            "What impressed me most is transparency. Every trade is visible, and I can stop the system anytime. It feels structured, not random.",
    },
    {
        name: "Ayesha Khan",
        role: "Beginner Trader",
        message:
            "I had zero experience before. Starting on a new account helped me understand how trades work without pressure.",
    },
    {
        name: "David Thompson",
        role: "Part-Time Trader",
        message:
            "Automation helped me avoid emotional decisions. I mainly use it alongside my job and check performance weekly.",
    },
    {
        name: "Kunal Verma",
        role: "Intraday Trader",
        message:
            "Risk settings are clear and adjustable. I like that there are no unrealistic claims — just disciplined execution.",
    },
    {
        name: "Sarah Williams",
        role: "Swing Trader",
        message:
            "I appreciate the consistency. Some months are better than others, but the strategy stays controlled.",
    },
    {
        name: "Mohammed Ali",
        role: "MT5 User",
        message:
            "Setup was straightforward, and trades execute smoothly on my broker account. Support helped during onboarding.",
    },
    {
        name: "Rohit Sharma",
        role: "Long-Term User",
        message:
            "Using it for over 6 months now. The biggest benefit is saving time while maintaining a systematic approach.",
    },
    {
        name: "Emily Carter",
        role: "Risk-Conscious Trader",
        message:
            "I like that the focus is on risk control first. It doesn’t push aggressive trading, which builds confidence.",
    },
];
;


export default function Home() {
    return (
        <div className="snap-container">
            <Hero/>
            {/*<MarketTicker/>*/}
            <InfoSplitSection
                title="Why This System Works"
                subtitle="Built on logic, not promises"
                description="Our approach focuses on disciplined execution, real-time data, and strict risk controls rather than emotional or speculative trading."
                points={[
                    "RULE-BASED STRATEGY EXECUTION",
                    "NO MANUAL EMOTIONAL INTERVENTION",
                    "REAL-TIME MARKET DATA INPUTS",
                    "CAPITAL PRESERVATION FIRST APPROACH",
                ]}
                image="/robot-tread.png"
            />

            <InfoSplitSection
                title="Proof & Transparency"
                subtitle="See everything. Control everything."
                description="We believe trust is built through visibility. Every trade, metric, and action is accessible so users always know how the system behaves."
                points={[
                    "FULL TRADE HISTORY VISIBILITY",
                    "EASY WITHDRAW TO YOUR ACCOUNT ",
                    "NEW ACCOUNT SUPPORTED",
                    "NO GUARANTEED RETURNS CLAIMS",
                ]}
                image="/Growth-pic.jpg"
                mirror
            />

            <Services services={servicesData}/>

            <Testimonials testimonials={testimonialsData}/>
            <FAQ/>
        </div>
    );
}
