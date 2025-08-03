"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function AuroraBackground({
                                     className,
                                     children,
                                 }: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "relative overflow-hidden bg-slate-950 flex items-center justify-center",
                className
            )}
        >
            {/* Fondo degradado animado tipo aurora */}
            <div className="absolute inset-0 -z-30">
                <div className="absolute top-0 left-1/2 w-[140%] h-[140%] -translate-x-1/2 bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-indigo-500 opacity-20 blur-3xl animate-pulse" />
            </div>

            {/* Partículas flotantes */}
            <div className="absolute inset-0 -z-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-20 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Ondas animadas (SVG) */}
            <svg
                className="absolute bottom-0 left-0 w-full h-32 -z-10"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill="#f472b6"
                    fillOpacity="0.2"
                    d="M0,160L40,144C80,128,160,96,240,90.7C320,85,400,107,480,112C560,117,640,107,720,122.7C800,139,880,181,960,202.7C1040,224,1120,224,1200,202.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
            </svg>

            {children}
        </div>
    );
}
