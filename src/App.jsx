import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import Login from "./Pages/Login";
import SingleCar from "./Pages/SingleCarPage";
import Search from "./Pages/Search";
import Sidebar from "./Components/Sidebar";
import UseGetCarById from "./Components/Hooks/UseGetCarById";
import NotFound from "./Pages/NotFound";

export const SidebarNavigationsContent = createContext(null);

export default function App() {
  const [search, setSearch] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarState = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const {
    data: car,
    status: authStatus,
    isSuccess: isAuthSuccess,
    isLoading: authLoading,
    error: authError,
  } = UseGetCarById(1, { retry: 0 });

  useEffect(() => {
    setIsSidebarOpen(false);
    if (location.pathname === "/") return;
    if (authLoading) return;

    if (!car && !authLoading) {
      console.error("Navigating to login");
      navigate("/");
      return;
    }
    if (!location.pathname === "/search") return;
    const queryParams = new URLSearchParams(location.search);
    const main = queryParams.get("main");
    const sub = queryParams.get("sub");
    const estado = queryParams.get("estado");
    const searchQuery = queryParams.get("searchQuery");

    if (main && sub) {
      setSearch([main, sub, estado, searchQuery]);
    } else {
      if (!main && !sub && !estado && car) {
        navigate(`/search?main=Gestão&sub=Viaturas&estado=1&closed=0`);
        setSearch(["Gestão", "Viaturas"]);
      }
    }
  }, [location, navigate, car, authLoading]);

  if (authLoading && !car) {
    return (
      <div className="flex flex-col bg-[#091d2c] items-center justify-center gap-1 absolute h-full w-full">
        <img
          src="/logo.png"
          className="w-[220px] lg:w-[370px]"
          alt="StandGest"
        />
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
        <SidebarNavigationsContent.Provider value={handleSidebarState}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/search"
              element={
                <div className="flex items-center justify-between w-full h-screen">
                  <div
                    className={`${
                      isSidebarOpen ? "translate-x-0" : "translate-x-[-200%]"
                    } lg:translate-x-0 sm:w-[18%] bg-[#091d2c] transition-all duration-300 ease-in-out h-full absolute lg:relative overflow-auto pb-2 z-[500]`}
                  >
                    <Sidebar activeSearch={search} />
                  </div>
                  <div className="w-full lg:w-[82%] h-full overflow-auto">
                    {location.search.includes("carId") ? (
                      <SingleCar />
                    ) : (
                      <Search search={search} />
                    )}
                  </div>
                </div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarNavigationsContent.Provider>
      </>
    );
  }
}
