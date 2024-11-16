import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

// In SearchBar component
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleSearch = () => {
    if (query === "") return;

    const searchParams = new URLSearchParams(location.search);

    searchParams.set("searchQuery", query);

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const querySearch = searchParams.get("searchQuery");
    if (querySearch) {
      setQuery(querySearch);
    } else {
      setQuery("");
    }
  }, [location]);

  return (
    <div className="flex w-full p-4 justify-start items-center bg-[#091d2c]">
      <div className="relative w-[80%]">
        <input
          type="text"
          className="w-full bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc5d00] focus:border-transparent py-1 px-2 pl-5"
          placeholder="Pesquise por Marca de carro, como Audi, BMW, etc..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <FaSearch
          onClick={handleSearch}
          className="absolute right-3 cursor-pointer top-1/2 transform -translate-y-1/2 text-[#cc5d00]"
        />
      </div>
    </div>
  );
}
