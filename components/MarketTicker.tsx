"use client";

import { useEffect, useState } from "react";

interface Rate {
    label: string;
    value: string;
}

export default function MarketTicker() {
    const [rates, setRates] = useState<Rate[]>([]);

    useEffect(() => {
        async function fetchRates() {
            try {
                /* Bitcoin */
                const btcRes = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
                );
                const btcData = await btcRes.json();

                /* Forex */
                const forexRes = await fetch(
                    "https://api.frankfurter.app/latest?from=USD"
                );
                const forexData = await forexRes.json();

                /* Gold & Silver */
                const metalRes = await fetch("https://api.metals.live/v1/spot");
                const metalData = await metalRes.json();
                // format: [{ gold: 2034.1 }, { silver: 23.5 }, ...]

                const gold = metalData.find((m: any) => m.gold)?.gold;
                const silver = metalData.find((m: any) => m.silver)?.silver;

                /* Oil (WTI – CSV) */
                const oilRes = await fetch(
                    "https://stooq.com/q/l/?s=cl.f&f=sd2t2ohlcv&h&e=csv"
                );
                const oilText = await oilRes.text();
                const oilLines = oilText.split("\n");
                const oilColumns = oilLines[1]?.split(",");
                const oilPrice = oilColumns?.[6]; // close price

                setRates([
                    {
                        label: "Bitcoin (USD)",
                        value: `$${btcData.bitcoin.usd.toLocaleString()}`,
                    },
                    {
                        label: "Gold (XAU/USD)",
                        value: gold ? `$${gold.toFixed(2)}` : "—",
                    },
                    {
                        label: "Silver (XAG/USD)",
                        value: silver ? `$${silver.toFixed(2)}` : "—",
                    },
                    {
                        label: "Oil (WTI)",
                        value: oilPrice ? `$${Number(oilPrice).toFixed(2)}` : "—",
                    },
                    {
                        label: "EUR / USD",
                        value: (1 / forexData.rates.EUR).toFixed(4),
                    },
                    {
                        label: "USD / JPY",
                        value: forexData.rates.JPY.toFixed(2),
                    },
                ]);
            } catch (error) {
                console.error("Failed to load market data", error);
            }
        }

        fetchRates();
        const interval = setInterval(fetchRates, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!rates.length) return null;

    return (
        <section className="bg-black border-t border-white/10 py-6">
            <div className="max-w-6xl mx-auto px-6 mb-3">
                <h3 className="text-sm uppercase tracking-widest text-[#E1D9BC]">
                    Market Rates
                </h3>
                min-w-[220px]
                grid place-items-center
                rounded-xl
                border border-white/10
                bg-[#30364F]/80
                px-5 py-3
                text-center
                hover:-translate-y-1
                transition-transform

            </div>

            <div className="relative overflow-hidden">
                <div className="animate-marquee flex gap-6 px-6">
                    {[...rates, ...rates].map((rate, index) => (
                        <div
                            key={rate.label + index}
                            className=""
                        >
              <span className="text-xs uppercase text-[#ACBAC4]">
                {rate.label}
              </span>
                            <span className="mt-1 text-lg font-semibold text-white">
                {rate.value}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
