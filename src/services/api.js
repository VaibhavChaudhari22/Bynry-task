export const fetchProfiles = async () => {
  const res = await fetch("/data/profiles.json");
  return await res.json();
};