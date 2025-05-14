

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MapView from "../components/MapView";

function ProfileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const foundProfile = storedProfiles.find((p) => p.id === id);
    setProfile(foundProfile);
  }, [id]);

  if (!profile) {
    return (
      <div className="text-center text-red-500 mt-16">
        <p className="text-xl font-semibold">Profile not found</p>
        <button
          onClick={() => navigate("/admin")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Go Back to Admin
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 font-medium hover:underline mb-6 inline-block"
        >
          ← Back
        </button>

        <div className="flex flex-col items-center text-center">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-32 h-32 rounded-full border-4 border-purple-300 shadow-lg mb-4 object-cover"
          />

          <h2 className="text-3xl font-bold text-gray-800 mb-2">{profile.name}</h2>
          <p className="text-gray-600 mb-4">{profile.description}</p>

          <div className="w-full mb-4 text-left">
            <p className="font-semibold text-gray-800">Address:</p>
            <p className="text-gray-700">{profile.address || "N/A"}</p>
          </div>

          {profile.lat && profile.lng ? (
            <MapView lat={profile.lat} lng={profile.lng} />
          ) : (
            <p className="text-sm text-red-500 mt-4">No map location available.</p>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          {/* <button
            onClick={() => navigate("/admin")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            Go Back to Admin
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;

