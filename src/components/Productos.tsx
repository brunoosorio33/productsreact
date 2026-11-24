
interface ProductsProps {
    name: string;
    description: string;
    price: number;
    origin: string;
    available: boolean;
    image: string;
}

function Products({ name, description, price, origin, available, image }: ProductsProps) {
    return (
        <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">

            <img src={image} alt={name} className="w-full h-48 object-cover" />

            <div className="p-5">
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                    {available ? "Disponible" : "Agotado"}
                </span>

                <h2 className="text-xl font-semibold mt-4">{name}</h2>

                <p className="text-gray-500 text-sm mt-2">{description}</p>

                <p className="text-sm text-gray-600 mt-3">Origen: {origin}</p>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold">{price} €</span>
                    <button className="bg-amber-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-amber-900">
                        Comprar
                    </button>
                </div>
            </div>

        </article>
    );
}

export default Products;
