import Cars from "./Cars";

import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/MainPageComponents/SearchBar";
export const HandleNavigateToCar = createContext();
export const NavigateContext = createContext();
export default function Search({ search }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      search[0] === "Gestão" &&
      search[1] === "Viaturas" &&
      !search[2] &&
      location.search.includes("main=Gest%C3%A3o&sub=Viaturas")
    ) {
      navigate(`/search?main=Gestão&sub=Viaturas&estado=1&closed=0`);
      return;
    }
  }, [search, navigate, location]);

  const navigateToTab = (tab) => {
    navigate(
      `/search?main=Gestão&sub=Viaturas&estado=${tab}&closed=${
        tab === 5 ? 1 : 0
      }`
    );
    return;
  };

  return (
    <>
      <div className="w-[100%]  h-full overflow-auto">
        {search[0] === "Gestão" && search[1] === "Viaturas" ? (
          <HandleNavigateToCar.Provider value={search}>
            <NavigateContext.Provider value={navigateToTab}>
              <SearchBar />
              <Cars estado={search[2]} searchQuery={search[3]} />
            </NavigateContext.Provider>
          </HandleNavigateToCar.Provider>
        ) : (
          <>
            <SearchBar />
            <div className="flex flex-col items-center justify-center w-full h-full p-6 rounded-lg shadow-md bg-gray-50">
              <p className="flex items-center gap-2 mb-4 text-xl font-semibold text-orange-500 md:text-2xl">
                <span className="bg-[#ce5d00] text-white px-2 py-1 rounded-md">
                  {search[0]}
                </span>
                <span className="text-gray-600">{">"}</span>
                <span className="text-[#ce5d00]">{search[1]}</span>
              </p>
              <p className="mt-2 text-lg text-gray-700">🚀 Coming Soon!</p>
              <p className="mt-1 text-sm text-center text-gray-500">
                Stay tuned! This feature will be available shortly.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
