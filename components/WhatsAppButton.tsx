"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/919876543210?text=Hi%20I%20need%20a%20website"
            target="_blank"
            aria-label="Chat on WhatsApp"
            className="
        fixed bottom-6 right-6 z-50
        w-16 h-16
        rounded-full
        shadow-lg
        transition-transform
        hover:scale-110
      "
        >
            <Image
                src="/icons/whatsappG.gif"
                alt="WhatsApp Chat"
                width={64}
                height={64}
                priority
                className="rounded-full"
            />
        </Link>
    );
}
