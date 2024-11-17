import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { MdMenu } from "react-icons/md";
import { SidebarNavigationsContent } from "../../App";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleSidebarState = useContext(SidebarNavigationsContent);

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
    <div className="flex w-full p-4 justify-between gap-4 lg:justify-start items-center bg-[#091d2c]">
        <MdMenu
          className=" cursor-pointer text-3xl text-[#cc5d00] lg:hidden"
          onClick={handleSidebarState}
        />
      <div className="relative flex justify-between gap-10 items-center w-[90%] sm:w-[80%]">
        {/* Icon on the left */}
      
        <input
          type="text"
          className="w-full bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc5d00] focus:border-transparent py-1 px-2 pl-5"
          placeholder="Modelo de pesquisa"
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
