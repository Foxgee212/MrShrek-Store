import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";


export default function Product(){
    const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch } = useCart();

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.name} className="w-40 h-60 md:w-1/2 rounded-lg object-scale-down " />
      <div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-semibold mt-4">₦{product.price.toLocaleString()}</p>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", product })}
          className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

}