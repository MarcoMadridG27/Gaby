// app/chat/page.tsx
"use client";

import { ChatPreview } from "@/components/ui/chat-preview";
import { Cover } from "@/components/ui/cover";
import { MusicPlayer } from "@/components/ui/music-player";


const mensajesConGabriela = [
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Oye Marco, quería conversar de una situación contigo, lo estaba pensando y creo que para sentirme tranquila con todo pues ser sincera. Últimamente me sentí atraída y que llamas mi atención, no espero una respuesta o ser correspondida, pero quería comentarlo y ya",
        color: "text-pink-400",
        duration: 5000,
        hora: "03:38",
    },
    {
        avatar: "/capi1.jpg",
        username: "Marco",
        content: "Hola Gaby\nprimero que todo, quiero agradecerte por ser tan sincera y honesta conmigo\nme sentía confundido pero me alegro que sientas lo mismo que yo siento por ti\nquieres hablarlo por llamada antes de que vayas a trabajar?\no cuando vengas",
        color: "text-indigo-400",
        duration: 5000,
        hora: "07:21",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Hola Marco, buen día, fui a dejar a mi bebé al pre kinder",
        color: "text-pink-400",
        duration: 3000,
        hora: "08:25",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Claro que sí Marco, podemos conversarlo antes de ir a trabajar, me avisas",
        color: "text-pink-400",
        duration: 3000,
        hora: "08:26",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Confundido pq?",
        color: "text-pink-400",
        duration: 2500,
        hora: "08:26",
    },
    {
        avatar: "/capi1.jpg",
        username: "Marco",
        content: "En una hora está bien?",
        color: "text-indigo-400",
        duration: 2000,
        hora: "08:56",
    },
    {
        avatar: "/capi1.jpg",
        username: "Marco",
        content: "Pq no sabía si te gustaba o era yo el que se hacía ilusiones",
        color: "text-indigo-400",
        duration: 3000,
        hora: "08:57",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Si, está bien en una hora",
        color: "text-pink-400",
        duration: 2000,
        hora: "09:05",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Pero si soy bien obvia\nJajaja",
        color: "text-pink-400",
        duration: 3000,
        hora: "09:05",
    },
    {
        avatar: "/capi1.jpg",
        username: "Marco",
        content: "xd\npero yo soy yo ps\nme cuesta darme cuenta",
        color: "text-indigo-400",
        duration: 3000,
        hora: "09:18",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Xd\nSi me doy cuenta que te cuesta\nSoy más obvia y ni así xd",
        color: "text-pink-400",
        duration: 3000,
        hora: "09:24",
    },
    {
        avatar: "/capi1.jpg",
        username: "Marco",
        content: "xdd\navisas",
        color: "text-indigo-400",
        duration: 2000,
        hora: "10:21",
    },
    {
        avatar: "/capi2.jpg",
        username: "Gaby",
        content: "Ya estoy\nXd",
        color: "text-pink-400",
        duration: 2500,
        hora: "11:00",
    },
    {
        avatar: "/capi1.jpg",
        username: "Marco",
        content: "xd\nentra al ds",
        color: "text-indigo-400",
        duration: 2000,
        hora: "11:01",
    },
];


export default function ChatPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-60 bg-gradient-to-br from-pink-100 via-white to-indigo-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-black p-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-white dark:via-white dark:to-zinc-200">
                Increíble cómo pasa el <Cover>tiempo</Cover>
            </h1>

            <div className="w-full max-w-xl">
                <ChatPreview
                    messages={mensajesConGabriela}
                    variation="expanded"
                    maxMessages={4}
                    channel={{
                        name: "chat-personal",
                        description: "6 de Febrero del 2024",
                    }}
                    theme={{
                        background: "bg-white/80 dark:bg-zinc-900/70",
                        border: "border border-pink-300/40 dark:border-zinc-700",
                        textColor: "text-gray-800 dark:text-zinc-100",
                        avatarSize: "w-9 h-9",
                    }}
                />
                <MusicPlayer src="/musica.mp3" />

            </div>
        </main>

    );
}


