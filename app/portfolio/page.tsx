import EarningsHero from "@/components/EarningsHero";
import EarningVideo from "@/components/EarningVideo";
import TrustedClients from "@/components/TrustedClients";
import TradePerformance from "@/components/TradePerformance";
import ProfitRecords from "@/components/ProfitRecords";
import Partners from "@/components/Partners";
export const metadata = {
    title: "Monthly Earnings | Your Brand Name",
    description: "Verified monthly trading earnings and performance proof",
};

export default function EarningsPage() {
    return (
        <>
            <EarningsHero />
            <EarningVideo />
            <TrustedClients />
            <TradePerformance />
            <ProfitRecords />
            <Partners />

        </>
    );
}
