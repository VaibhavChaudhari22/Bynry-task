

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Meet Our People</h1>
        <p className="text-gray-600">Explore profiles and discover where they’re from</p>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <SearchFilter value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProfiles.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full">No profiles found.</p>
        ) : (
          filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{profile.description}</p>
                <Link to={`/profile/${profile.id}`}>View Details</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
