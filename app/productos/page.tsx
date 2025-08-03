import productos from '@/data/productos.json';
import ProductCard from '../components/ProductCard';

export default function ProductosPage() {
    return (
        <main className="p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Catálogo de Productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {productos.map(producto => (
                    <ProductCard key={producto.id} {...producto} />
                ))}
            </div>
        </main>
    );
}
