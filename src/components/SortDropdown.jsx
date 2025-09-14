import { useState } from "react";

function SortDropdown({ onSort }) {
  const [sortOption, setSortOption] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value);
  };

  return (
    <div className="mb-4 flex justify-end">
      <select
        value={sortOption}
        onChange={handleChange}
        className="border px-3 py-2 rounded-md"
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="az">Name: A → Z</option>
        <option value="za">Name: Z → A</option>
      </select>
    </div>
  );
}

export default SortDropdown;
