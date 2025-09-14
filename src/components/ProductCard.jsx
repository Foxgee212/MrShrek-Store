import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white flex flex-col">
      <img
        src={`${import.meta.env.BASE_URL}${product.image}`}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
      <p className="text-lg font-bold text-gray-800 mt-2">
        ₦{product.price.toLocaleString()}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="mt-auto bg-yellow-500 text-white px-4 py-2 rounded text-center hover:bg-yellow-600"
      >
        View
      </Link>
    </div>
  );
}
export default ProductCard;
