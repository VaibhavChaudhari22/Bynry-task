

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MapView from "./MapView";

function ProfileDetail() {
  const { id } = useParams(); // This is a string
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("profiles")) || [];
    const found = stored.find(p => p.id === id); // Match string with string
    setProfile(found);
  }, [id]);

  if (!profile) return <p className="text-center text-red-500 mt-10">Profile not found</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">← Back</button>
      <h2 className="text-2xl font-bold">{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} className="w-32 h-32 rounded-full my-4" />
      <p className="mb-2">{profile.description}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      <p><strong>Interests:</strong> {profile.interests.join(", ")}</p>
      <div className="mt-4">
        <MapView lat={profile.lat} lng={profile.lng} />
      </div>
    </div>
  );
}

export default ProfileDetail;
