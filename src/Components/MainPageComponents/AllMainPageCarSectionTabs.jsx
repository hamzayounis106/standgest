import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function AllMainPageCarSectionTabs() {
  const location = useLocation();
  const [tabActive, setTabActive] = useState(0);
  const tabs = [
    "stock",
    "por anunciar",
    "reservado",
    "vendidos (fechados)",
    "vendidos (por fechar)",
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const estado = parseInt(queryParams.get("estado"), 10);
    const query = queryParams.get("searchQuery");
    if (query) {
      setTabActive(0);
      return;
    }
    if (!isNaN(estado)) {
      setTabActive(estado);
    }
  }, [location]);

  return (
    <div className="flex flex-wrap items-center justify-start w-full gap-2 p-2 md:flex-nowrap md:gap-4">
      {tabs.map((tab, index) => (
        <Link
          to={`/search?main=Gestão&sub=Viaturas&estado=${
            index + 1
          }&closed=${index + 1 === 5 ? 1 : 0}`}
          key={index}
          className={`${
            tabActive === index + 1 ? "bg-[#ce5d00]" : "bg-[#091d2c]"
          } text-white p-1 capitalize px-3 rounded-md text-sm md:text-base w-auto text-center`}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
}
