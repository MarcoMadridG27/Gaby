"use client";
import { useEffect, useState } from "react";

const startDate = new Date("2024-02-06T00:00:00-05:00");

function getTimeElapsed() {
    const now = new Date();
    const diff = Math.floor((now.getTime() - startDate.getTime()) / 1000);

    const days = Math.floor(diff / (3600 * 24));
    const hours = Math.floor((diff % (3600 * 24)) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;

    return { days, hours, minutes, seconds };
}

export default function TimeCounter() {
    const [elapsed, setElapsed] = useState(getTimeElapsed());

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsed(getTimeElapsed());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto mt-12 p-6 sm:p-8 rounded-3xl border border-white/20 bg-white/10 dark:bg-zinc-900/40 backdrop-blur-xl shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-6">
                Llevamos juntos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-zinc-800 dark:text-zinc-100 font-mono">
                <TimeUnit label="Días" value={elapsed.days} />
                <TimeUnit label="Horas" value={elapsed.hours} />
                <TimeUnit label="Minutos" value={elapsed.minutes} />
                <TimeUnit label="Segundos" value={elapsed.seconds} />
            </div>
        </div>
    );
}

function TimeUnit({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold tracking-wide animate-pulse duration-1000">
                {value.toString().padStart(2, "0")}
            </span>
            <span className="text-sm uppercase tracking-wider mt-1 opacity-80">
                {label}
            </span>
        </div>
    );
}
