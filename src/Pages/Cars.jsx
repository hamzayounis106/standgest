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
    if (!cars) return;
    if (Array.isArray(cars)) {
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
            <div className="flex flex-col items-center justify-center w-full h-[50vh] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mb-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m2 2a9 9 0 11-18 0 9 9 0 0118 0zm-9-7a9 9 0 019 9m-9 0a9 9 0 01-9-9m0 9a9 9 0 019 9"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700">
                No Cars Found
              </p>
              <p className="mt-2 text-sm text-center text-gray-500">
                Try adjusting your search criteria or check back later for new
                cars.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
