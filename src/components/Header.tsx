"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton
} from "@/components/ui/resizable-navbar";

import { useEffect, useState } from "react";
import Link from "next/link"; // ✅ Importar Link de Next.js

const navLinks = [
    { name: "Como empezó?", link: "/chat" },
    { name: "Recuerdos", link: "/recuerdos" },
    { name: "Promesa", link: "/promesa" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <Navbar className="top-0 z-50 bg-transparent backdrop-blur-md h-20 fixed w-full">
            {/* Desktop */}
            <NavBody className="flex w-full flex-wrap items-center justify-between gap-4 px-6 py-4">
                <NavbarLogo />
                <NavItems items={navLinks} />
                <div className="flex items-center gap-2">
                    <NavbarButton href="/galeria" variant="secondary">
                        Galería
                    </NavbarButton>
                    <NavbarButton href="/cartas" variant="primary">
                        Cartas
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile */}
            <MobileNav visible>
                <MobileNavHeader>
                    {/* ✅ Reemplazar <a> por <Link> */}
                    <Link
                        className="text-lg font-semibold text-pink-600 dark:text-pink-400"
                        href="/"
                    >
                        ❤️ Gaby & Marco
                    </Link>

                    <MobileNavToggle
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {/* ✅ Reemplazar <a> por <Link> */}
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="block w-full rounded px-4 py-2 text-left text-pink-600 dark:text-pink-400 font-semibold hover:bg-pink-100 dark:hover:bg-zinc-800"
                    >
                        ❤️ Gaby & Marco
                    </Link>
                    {[...navLinks, { name: "Galería", link: "/galeria" }, { name: "Cartas", link: "/cartas" }].map(
                        (item, idx) => (

                        <Link
                        key={`mobile-${idx}`}
                               href={item.link}
                               onClick={() => setIsOpen(false)}
                               className="block w-full rounded px-4 py-2 text-left text-gray-700 dark:text-white hover:bg-pink-100 dark:hover:bg-zinc-800"
                >
                    {item.name}
                </Link>
                )
                )}
            </MobileNavMenu>
        </MobileNav>
</Navbar>
);
}