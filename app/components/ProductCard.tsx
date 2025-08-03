// components/ProductCard.tsx

interface ProductProps {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

export default function ProductCard({ nombre, descripcion, precio, imagen }: ProductProps) {
    return (
        <div className="group relative bg-gradient-to-br from-white via-pink-50/50 to-rose-50/30 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-rotate-1 transform-gpu border border-pink-100/50">
            {/* Elemento decorativo de fondo */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-200/40 to-fuchsia-200/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Contenedor de imagen con overlay */}
            <div className="relative overflow-hidden">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay con gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge de precio flotante */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-bold text-sm">S/ {precio.toFixed(2)}</span>
                </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-700 transition-colors duration-300">
                    {nombre}
                </h3>

                <p className="text-gray-600 text-base mb-4 leading-relaxed line-clamp-2">
                    {descripcion}
                </p>

                {/* Precio principal (siempre visible) */}
                <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full shadow-md">
                        <span className="font-bold text-lg">S/ {precio.toFixed(2)}</span>
                    </div>

                    {/* Botón de acción */}
                    <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 transform-gpu opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                        Ver más
                    </button>
                </div>

                {/* Línea decorativa */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
        </div>
    );
}