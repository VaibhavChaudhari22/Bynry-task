


import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("profiles", JSON.stringify(data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        form.address
      )}.json?access_token=env`
    );
    const data = await response.json();
    const [lng, lat] = data.features?.[0]?.center || [];

    if (!lat || !lng) {
      alert("Invalid address or location not found.");
      return;
    }

    const profileData = {
      ...form,
      lat,
      lng,
      id: editId || uuidv4(),
    };

    const updated = editId
      ? profiles.map((p) => (p.id === editId ? profileData : p))
      : [...profiles, profileData];

    setProfiles(updated);
    saveToLocalStorage(updated);
    setForm({ name: "", photo: "", description: "", address: "" });
    setEditId(null);
  };

  const handleEdit = (profile) => {
    setForm({
      name: profile.name,
      photo: profile.photo,
      description: profile.description,
      address: profile.address,
    });
    setEditId(profile.id);
  };

  const handleDelete = (id) => {
    const updated = profiles.filter((p) => p.id !== id);
    setProfiles(updated);
    saveToLocalStorage(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{editId ? "Edit Profile" : "Add Profile"}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="photo"
            placeholder="Photo URL"
            value={form.photo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {editId ? "Update Profile" : "Add Profile"}
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Saved Profiles</h2>
        <div className="grid gap-4">
          {profiles.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
            >
              <img
                src={p.photo || "https://via.placeholder.com/80"}
                alt={p.name}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/80?text=No+Image";
                }}
                className="w-20 h-20 rounded object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-700">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.description}</p>
                <p className="text-sm text-gray-500">{p.address}</p>
                <div className="mt-2 space-x-3">
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {profiles.length === 0 && (
            <p className="text-gray-600 text-center">No profiles added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
