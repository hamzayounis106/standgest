import React, { useEffect, useState } from "react";
import UseSearchCarByFilter from "../Components/Hooks/UseSearchCarByFilter";
import { Audio } from "react-loader-spinner";
import SingleCarInSearch from "../Components/MainPageComponents/SingleCarInSearch";
import SearchBar from "../Components/MainPageComponents/SearchBar";
import AllMainPageCarSectionTabs from "../Components/MainPageComponents/AllMainPageCarSectionTabs";
import UseSearchCar from "../Components/Hooks/UseSearchCar";
import SingleCarInSearchTypeTwo from "../Components/MainPageComponents/SingleCarInSearchTypeTwo";

export default function Cars({ estado, searchQuery }) {
  const [cars, setCars] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const {
    data: searchedCar,
    isLoading: searchLoading,
    isSuccess: searchSuccess,
    isError: searchError,
  } = UseSearchCar(query, { retry: 1 });

  const {
    data: carsData,
    isLoading: filterLoading,
    isError: filterError,
    error: filterErrorMessage,
    isFetched,
    isSuccess: filterSuccess,
  } = UseSearchCarByFilter(estado, estado === 5 ? 1 : 0, { retry: 1 });

  useEffect(() => {
    if (query && query !== "") {
      if (searchSuccess) {
        setCars(searchedCar.data);
      }
    } else if (isFetched && filterSuccess && carsData) {
      setCars(carsData.data);
    }
  }, [
    query,
    searchedCar,
    searchSuccess,
    carsData,
    isFetched,
    filterSuccess,
    estado,
  ]);

  useEffect(() => {
    if(!cars) return;
    if(Array.isArray(cars)){

      if (cars.length > 0) {
  
        setCars(cars);
      }
    }
  }, [cars]);

  return (
    <>
   
      <AllMainPageCarSectionTabs />
      {searchLoading || filterLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Audio
            height="50"
            width="80"
            radius="9"
            color="#ce5d00"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : searchError || filterError ? (
        <div>{filterErrorMessage}</div>
      ) : (
        <div className="flex flex-col items-start justify-center w-full gap-5 p-3">
          {Array.isArray(cars) && cars.length > 0 && !query ? (
            cars.map((car, index) => (
              <SingleCarInSearch car={car} key={index} />
            ))
          ) : Array.isArray(cars) && cars.length > 0 && query ? (
            cars.map((car, index) => (
              <SingleCarInSearchTypeTwo car={car} key={index} />
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-[50vh]">
              <p className="text-lg text-[#ce5d00] font-semibold">
                No Cars Found
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
