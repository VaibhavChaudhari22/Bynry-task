import { Link } from "react-router-dom";

function ProfileCard({ profile, onSummary }) {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <img src={profile.photo} alt={profile.name} className="w-24 h-24 rounded-full mb-2" />
      <h3 className="text-xl font-bold">{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onSummary(profile)} className="bg-blue-500 text-white px-2 py-1 mt-2">Summary</button>
      <Link to={`/profile/${profile.id}`} className="ml-4 text-blue-700 underline">View Details</Link>
    </div>
  );
}

export default ProfileCard;
