import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaTimes } from "react-icons/fa"; // Importing cross icon
import axios from "axios";
import { SidebarNavigationsContent } from "../App"; // Adjust the import path as needed

export default function Sidebar({ activeSearch }) {
  const navigate = useNavigate();
  const toggleSidebar = useContext(SidebarNavigationsContent); // Using context

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout", { withCredentials: true });
      window.location.href = "/";
    } catch (error) {
      console.error("Logging out:", error);
      throw error;
    }
  };

  const buttonsArray = [
    {
      heading: "Gestão",
      buttons: ["Viaturas", "Registos", "Processos", "Seguros", "Perícias"],
    },
    {
      heading: "Créditos",
      buttons: ["Gestão Propostas"],
    },
    {
      heading: "Tesouraria",
      buttons: [
        "Movimentos de caixa",
        "Docs. Financeiros",
        "Clientes/ Fornecedores",
      ],
    },
    {
      heading: "Configurações",
      buttons: ["Utilizadores", "pontos de venda", "Sócios", "Relatórios"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start gap-2 h-full w-full bg-[#091d2c] px-3 pb-4 relative">
      {/* Cross Icon (visible under 'lg') */}
      <button
        onClick={toggleSidebar}
        className="absolute block text-white top-2 right-2 lg:hidden"
      >
        <FaTimes className="text-xl lg:text-2xl hover:text-[#ce5d00]" />
      </button>

      {/* Logo (hidden under 'lg') */}
      <div className="p-2 bg-[#091d2c] lg:block hidden fixed">
        <Link to="/">
          <img src="/logo.png" className="w-[150px] lg:w-[200px]" alt="StandGest" />
        </Link>
      </div>

      <div className="flex flex-col w-full gap-4 mt-16 lg:gap-5 lg:mt-20">
        {buttonsArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-1 text-white lg:gap-2"
          >
            <div className="text-[#ce5d00] border-[#ce5d00] border-b-[1px] w-full p-1 text-base lg:font-semibold lg:text-[1.2rem]">
              {item.heading}
            </div>
            {item.buttons.map((button, buttonIndex) => (
              <Link
                key={buttonIndex}
                to={`/search?main=${item.heading.replaceAll(
                  " ",
                  "-"
                )}&sub=${button.replaceAll(" ", "-")}`}
                className={`w-full py-1 pl-4 lg:pl-6 font-light lg:font-normal text-start hover:bg-[#ce5d00] rounded-md ${
                  activeSearch[0] === item.heading && activeSearch[1] === button
                    ? "bg-[#ce5d00]"
                    : ""
                }`}
              >
                {button}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-start w-full mt-2">
        <button
          onClick={handleLogout}
          className="flex items-start gap-1 lg:gap-2 mt-auto text-white py-2 px-3 lg:py-2 lg:px-4 hover:bg-[#ce5d0036] rounded-md mb-2"
        >
          <FaSignOutAlt className="text-orange-500 hover:text-white" /> Logout
        </button>
      </div>
    </div>
  );
}
