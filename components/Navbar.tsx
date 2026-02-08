"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "ContactUS", href: "/contactus" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-brand-dark">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-extrabold tracking-widest text-brand-accent"
                >
                    ATIF
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-brand-muted hover:text-white transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-brand-muted"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-brand-muted"></span>
                        <span className="block w-6 h-0.5 bg-brand-muted"></span>
                        <span className="block w-6 h-0.5 bg-brand-muted"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black border-t border-brand-dark">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-brand-muted hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
