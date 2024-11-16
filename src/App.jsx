import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import Login from "./Pages/Login";
import SingleCar from "./Pages/SingleCarPage";
import Search from "./Pages/Search";
import Sidebar from "./Components/Sidebar";
import UseGetCarById from "./Components/Hooks/UseGetCarById";

export default function App() {
  const [search, setSearch] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    data: car,
    status: authStatus,
    isSuccess: isAuthSuccess,
    isLoading: authLoading,
    error: authError,
  } = UseGetCarById(1, { retry: 0 });

  useEffect(() => {
    
    if (location.pathname === "/") return;
    if (authLoading) return;

    if (!car && !authLoading) {
        console.log("Navigating to login");
      navigate("/");
      return;
    }
    if (!location.pathname === "/search") return;
    const queryParams = new URLSearchParams(location.search);
    const main = queryParams.get("main");
    const sub = queryParams.get("sub");
    const estado = queryParams.get("estado");
    const searchQuery = queryParams.get("searchQuery");
    console.log("location.pathname", location.search);
    if (main && sub) {
      console.log(search)
      console.log(" Setting search", main, sub, estado, searchQuery);
      setSearch([main, sub, estado, searchQuery]);
    } else {
      if (!main && !sub && !estado && car) {
        console.log("Navigating to default search");
        navigate(`/search?main=Gestão&sub=Viaturas&estado=1&closed=0`);
        setSearch(["Gestão", "Viaturas"]);
      }
    }
  }, [location, navigate, car, authLoading]);

  const handleNavigateToSearch = (main, sub) => {
    console.log("Navigating to search", main, sub);
    navigate(
      `/search?main=${main.replaceAll(" ", "-")}&sub=${sub.replaceAll(
        " ",
        "-"
      )}`
    );
  };

 
  if (authLoading && !car) {
    return (
      <div className="flex flex-col bg-[#091d2c] items-center justify-center gap-1 absolute h-full w-full">
        <img src="/logo.png" className="w-[370px]" alt="StandGest" />
        <Audio
          height="50"
          width="80"
          radius="9"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
  if (!authLoading) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/search"
            element={
              <div className="flex items-center justify-between w-full h-screen">
                <div className="w-[18%] bg-[#091d2c] h-full overflow-auto pb-2">
                  <Sidebar
                    handleButtonClick={handleNavigateToSearch}
                    activeSearch={search}
                  />
                </div>
                <div className="w-[82%] h-full overflow-auto">
                  {/* Conditional rendering based on query parameters */}
                  {location.search.includes("carId") ? (
                    <SingleCar />
                  ) : (
                 
                      <Search search={search} />
                 
                  )}
                </div>
              </div>
            }
          />
        </Routes>
      </>
    );
  }
}
