function SearchFilter({ value, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="🔍 Search by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
      />
    </div>
  );
}

export default SearchFilter;
