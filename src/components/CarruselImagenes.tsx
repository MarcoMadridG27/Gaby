"use client";

import { useState } from "react";
import { Carousel } from "@/components/ui/carousel";

interface CarruselImagenesProps {
    imagenes: string[];
}

export default function CarruselImagenes({ imagenes }: CarruselImagenesProps) {
    const [zoomSrc, setZoomSrc] = useState<string | null>(null);

    const slides = imagenes.map((src, i) => ({
        title: ``,
        button: "Ver cerca",
        src,
        onClick: () => setZoomSrc(src),
    }));

    return (
        <>
            <Carousel slides={slides} />
            {zoomSrc && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setZoomSrc(null)}
                >
                    <img src={zoomSrc} alt="Zoom" className="max-w-full max-h-full rounded-lg" />
                </div>
            )}
        </>
    );
}
