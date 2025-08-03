// components/MediaBlock.tsx (puedes renombrar el archivo)
'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

interface MediaAbout {
    overview: string;
    conclusion: string;
}

interface MediaContent {
    src: string;
    poster?: string;
    background: string;
    title: string;
    date: string;
    scrollToExpand: string;
    about: MediaAbout;
    mediaType: 'video' | 'image';
}

const MediaTextContent = ({ about }: { about: MediaAbout }) => (
    <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>
            Sobre este video
        </h2>
        <p className='text-lg mb-8 text-black dark:text-white'>{about.overview}</p>
        <p className='text-lg mb-8 text-black dark:text-white'>{about.conclusion}</p>
    </div>
);

export const MediaBlock = ({ media }: { media: MediaContent }) => {
    useEffect(() => {
        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType={media.mediaType}
                mediaSrc={media.src}
                posterSrc={media.poster}
                bgImageSrc={media.background}
                title={media.title}
                date={media.date}
                scrollToExpand={media.scrollToExpand}
                textBlend
            >
                <MediaTextContent about={media.about} />
            </ScrollExpandMedia>
        </div>
    );
};
