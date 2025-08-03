import ProductCard from './ProductCard'

type Product = {
    name: string
    image: string
    description: string
}

export default function ProductList({ title, items }: { title: string, items: Product[] }) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
            </div>
        </section>
    )
}
