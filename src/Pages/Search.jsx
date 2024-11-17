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
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-[#ce5d00]  font-semibold text-xl">
                <span>${search[0]}</span> {">"} {search[1]}
              </p>
              <p>Coming Soon</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
