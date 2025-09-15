// pages/AdminDashboard.jsx
import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useHero } from "../context/HeroContext";

function AdminDashboard() {
  const { products, addProduct, deleteProduct, updateProduct } = useAdmin();
  const { heroes, addHero, updateHero, deleteHero } = useHero();

  // ---------- Hero Form ----------
  const [heroForm, setHeroForm] = useState({
    title: "",
    subtitle: "",
    ctaText: "",
    ctaLink: "",
    image: "",
  });
  const [heroPreview, setHeroPreview] = useState(null);
  const [editingHeroId, setEditingHeroId] = useState(null);

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleHeroFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // local preview
      setHeroForm((prev) => ({ ...prev, image: imageUrl }));
      setHeroPreview(imageUrl);
    }
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    if (!heroForm.title || !heroForm.image) {
      alert("Hero title and image are required.");
      return;
    }

    if (editingHeroId) {
      updateHero(editingHeroId, heroForm);
      setEditingHeroId(null);
    } else {
      addHero(heroForm);
    }

    setHeroForm({ title: "", subtitle: "", ctaText: "", ctaLink: "", image: "" });
    setHeroPreview(null);
  };

  const handleHeroEdit = (hero) => {
    setHeroForm(hero);
    setHeroPreview(hero.image);
    setEditingHeroId(hero.id);
  };

  // ---------- Product Form ----------
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // local preview
      setForm((prev) => ({ ...prev, image: imageUrl }));
      setPreview(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) {
      alert("Please fill in product name, price, and image.");
      return;
    }

    if (editingId) {
      updateProduct(editingId, form);
      setEditingId(null);
    } else {
      addProduct(form);
    }

    setForm({ name: "", price: "", image: "", description: "" });
    setPreview(null);
  };

  const handleEdit = (product) => {
    setForm(product);
    setPreview(product.image);
    setEditingId(product.id);
  };

  return (
    <div className="p-6 space-y-10">
      {/* ✅ Hero Management */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Hero Banner</h2>

        <form onSubmit={handleHeroSubmit} className="grid gap-4 mb-8">
          <input
            type="text"
            name="title"
            value={heroForm.title}
            onChange={handleHeroChange}
            placeholder="Hero Title"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="subtitle"
            value={heroForm.subtitle}
            onChange={handleHeroChange}
            placeholder="Hero Subtitle"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="ctaText"
            value={heroForm.ctaText}
            onChange={handleHeroChange}
            placeholder="CTA Button Text"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="ctaLink"
            value={heroForm.ctaLink}
            onChange={handleHeroChange}
            placeholder="CTA Button Link"
            className="p-2 border rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleHeroFileChange}
            className="p-2 border rounded"
          />

          {heroPreview && (
            <img
              src={heroPreview}
              alt="Hero Preview"
              className="w-full max-h-64 object-scale-down rounded border"
            />
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {editingHeroId ? "Update Hero" : "Add Hero"}
          </button>
        </form>

        {heroes.length === 0 ? (
          <p className="text-gray-500">No heroes yet. Add one above.</p>
        ) : (
          <div className="grid gap-4">
            {heroes.map((h) => (
              <div
                key={h.id}
                className="bg-gray-50 border rounded-lg shadow-sm flex items-center p-4 gap-4"
              >
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-32 h-20 object-scale-down rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold">{h.title}</h3>
                  <p className="text-sm text-gray-600">{h.subtitle}</p>
                </div>
                <button
                  onClick={() => handleHeroEdit(h)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteHero(h.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Product Management */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-2xl font-bold mb-6">Manage Products</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-2 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-2 border rounded md:col-span-2"
          />
          {preview && (
            <img
              src={preview}
              alt="Product Preview"
              className="w-32 h-32 object-scale-down rounded border md:col-span-2"
            />
          )}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="p-2 border rounded md:col-span-2"
            rows="3"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded col-span-1 md:col-span-2"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </form>

        {products.length === 0 ? (
          <p className="text-gray-500">No products yet. Add one above.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-gray-50 border rounded-lg shadow-sm overflow-hidden flex flex-col"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-scale-down rounded-b-none"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {p.description || "No description"}
                  </p>
                  <p className="text-green-600 font-bold mb-4">
                    ₦{Number(p.price).toLocaleString()}
                  </p>
                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(p.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
