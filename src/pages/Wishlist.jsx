import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useAdmin } from "../context/AdminContext";

function WishlistPage() {
  const { wishlist, toggleWishlist } = useProduct();
  const { addToCart } = useCart();
  const { products } = useAdmin();

  const wishlistItems = products.filter(p => wishlist.includes(p.id));

  if (!wishlistItems.length) return <p className="p-6">Your wishlist is empty.</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {wishlistItems.map(product => (
        <div key={product.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg flex flex-col">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded mb-2" />
          <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
          <p className="text-green-600 dark:text-green-400 font-bold mb-2">₦{Number(product.price).toLocaleString()}</p>
          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-3 py-1 rounded hover:bg-green-700 dark:hover:bg-green-600"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product.id)}
              className="bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded hover:bg-red-600 dark:hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishlistPage;
