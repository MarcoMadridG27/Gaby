import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // <- cambio aquí

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Nuestro Portafolio',
    description: 'Nuestro portafolio de todos nuestros momentos juntos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body>
        <Header /> {/* <- cambio aquí */}
        {children}
        </body>
        </html>
    );
}
