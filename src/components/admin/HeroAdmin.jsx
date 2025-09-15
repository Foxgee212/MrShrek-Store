// components/admin/HeroAdmin.jsx
import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";

function HeroAdmin() {
  const { hero, setHero } = useAdmin();
  const [form, setForm] = useState(hero);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setHero(form);
    alert("Hero section updated!");
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">Hero Banner Settings</h2>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Hero Title"
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="text"
        name="subtitle"
        value={form.subtitle}
        onChange={handleChange}
        placeholder="Hero Subtitle"
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Hero Image URL"
        className="w-full p-2 border rounded mb-3"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Hero Banner
      </button>
    </div>
  );
}

export default HeroAdmin;
