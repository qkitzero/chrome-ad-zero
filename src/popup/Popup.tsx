export const Popup = () => {
  return (
    <div className="p-6 min-w-64 bg-white rounded-2xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Adfuuin</h1>

      <h2 className="text-lg font-semibold text-gray-600">Supported Services</h2>

      <ul className="space-y-2">
        <li className="px-3 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition">YouTube</li>
        <li className="px-3 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition">Twitch</li>
        <li className="px-3 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition">Spotify</li>
      </ul>
    </div>
  );
};
