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
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-lg text-[#ce5d00] font-semibold">No Cars Found</p>
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
