import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import SidebarFilters from "../components/SidebarFilters";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import SortDropdown from "../components/SortDropdown";

const categories = [
  { id: 1, name: "Phones" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Groceries" },
];

function Home() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFilter = ({ category, maxPrice }) => {
    let results = productsData;
    if (category) results = results.filter((p) => p.category === category);
    if (maxPrice) results = results.filter((p) => p.price <= maxPrice);
    setFilteredProducts(results);
  };
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
  }

  

  return (
    <div>
      {/* Banner */}
      <HeroBanner />

      {/* Categories */}
      <Categories />

      {/* Content */}
      <div className="flex p-6 gap-6">
        {/* Sidebar */}
        <SidebarFilters categories={categories} onFilter={handleFilter} />

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Top Deals</h1>
            {/* Sorting */}
            <select
              onChange={(e) => {
                const sortType = e.target.value;
                let sorted = [...filteredProducts];
                if (sortType === "low-high") sorted.sort((a, b) => a.price - b.price);
                if (sortType === "high-low") sorted.sort((a, b) => b.price - a.price);
                setFilteredProducts(sorted);
              }}
              className="border px-2 py-1 rounded"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
