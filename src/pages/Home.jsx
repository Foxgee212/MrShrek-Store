import { useState, useEffect } from "react";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import SidebarFilters from "../components/SidebarFilters";
import { useAdmin } from "../context/AdminContext";
import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";
import { Star, Heart } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Countdown hook for flash sale
function useCountdown(endDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(endDate) - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  return timeLeft;
}

const categories = [
  { id: 1, name: "Phones" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Groceries" },
];

function Home() {
  const { products, updateProductRatings } = useAdmin();
  const { addToCart } = useCart();
  const { searchTerm, wishlist, toggleWishlist } = useProduct();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [newsletterEmail, setNewsletterEmail] = useState("");


  // Load products with ratings from localStorage
  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("productRatings")) || {};
    const productsWithRatings = products.map(p => ({
      ...p,
      ratings: savedRatings[p.id] || p.ratings || [],
    }));
    setFilteredProducts(productsWithRatings);
  }, [products]);

  // Filter & sort products
  useEffect(() => {
    let results = [...products];

    if (searchTerm) {
      results = results.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (sortOption) {
      switch (sortOption) {
        case "low-high": results.sort((a, b) => a.price - b.price); break;
        case "high-low": results.sort((a, b) => b.price - a.price); break;
        case "az": results.sort((a, b) => (a.name || "").localeCompare(b.name || "")); break;
        case "za": results.sort((a, b) => (b.name || "").localeCompare(a.name || "")); break;
      }
    }

    setFilteredProducts(results);
    setVisibleCount(8);
  }, [products, searchTerm, sortOption]);

  const handleFilter = ({ category, maxPrice }) => {
    let results = products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!maxPrice || Number(p.price) <= maxPrice)
    );

    if (searchTerm) {
      results = results.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (sortOption) {
      switch (sortOption) {
        case "low-high": results.sort((a, b) => a.price - b.price); break;
        case "high-low": results.sort((a, b) => b.price - a.price); break;
        case "az": results.sort((a, b) => (a.name || "").localeCompare(b.name || "")); break;
        case "za": results.sort((a, b) => (b.name || "").localeCompare(a.name || "")); break;
      }
    }

    setFilteredProducts(results);
    setVisibleCount(8);
  };

  const flashSaleProducts = products.filter((p) => p.isFlashSale);
  const recommendedProducts = products.slice(0, 10);

  return (
    <div className={`min-h-screen "bg-white text-gray-900"}`}>
      <HeroBanner />
      <Categories />

  

      <div className="flex p-6 gap-6 flex-wrap">
        <SidebarFilters categories={categories} onFilter={handleFilter} />

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border px-2 py-1 rounded">
              <option value="">Sort By</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="az">Name: A → Z</option>
              <option value="za">Name: Z → A</option>
            </select>
          </div>

          {!products.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => <div key={i} className="bg-gray-200 h-64 rounded animate-pulse" />)}
            </div>
          ) : filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filteredProducts.slice(0, visibleCount).map((product) => {
                  const averageRating = product.ratings?.length
                    ? product.ratings.reduce((a, b) => a + b, 0) / product.ratings.length
                    : 0;

                  return (
                    <div key={product.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg flex flex-col relative hover:scale-105 transition-transform">
                      {product.isNew && <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span>}
                      {product.isSale && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>}

                      {/* Wishlist */}
                      <div className="absolute top-2 right-8 cursor-pointer" onClick={() => toggleWishlist(product.id)}>
                        <Heart className={`${wishlist.includes(product.id) ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
                      </div>

                      <img src={product.image} alt={product.name} className="w-full h-48 object-scale-down rounded mb-3 cursor-pointer" onClick={() => setQuickViewProduct(product)} />

                      <h2 className="text-lg font-semibold line-clamp-1">{product.name}</h2>
                      {product.description && <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-2">{product.description}</p>}

                      <p className="text-green-600 dark:text-green-400 font-bold mb-2">₦{Number(product.price).toLocaleString()}</p>

                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={i < Math.round(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-500"} />
                        ))}
                        <span className="text-xs text-gray-500 dark:text-gray-400">({product.ratings?.length || 0} reviews)</span>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} size={16} className="cursor-pointer text-gray-300 hover:text-yellow-500"
                            onClick={() => {
                              const newRatings = [...(product.ratings || []), star];

                              // Update state
                              const updatedProducts = filteredProducts.map(p => 
                                p.id === product.id ? { ...p, ratings: newRatings } : p
                              );
                              setFilteredProducts(updatedProducts);

                              // Persist ratings
                              const savedRatings = JSON.parse(localStorage.getItem("productRatings")) || {};
                              savedRatings[product.id] = newRatings;
                              localStorage.setItem("productRatings", JSON.stringify(savedRatings));

                              // Update Admin Context
                              updateProductRatings(product.id, newRatings);
                            }}
                          />
                        ))}
                      </div>

                      <button onClick={() => addToCart(product)} className="mt-auto bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600">
                        Add to Cart
                      </button>
                    </div>
                  );
                })}
              </div>

              {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-6">
                  <button onClick={() => setVisibleCount(prev => prev + 8)} className="bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-6 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600">
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>
        <div className="flex overflow-x-auto gap-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="min-w-[180px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg flex flex-col cursor-pointer hover:scale-105 transition-transform" onClick={() => setQuickViewProduct(product)}>
              <img src={product.image} alt={product.name} className="w-full h-36 object-contain rounded mb-2" />
              <h3 className="text-sm font-semibold line-clamp-1">{product.name}</h3>
              <p className="text-green-600 dark:text-green-400 font-bold">₦{Number(product.price).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      {flashSaleProducts.length > 0 && (
        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-800 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">🔥 Flash Sale</h2>
          <div className="flex overflow-x-auto gap-4">
            {flashSaleProducts.map((product) => {
              const { days, hours, minutes, seconds } = useCountdown(product.flashSaleEnd);
              return (
                <div key={product.id} className="min-w-[180px] bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg flex flex-col">
                  <img src={product.image} alt={product.name} className="w-full h-36 object-contain rounded mb-2" />
                  <h3 className="text-sm font-semibold line-clamp-1">{product.name}</h3>
                  <p className="text-red-600 dark:text-red-400 font-bold mb-2">₦{Number(product.price).toLocaleString()}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Ends in: {days}d {hours}h {minutes}m {seconds}s</p>
                  <button onClick={() => addToCart(product)} className="mt-2 bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-3 py-1 rounded hover:bg-green-700 dark:hover:bg-green-600">Add to Cart</button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Newsletter */}
      <div className="mt-12 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">Get updates on new products and flash sales.</p>
        <div className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border rounded w-60"
          />
          <button
            onClick={() => {
              if (newsletterEmail) {
                alert(`Subscribed ${newsletterEmail} to newsletter!`);
                setNewsletterEmail("");
              } else {
                alert("Please enter a valid email.");
              }
            }}
            className="bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 dark:bg-gray-900 text-white p-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-bold mb-2">ShopEase</h3>
          <p className="text-gray-400">Your one-stop online store</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-500" target="_blank"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-green-500" target="_blank"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-green-500" target="_blank"><FaInstagram size={20} /></a>
        </div>
      </footer>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-11/12 md:w-2/3 relative">
            <button className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl" onClick={() => setQuickViewProduct(null)}>
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full md:w-1/2 h-64 object-contain rounded" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{quickViewProduct.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{quickViewProduct.description}</p>
                <p className="text-green-600 dark:text-green-400 font-bold mb-4">₦{Number(quickViewProduct.price).toLocaleString()}</p>
                <button onClick={() => { addToCart(quickViewProduct); setQuickViewProduct(null); }} className="bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
