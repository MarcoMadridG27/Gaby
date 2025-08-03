import tortas from '../../data/tortas.json'; // nota los dos puntos más
import ProductCard from '../components/ProductCard';

export default function TortasPage() {
    return (
        <main>
            <h1>Tortas Personalizadas</h1>
            <div className="grid">
                {tortas.map((torta) => (
                    <ProductCard key={torta.id} producto={torta} />
                ))}
            </div>
        </main>
    );
}
