import React from "react";


const categories = [
  { id: 1, name: "iphones", image: "Iphones/iphone-13-pro.jpg" },
  { id: 2, name: "iphones", image: "Iphones/iphone-13.jpg" },
];

function Categories() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-gray-100">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
        >
          <img src={`${import.meta.env.BASE_URL}${cat.image}`} alt={cat.name} className="w-16 h-16 object-contain mb-2" />
          <span className="font-medium">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
export default Categories;
