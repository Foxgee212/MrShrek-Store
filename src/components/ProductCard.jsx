import { Link } from "react-router-dom";

export default function ProductCard({product}){
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} className="w-full h-40 object-scale-down rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">₦{product.price.toLocaleString()}</p>
            <Link
             to={`product/${product.id}`}
             className="block mt-3 bg-yellow-500 text-white px-4 py-2 rounded text-center hover:bg-yellow-600"
             >
                View Details
            </Link>
        </div>
    )
}