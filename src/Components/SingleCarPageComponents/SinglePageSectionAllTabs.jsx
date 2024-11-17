import React, { useState } from "react";

export default function SinglePageSectionAllTabs() {
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
    <div className="flex flex-wrap items-center justify-start w-full gap-2 p-2 md:flex-nowrap md:gap-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setTabActive(index + 1)}
          className={`${
            tabActive === index + 1 ? "bg-[#ce5d00]" : "bg-[#091d2c]"
          } text-white p-1 capitalize px-3 rounded-md text-sm md:text-base w-auto text-center`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
