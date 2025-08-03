'use client';

import { GradientButton } from "@/components/ui/gradient-button";
import { MediaBlock } from '@/components/MediaBlock';
import Link from 'next/link';

const recuerdos = [
    {
        mediaType: 'video' as const,
        src: 'video1.mp4',
        poster: 'https://gabymarco.s3.us-east-1.amazonaws.com/primerviaje/IMG-20250731-WA0010.jpg',
        background: 'https://gabymarco.s3.us-east-1.amazonaws.com/tercerviaje/IMG-20250731-WA0047.jpg',
        title: 'Nuestro aniversario',
        date: 'Febrero 2025',
        scrollToExpand: 'Baja para expandir el video',
        about: {
            overview: 'Nuestro primer año juntos',
            conclusion: 'Muchos momentos en tan poco tiempo',
        },
    },
];

export default function RecuerdosPage() {
    return (
        <div className="relative">
            {recuerdos.map((media, index) => (
                <MediaBlock key={index} media={media} />
            ))}

            {/* Botón para ir a la otra página */}
            <div className="fixed bottom-6 right-6 z-50">
                <Link href="/otros-recuerdos">
                    <GradientButton asChild>
                        <a>Ver más recuerdos</a>
                    </GradientButton>
                </Link>
            </div>
        </div>
    );
}
