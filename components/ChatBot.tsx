"use client";

import { useEffect, useRef, useState } from "react";
import { chatbotKnowledge } from "@/app/data/chatbotKnowledge";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi 👋 How can I help you today?" },
    ]);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    /* Auto scroll to latest message */
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open]);

    const findAnswer = (question: string) => {
        const lower = question.toLowerCase();

        for (const item of chatbotKnowledge) {
            if (item.keywords.some((k) => lower.includes(k))) {
                return item.answer;
            }
        }

        return "I’m not fully sure about that. Please contact support for accurate assistance.";
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userText = input.trim();
        setInput("");

        setMessages((prev) => [...prev, { from: "user", text: userText }]);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: findAnswer(userText) },
            ]);
        }, 500);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Chat Toggle Button (above WhatsApp) */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-20 left-6 z-50 bg-brand-accent text-black px-4 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
            >
                💬 Chat
            </button>

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-32 left-6 z-50 w-[320px] max-w-[90vw] bg-black border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in">

                    {/* Header */}
                    <div className="px-4 py-3 border-b border-white/10 text-white font-semibold flex justify-between items-center">
                        <span>Support Assistant</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white/60 hover:text-white text-sm"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                                    msg.from === "user"
                                        ? "ml-auto bg-brand-accent text-black"
                                        : "bg-white/10 text-white"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-white/10">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Type your question…"
                className="w-full resize-none bg-black border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-accent"
            />
                        <div className="flex justify-end mt-2">
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim()}
                                className="bg-brand-accent text-black px-4 py-1.5 rounded-md text-sm font-medium disabled:opacity-40"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
