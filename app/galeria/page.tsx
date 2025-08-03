"use client";
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { listarFotos } from "@/api/listarFotos";
import CarruselImagenes from "@/components/CarruselImagenes";
import { HeroParallaxGaleria } from "@/components/HeroParallax";
import { SeparadorViaje } from "@/components/SeparadorViaje";

type Viaje = {
    nombre: string;
    carpeta: string;
    descripcion?: string;
};

export default function GaleriaPage() {
    const viajes: Viaje[] = [
        {
            nombre: "Primer viaje",
            carpeta: "primerviaje",
            descripcion: "Nuestro primer viaje juntos, lleno de aventuras.",
        },
        {
            nombre: "Segundo viaje",
            carpeta: "segundoviaje",
            descripcion: "Segundo viaje.",
        },
        {
            nombre: "Tercer viaje",
            carpeta: "tercerviaje",
            descripcion: "Jala las cartas.",
        },
        {
            nombre: "Cuarto viaje",
            carpeta: "cuartoviaje",
            descripcion: "Viniste de sorpresa.",
        },
        {
            nombre: "Quinto viaje",
            carpeta: "quintoviaje",
            descripcion: "Por mi cumpleaños.",
        },
    ];

    const [fotosPorViaje, setFotosPorViaje] = useState<Record<string, string[]>>({});

    useEffect(() => {
        async function cargarFotos() {
            const fotosData: Record<string, string[]> = {};
            for (const viaje of viajes) {
                try {
                    const fotos = await listarFotos(viaje.carpeta);
                    fotosData[viaje.carpeta] = fotos.map((f) => f.url); // ✅ Vuelve a usar .url
                } catch (error) {
                    console.error("Error al cargar fotos de", viaje.carpeta, error);
                    fotosData[viaje.carpeta] = [];
                }
            }
            setFotosPorViaje(fotosData);
        }

        cargarFotos();
    }, []);

    const primerViaje = viajes[0];
    const viajesRestantes = viajes.slice(1);

    return (
        <AuroraBackground className="min-h-screen w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
            <main className="relative z-10 w-full max-w-screen-xl px-4 py-20 text-center">

                {fotosPorViaje[primerViaje.carpeta]?.length > 0 && (
                    <section className="mb-24 text-left">
                        <HeroParallaxGaleria
                            productos={fotosPorViaje[primerViaje.carpeta].map((url, i) => ({
                                title: `Recuerdo ${i + 1}`,
                                link: url,
                                thumbnail: url,
                            }))}
                        />
                    </section>
                )}


                {/* Resto de viajes */}
                {viajesRestantes.map((viaje, index) => {
                    const fotos = fotosPorViaje[viaje.carpeta] || [];

                    return (
                        <div key={viaje.carpeta} className="my-16">
                            <SeparadorViaje imagenes={fotos} descripcion={viaje.descripcion} />

                            <section className="mt-8 mb-24 text-left">
                                {fotos.length > 0 ? (
                                    viaje.nombre === "Tercer viaje" ? (
                                        <DraggableCardContainer className="relative flex min-h-[90vh] w-full items-center justify-center overflow-clip">
                                            {fotos.map((url, i) => (
                                                <DraggableCardBody
                                                    key={i}
                                                    className={`absolute top-[${10 + i * 8}%] left-[${20 + i * 5}%] rotate-[${i % 2 === 0 ? "-" : ""}${5 + (i % 10)}deg]`}
                                                >
                                                    <img
                                                        src={url}
                                                        alt={`Tercer viaje ${i + 1}`}
                                                        className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                                                    />
                                                    <h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
                                                        Recuerdo {i + 1}
                                                    </h3>
                                                </DraggableCardBody>
                                            ))}
                                        </DraggableCardContainer>
                                    ) : (
                                        <CarruselImagenes imagenes={fotos} />
                                    )
                                ) : (
                                    <p className="text-gray-500 dark:text-gray-400">No hay fotos disponibles.</p>
                                )}
                            </section>
                        </div>
                    );
                })}

                <div className="mt-12">
                    <a
                        href="/"
                        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                    >
                        ← Volver al inicio
                    </a>
                </div>
            </main>
        </AuroraBackground>
    );
}
