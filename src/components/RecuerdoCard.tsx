import React, { useState } from "react";

interface RecuerdoCardProps {
    imagen: string; // debe ser una URL válida
    enlace?: string;
}

export default function RecuerdoCard({
                                         imagen,
                                         enlace = "#",
                                     }: RecuerdoCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const descargarImagen = () => {
        const link = document.createElement("a");
        link.href = imagen;
        link.download = imagen.split("/").pop() || "imagen.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Validación para detectar si imagen no es una cadena
    if (typeof imagen !== "string") {
        console.error("Propiedad 'imagen' no es una URL válida:", imagen);
        imagen = ""; // evitar crash, imagen vacía
    }

    return (
        <>
            <article
                className="group cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={imagen}
                    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                />
                <div className="p-4"></div>
            </article>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={imagen}
                        className="max-w-full max-h-[80vh] rounded-lg shadow-2xl mb-4"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // no cerrar modal
                            descargarImagen();
                        }}
                        className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Descargar imagen
                    </button>
                </div>
            )}
        </>
    );
}
