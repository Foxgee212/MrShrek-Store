import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import SidebarFilters from "../components/SidebarFilters";
import { useAdmin } from "../context/AdminContext";
import { useCart } from "../context/CartContext";
import { Star } from "lucide-react"; // ✅ for rating stars

const categories = [
  { id: 1, name: "Phones" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Groceries" },
];

function Home() {
  const { products } = useAdmin();
  const { addToCart } = useCart();

  const [filteredProducts, setFilteredProducts] = useState(products);

  // ✅ Apply filters
  const handleFilter = ({ category, maxPrice }) => {
    let results = products;
    if (category) results = results.filter((p) => p.category === category);
    if (maxPrice) results = results.filter((p) => Number(p.price) <= maxPrice);
    setFilteredProducts(results);
  };

  // ✅ Apply sorting
  const handleSort = (sortOption) => {
    let sorted = [...filteredProducts];
    switch (sortOption) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sorted = [...filteredProducts];
    }
    setFilteredProducts(sorted);
  };

  return (
    <div>
      {/* ✅ Hero Banner */}
      <HeroBanner />

      {/* ✅ Categories */}
      <Categories />

      <div className="flex p-6 gap-6">
        {/* ✅ Sidebar Filters */}
        <SidebarFilters categories={categories} onFilter={handleFilter} />

        {/* ✅ Products Grid + Sorting */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Top Deals</h1>
            <select
              onChange={(e) => handleSort(e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="az">Name: A → Z</option>
              <option value="za">Name: Z → A</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col"
                >
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-scale-down rounded mb-3"
                  />

                  {/* Name + Description */}
                  <h2 className="text-lg font-semibold line-clamp-1">
                    {product.name}
                  </h2>
                  {product.description && (
                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                      {product.description}
                    </p>
                  )}

                  {/* Price */}
                  <p className="text-green-600 font-bold mb-2">
                    ₦{Number(product.price).toLocaleString()}
                  </p>

                  {/* Ratings */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < 4
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-xs text-gray-500">(120)</span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
