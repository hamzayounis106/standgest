import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function SinglePageSectionAllTabs() {
  const location = useLocation();
  const [tabActive, setTabActive] = useState(1);
  const tabs = [
    "dados viatura",
    "anúncios",
    "contactos",
    "documentos",
    "contas",
    "seguros",
    "perícia",
  ];

  return (
    <div className="flex items-center justify-start w-full gap-2 p-2 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${
            tabActive === index + 1 ? "bg-[#ce5d00]" : "bg-[#091d2c]"
          } text-white p-1 capitalize px-3 rounded-md`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
