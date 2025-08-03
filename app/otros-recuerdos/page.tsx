'use client';

import { MediaBlock } from '@/components/MediaBlock';

const otrosRecuerdos = [
    {
        mediaType: 'video' as const,
        src: 'video2.mp4',
        poster: 'https://gabymarco.s3.us-east-1.amazonaws.com/primerviaje/IMG-20250731-WA0010.jpg',
        background: 'https://gabymarco.s3.us-east-1.amazonaws.com/primerviaje/IMG-20250731-WA0021.jpg',
        title: 'San Valentín',
        date: 'Febrero 2025',
        scrollToExpand: 'Baja para expandir el video',
        about: {
            overview: 'Aunque no pudimos estar juntos en persona, hicimos de esa noche algo especial. Te envié flores, vimos algo y compartimos una cena a distancia.',
            conclusion: "La proxima la pasaremos juntos en persona."
        },
    }

];

export default function OtrosRecuerdosPage() {
    return (
        <div>
            {otrosRecuerdos.map((media, index) => (
                <MediaBlock key={index} media={media} />
            ))}
        </div>
    );
}
