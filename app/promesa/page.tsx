"use client";

import Image from "next/image";
import {motion, AnimatePresence, Variants} from "framer-motion";
import React from "react";

export default function PromesaPage() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const messages = [
        "No prometo tener todo resuelto, pero sí que voy a mejorar cada día por nosotros.",
        "Siempre vas a poder contar conmigo, en lo bueno, en lo difícil, y en cada paso que demos juntos.",
        "Y aunque hoy la distancia exista, confío en que con el tiempo también eso quedará atrás.",
        "Porque esto vale cada espera. Siempre contigo."
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000); // cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    const motionVariants: Variants = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-pink-50 dark:bg-gray-950">
            <div className="relative flex w-full max-w-6xl h-[750px] rounded-3xl bg-gradient-to-br from-[#FFDEE9]/60 to-[#B5FFFC]/60 shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Texto a la izquierda */}
                <div className="w-1/2 flex flex-col justify-center p-10">
                    <h1 className="text-4xl font-bold mb-6 text-white/90 drop-shadow-md">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                variants={motionVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                            >
                                {messages[currentIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </h1>
                </div>

                {/* Imagen a la derecha */}
                <div className="w-1/2 flex items-center justify-center p-8">
                    <Image
                        src="/promesa.jpg"
                        alt="Imagen decorativa"
                        width={400}
                        height={600}
                        className="rounded-xl object-contain max-h-[90%] drop-shadow-lg"
                    />
                </div>
            </div>
        </main>
    );
}
