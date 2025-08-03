"use client";

import { motion } from "framer-motion"; // Asegúrate de que sea 'framer-motion' si no tienes 'motion/react'
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

interface SeparadorViajeProps {
    imagenes: string[];
    descripcion?: string; // <-- nuevo
}

export function SeparadorViaje({ imagenes,descripcion }: SeparadorViajeProps) {
    return (
        <ImagesSlider className="h-[40rem]" images={imagenes}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    {descripcion || "The hero section slideshow nobody asked for"}
                </motion.p>

            </motion.div>
        </ImagesSlider>
    );
}
