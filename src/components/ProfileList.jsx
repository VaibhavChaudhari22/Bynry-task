

import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import MapView from "./MapView";
import SearchFilter from "./SearchFilter";

function ProfileList() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [search, setSearch] = useState("");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  const filtered = profiles.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchFilter value={search} onChange={setSearch} />
      {filtered.map(p => (
        <ProfileCard key={p.id} profile={p} onSummary={setSelectedProfile} />
      ))}
      {selectedProfile && <MapView lat={selectedProfile.lat} lng={selectedProfile.lng} />}
    </div>
  );
}

export default ProfileList;
