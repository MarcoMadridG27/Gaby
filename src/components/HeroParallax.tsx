"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export interface Product {
    title: string;
    link: string;
    thumbnail: string;
}

export function HeroParallaxGaleria({
                                        productos,
                                    }: {
    productos: Product[];
}) {
    return <HeroParallax products={productos} />;
}
