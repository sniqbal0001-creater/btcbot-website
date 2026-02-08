"use client";

import {
    Phone,
    Mail,
    Instagram,
    Facebook,
    Linkedin,
} from "lucide-react";

export default function ContactHero() {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
            <div className="max-w-6xl w-full grid gap-12 md:grid-cols-2 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold uppercase text-brand-accent">
                        Get In Touch
                    </h1>

                    {/* underline */}
                    <div className="mt-4 h-1 w-20 bg-brand-accent rounded-full" />

                    <p className="mt-6 text-brand-muted text-lg leading-relaxed max-w-md">
                        Have questions, business inquiries, or need support?
                        Reach out to us anytime — we’re here to help you grow.
                    </p>
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6">

                    {/* PHONE */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-brand-dark/70">
                            <Phone className="text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-muted">Phone</p>
                            <a
                                href="tel:+919999999999"
                                className="text-lg font-medium hover:text-brand-accent transition"
                            >
                                +91 99999 99999
                            </a>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-brand-dark/70">
                            <Mail className="text-brand-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-brand-muted">Email</p>
                            <a
                                href="mailto:contact@yourdomain.com"
                                className="text-lg font-medium hover:text-brand-accent transition"
                            >
                                contact@yourdomain.com
                            </a>
                        </div>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div>
                        <p className="text-sm text-brand-muted mb-3">
                            Follow us on
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                target="_blank"
                                className="p-3 rounded-full bg-brand-dark/70 hover:bg-brand-accent hover:text-black transition"
                            >
                                <Instagram />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                className="p-3 rounded-full bg-brand-dark/70 hover:bg-brand-accent hover:text-black transition"
                            >
                                <Facebook />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                className="p-3 rounded-full bg-brand-dark/70 hover:bg-brand-accent hover:text-black transition"
                            >
                                <Linkedin />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
