/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    // Incluye TODAS las clases necesarias
    safelist: [
        // Fondos y gradientes
        'bg-gradient-to-br', 'bg-gradient-to-r', 'bg-gradient-to-t',
        'from-rose-100', 'via-pink-100', 'to-fuchsia-100',
        'from-white', 'via-pink-50/50', 'to-rose-50/30',
        'from-pink-200/40', 'to-fuchsia-200/40',
        'from-emerald-500', 'to-green-500',
        'from-pink-400', 'via-rose-400', 'to-fuchsia-400',
        'from-transparent', 'via-white/10', 'to-transparent',
        'from-black/10', 'via-transparent',
        'bg-white/20', 'border-white/30', 'backdrop-blur-sm', 'border-pink-100/50',

        // Colores de texto
        'text-rose-700', 'text-fuchsia-600', 'text-pink-700', 'text-gray-800', 'text-gray-600',

        // Tipografía - CLASES DE FUENTE
        'font-black', 'font-bold', 'font-semibold', 'font-medium', 'font-extrabold',
        'text-5xl', 'text-6xl', 'text-7xl', 'text-4xl', 'text-xl', 'text-2xl', 'text-lg', 'text-base', 'text-sm',
        'sm:text-7xl', 'sm:text-6xl', 'sm:text-2xl', 'sm:text-xl',
        'line-clamp-2', 'leading-relaxed',

        // Sombras y efectos
        'drop-shadow-2xl', 'drop-shadow-lg', 'shadow-2xl', 'shadow-lg', 'shadow-md',

        // Gradientes de botones
        'from-pink-500', 'via-rose-500', 'to-pink-600',
        'from-fuchsia-500', 'via-pink-500', 'to-fuchsia-600',
        'hover:from-pink-600', 'hover:via-rose-600', 'hover:to-pink-700',
        'hover:from-fuchsia-600', 'hover:via-pink-600', 'hover:to-fuchsia-700',
        'hover:from-pink-600', 'hover:to-rose-600',

        // Elementos decorativos
        'from-pink-300/30', 'to-rose-300/30',
        'from-fuchsia-300/30', 'to-pink-300/30',
        'from-rose-400/20', 'to-fuchsia-400/20',
        'blur-xl', 'blur-lg',

        // Formas y espaciado
        'rounded-2xl', 'rounded-3xl', 'rounded-full',
        'py-4', 'px-10', 'py-3', 'px-8', 'p-6', 'px-4', 'py-2', 'px-6',
        'mb-6', 'mb-8', 'mb-12', 'mb-16', 'mt-16', 'mb-2', 'mb-3', 'mb-4',
        'w-16', 'h-16', 'w-full', 'h-48', 'h-56', 'h-1',

        // Posicionamiento
        'absolute', 'relative', 'inset-0', 'top-4', 'right-4', 'left-4', 'bottom-0', 'left-6', 'right-6',

        // Animaciones y transiciones
        'hover:scale-105', 'hover:scale-110', 'hover:rotate-1', 'hover:rotate-[-1deg]', 'hover:-rotate-1',
        'transition-all', 'transition-transform', 'transition-colors', 'transition-opacity',
        'duration-500', 'duration-700', 'duration-300',
        'animate-bounce', 'animate-pulse', 'transform-gpu',
        'hover:text-rose-700', 'hover:opacity-100', 'hover:translate-y-0', 'hover:translate-x-0',
        'opacity-0', 'group-hover:opacity-100', 'group-hover:translate-y-0', 'group-hover:translate-x-0',
        'group-hover:scale-x-100', 'group-hover:scale-110',
        'translate-x-[-100%]', 'group-hover:translate-x-[100%]', 'translate-x-4', 'translate-y-2', '-translate-y-2',
        'scale-x-0', 'origin-left',

        // Layout
        'min-h-screen', 'flex', 'flex-col', 'items-center', 'justify-center', 'justify-between',
        'text-center', 'relative', 'absolute', 'overflow-hidden', 'z-10',
        'max-w-xl', 'max-w-2xl', 'gap-6', 'gap-8',
        'px-6', 'py-12', 'leading-relaxed', 'object-cover',
        'pointer-events-none'
    ]
}