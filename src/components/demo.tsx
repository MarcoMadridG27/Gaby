'use client';

import { useState, useEffect } from 'react';
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
}

interface MediaContentCollection {
    [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
    video: {
        src: 'video1.mp4',
        poster:
            'https://gabymarco.s3.us-east-1.amazonaws.com/primerviaje/IMG-20250731-WA0010.jpg',
        background:
            'https://gabymarco.s3.us-east-1.amazonaws.com/tercerviaje/IMG-20250731-WA0047.jpg',
        title: 'Nuestro aniversario',
        date: 'Febrero 2025',
        scrollToExpand: 'Baja para expandir el video',
        about: {
            overview:
                'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.',
            conclusion:
                'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.',
        },
    },

};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
    const currentMedia = sampleMediaContent[mediaType];

    return (
        <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>
                About This Component
            </h2>
            <p className='text-lg mb-8 text-black dark:text-white'>
                {currentMedia.about.overview}
            </p>

            <p className='text-lg mb-8 text-black dark:text-white'>
                {currentMedia.about.conclusion}
            </p>
        </div>
    );
};

export const VideoExpansionTextBlend = () => {
    const mediaType = 'video';
    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType={mediaType}
                mediaSrc={currentMedia.src}
                posterSrc={currentMedia.poster}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
                textBlend
            >
                <MediaContent mediaType={mediaType} />
            </ScrollExpandMedia>
        </div>
    );
};

export const ImageExpansionTextBlend = () => {
    const mediaType = 'image';
    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType={mediaType}
                mediaSrc={currentMedia.src}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
                textBlend
            >
                <MediaContent mediaType={mediaType} />
            </ScrollExpandMedia>
        </div>
    );
};

export const VideoExpansion = () => {
    const mediaType = 'video';
    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType={mediaType}
                mediaSrc={currentMedia.src}
                posterSrc={currentMedia.poster}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
            >
                <MediaContent mediaType={mediaType} />
            </ScrollExpandMedia>
        </div>
    );
};

export const ImageExpansion = () => {
    const mediaType = 'image';
    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, []);

    return (
        <div className='min-h-screen'>
            <ScrollExpandMedia
                mediaType={mediaType}
                mediaSrc={currentMedia.src}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
            >
                <MediaContent mediaType={mediaType} />
            </ScrollExpandMedia>
        </div>
    );
};

const Demo = () => {
    const [mediaType, setMediaType] = useState('video');
    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, [mediaType]);

    return (
        <div className='min-h-screen'>
            <div className='fixed top-4 right-4 z-50 flex gap-2'>
                <button
                    onClick={() => setMediaType('video')}
                    className={`px-4 py-2 rounded-lg ${
                        mediaType === 'video'
                            ? 'bg-white text-black'
                            : 'bg-black/50 text-white border border-white/30'
                    }`}
                >
                    Video
                </button>

                <button
                    onClick={() => setMediaType('image')}
                    className={`px-4 py-2 rounded-lg ${
                        mediaType === 'image'
                            ? 'bg-white text-black'
                            : 'bg-black/50 text-white border border-white/30'
                    }`}
                >
                    Image
                </button>
            </div>

            <ScrollExpandMedia
                mediaType={mediaType as 'video' | 'image'}
                mediaSrc={currentMedia.src}
                posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
            >
                <MediaContent mediaType={mediaType as 'video' | 'image'} />
            </ScrollExpandMedia>
        </div>
    );
};

export default Demo;
