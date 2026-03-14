import Link from "next/link";
import { Sansation } from "next/font/google";

const sansation = Sansation({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export default function Footer() {
    return (
        <footer className="bg-black border-t border-brand-dark">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
                {/* Brand */}
                <div>
                    <h2 className={`${sansation.className} text-lg font-extrabold tracking-widest text-[#daa520]`}>
                        BTC<span className="text-[#124592]">B0T</span>
                    </h2>
                    <p className="mt-4 text-sm text-brand-muted max-w-xs">
                        Professional Forex & Crypto trading.
                    </p>
                </div>

                {/*/!* Quick Links *!/*/}
                {/*<div>*/}
                {/*    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">*/}
                {/*        Quick Links*/}
                {/*    </h3>*/}
                {/*    <ul className="mt-4 space-y-2">*/}
                {/*        {[*/}
                {/*            { name: "Home", href: "/" },*/}
                {/*            { name: "About", href: "/about" },*/}
                {/*            { name: "Markets", href: "/markets" },*/}
                {/*            { name: "Contact", href: "/contact" },*/}
                {/*        ].map((link) => (*/}
                {/*            <li key={link.name}>*/}
                {/*                <Link*/}
                {/*                    href={link.href}*/}
                {/*                    className="text-brand-muted hover:text-white transition"*/}
                {/*                >*/}
                {/*                    {link.name}*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* Contact */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Contact
                    </h3>

                    <div className="mt-4 space-y-3 text-brand-muted text-sm">
                        {/* <p>
                            📞{" "}
                            <a
                                href="tel:+919876543210"
                                className="hover:text-white transition"
                            >
                                +91 75178 65259
                            </a>
                        </p> */}

                        <p>
                            ✉️{" "}
                            <a
                                href="mailto:support@btcb0t.com  "
                                className="hover:text-white transition"
                            >
                                support@btcb0t.com  
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-brand-dark py-4 text-center text-sm text-brand-muted">
                © {new Date().getFullYear()} BTC-Bot. All rights reserved.
            </div>
        </footer>
    );
}
