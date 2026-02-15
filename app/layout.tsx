import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
// import ChatBot from "@/components/ChatBot";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">
            {children}
        </main>
        <Footer />
        {/* <ChatBot /> */}
        <WhatsAppButton />
        </body>
        </html>
    );
}
