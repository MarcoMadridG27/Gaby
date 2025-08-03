"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Header from "@/components/Header";
import TimeCounter from "@/components/TimeCounter";
import { TimelineDemo } from "@/components/TimelineDemo";
import { FlipWords } from "@/components/ui/flip-words";
import Preloader from "@/components/ui/preloader"; // ✅ importa el Preloader
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Footer } from "@/components/ui/footer";
import { Github, Instagram } from "lucide-react";
export default function Home() {
    const [showPreloader, setShowPreloader] = useState(true); // ✅ controla el estado

    const handleComplete = useCallback(() => {
        setShowPreloader(false);
    }, []);

    // ✅ si está mostrando el preloader, no muestra la página
    if (showPreloader) {
        return <Preloader onComplete={handleComplete} />;
    }

    return (
        <AuroraBackground className="min-h-screen w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
            {/* Sección inicial con grid */}
            <section
                id="inicio"
                className="bg-white dark:bg-gray-900 lg:grid lg:h-screen lg:place-content-center"
            >
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                            Desde aquel primer momento,{" "}
                            <span className="text-indigo-600">
                <FlipWords
                    words={["todo cambió", "fue distinto", "conectamos", "algo empezó"]}
                />
              </span>
                        </h1>

                        <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed dark:text-gray-300">
                            Todo comenzó un día como cualquier otro, pero desde entonces no
                            hemos dejado de avanzar juntos. Este espacio guarda momentos que
                            han marcado nuestro recorrido y los que aún están por venir.
                        </p>
                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <Link
                                href="/galeria"
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                            >
                                Nuestros Fotos
                            </Link>
                            <Link
                                href="#valores"
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                Lo que valoramos
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto hidden max-w-md md:block">
                        <img
                            src="/foto1.jpg"
                            alt="Imagen de nosotros"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-pink-200/70 via-transparent to-transparent dark:from-pink-400/20" />
                    </div>
                </div>
            </section>

            <TimeCounter />

            <section
                id="valores"
                className="w-full px-6 py-16 text-center bg-pink-50 dark:bg-pink-900/10"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-pink-700 dark:text-pink-200 mb-4">
                    Lo que valoramos
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-12">
                    A lo largo del tiempo, aprendimos que los detalles, el respeto y el tiempo
                    compartido son lo que realmente importa.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { text: "Respeto", desc: "La base de cualquier relación sana." },
                        { text: "Detalles", desc: "Gestos simples que importan." },
                        { text: "Tiempo", desc: "Dedicarnos espacio sin distracciones." },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center relative p-4 h-[30rem]"
                        >
                            {/* Íconos decorativos en las esquinas */}
                            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                            <EvervaultCard text={item.text} />
                            <p className="text-sm mt-4 text-gray-800 dark:text-gray-300 max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            <section
                id="recuerdos"
                className="w-full px-4 py-32 min-h-[150vh] max-w-4xl mx-auto"
            >
                <TimelineDemo />
            </section>


            {/* Botón flotante para volver arriba */}
            <Link
                href="#inicio"
                className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 text-white px-4 py-2 shadow-lg hover:bg-indigo-700 transition md:px-5 md:py-3"
            >
                ↑
            </Link>
            {/* Footer personalizado */}
            <div className="w-full mt-10">
                <Footer
                    logo={
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg"
                            alt="logo"
                            className="h-8 w-8"
                        />
                    }
                    brandName="Marco & Gaby"
                    socialLinks={[
                        {
                            icon: <Instagram className="h-5 w-5" />,
                            href: "https://www.instagram.com/marcomadridgonzales?igsh=YjBsbzdtMG5uZmN3&utm_source=qr",
                            label: "Instagram",
                        },
                        {
                            icon: <Github className="h-5 w-5" />,
                            href: "https://github.com/MarcoMadridG27/Gaby",
                            label: "GitHub",
                        },
                    ]}
                    mainLinks={[
                        { href: "/galeria", label: "Galería" },
                        { href: "#valores", label: "Valores" },
                        { href: "#recuerdos", label: "Recuerdos" },
                    ]}
                    legalLinks={[
                        { href: "/privacidad", label: "Privacidad" },
                    ]}
                    copyright={{
                        text: "© 2025 Marco & Gaby",
                        license: "Todos los derechos reservados",
                    }}
                />
            </div>
        </AuroraBackground>
    );
}
