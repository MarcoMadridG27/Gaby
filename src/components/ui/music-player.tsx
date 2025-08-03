"use client";

import { useRef, useState, useEffect } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function MusicPlayer({
                                src,
                                title = "Those Eyes",
                            }: {
    src: string;
    title?: string;
}) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (

        <div className="fixed bottom-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-5 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-4 w-[300px]">
            <audio ref={audioRef} src={src} loop />
            <button
                onClick={togglePlay}
                className="text-pink-600 hover:scale-110 transition-transform"
            >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <div className="flex-1">
                <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100 truncate">
                    {title}
                </div>
                <div className="flex items-center gap-2 mt-1">
                    {volume > 0 ? (
                        <Volume2 size={16} className="text-zinc-600 dark:text-zinc-300" />
                    ) : (
                        <VolumeX size={16} className="text-zinc-600 dark:text-zinc-300" />
                    )}
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full accent-pink-500"
                    />
                </div>
            </div>
        </div>
    );
}
