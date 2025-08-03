// app/cartas/page.tsx
"use client";

import { FocusCards } from "@/components/ui/focus-cards";

const cartas = [
    // Lo que significas para mí (1 al 7)
    ...Array.from({ length: 7 }, (_, i) => ({
        title: `Lo que significas para mí ${i + 1}`,
        src: `/Lo que significas para mí_page-000${i + 1}.jpg`,
    })),
    // Mi Amor (1 al 7)
    ...Array.from({ length: 7 }, (_, i) => ({
        title: `Mi Amor ${i + 1}`,
        src: `/MiAmor_page-000${i + 1}.jpg`,
    })),
    // Extra
    {
        title: "La primera",
        src: "/xd012.jpg",
    },
];


export default function CartasPage() {
    return (
        <main className="flex flex-col items-center justify-start min-h-screen pt-28 pb-10 px-4 bg-gradient-to-br from-pink-100 via-white to-indigo-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-white dark:via-white dark:to-zinc-200">
                Nuestras cartas
            </h1>

            <FocusCards cards={cartas} />
        </main>
    );
}
