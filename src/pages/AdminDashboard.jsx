import { useState } from "react";
import { useAdmin } from "../context/AdminContext";

function AdminDashboard() {
  const { products, addProduct, deleteProduct } = useAdmin();
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) {
      alert("All fields are required");
      return;
    }
    addProduct(form);
    setForm({ name: "", price: "", image: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 space-y-4"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">
                  <img src={p.image} alt={p.name} className="w-16 h-16" />
                </td>
                <td className="p-2">{p.name}</td>
                <td className="p-2">₦{Number(p.price).toLocaleString()}</td>
                <td className="p-2">
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;