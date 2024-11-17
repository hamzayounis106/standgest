import { useLocation } from "react-router-dom";
import UseGetCarById from "../Components/Hooks/UseGetCarById";
import { useContext, useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import SingleDetailedCar from "../Components/SingleCarPageComponents/SingleDetailedCar";
import SinglePageSectionAllTabs from "../Components/SingleCarPageComponents/SinglePageSectionAllTabs";
import { SidebarNavigationsContent } from "../App";
import SingleCarPageHeader from "../Components/SingleCarPageComponents/SingleCarPageHeader";

function SingleCar() {
  const [car, setCar] = useState(null);
  const handleSidebarState = useContext(SidebarNavigationsContent);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const carId = queryParams.get("carId");

  const { data: fetchedCar, isLoading: fetchedCarLoading } = UseGetCarById(
    carId,
    { retry: 0 }
  );

  useEffect(() => {
    if (fetchedCar && fetchedCar.result) {
      try {
        const parsedResult = JSON.parse(fetchedCar.result);
        if (parsedResult && parsedResult.length > 0) {
         
          setCar(parsedResult[0]);
        }
      } catch (error) {
        console.error("Error parsing fetchedCar.result:", error);
      }
    }
  }, [fetchedCar]);

  if (fetchedCarLoading && !car) {
    return (

      <div className="flex items-center justify-center w-full h-screen">
        <Audio
          height="50"
          width="80"
          radius="9"
          color="#ce5d00"
          ariaLabel="loading"
          />
      </div>
    );
  }

  if (!car) {
 
    return (
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
    );
  }

  return (
   <>
   <SingleCarPageHeader />
   <SinglePageSectionAllTabs />
   <SingleDetailedCar car={car} />
   </>
  );
}

export default SingleCar;
