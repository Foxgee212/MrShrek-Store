import { useState } from "react";

function SidebarFilters({ categories, onFilter }) {
  const [priceRange, setPriceRange] = useState(500000);
  const [selectedCategory, setSelectedCategory] = useState("");

  const applyFilter = () => {
    onFilter({ category: selectedCategory, maxPrice: priceRange });
  };

  return (
    <aside className="w-64 bg-white p-4 shadow rounded">
      <h3 className="font-bold mb-3">Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <h4 className="font-semibold">Category</h4>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border px-2 py-1 rounded mt-2"
        >
          <option value="">All</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-semibold">Max Price: ₦{priceRange.toLocaleString()}</h4>
        <input
          type="range"
          min="40000"
          max="5000000"
          step="10000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full"
        />
      </div>

      <button
        onClick={applyFilter}
        className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 cursor-pointer"
      >
        Apply Filters
      </button>
    </aside>
  );
}
export default SidebarFilters;
