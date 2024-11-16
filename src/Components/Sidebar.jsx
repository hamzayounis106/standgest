import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // Importing icon
import axios from "axios";

export default function Sidebar({ activeSearch }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/logout",

        {
          withCredentials: true,
        }
      );
      window.location.href = "/";
    } catch (error) {
      console.error("Loging out:", error);
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
    <div className="flex justify-start flex-col items-center gap-2 h-full w-full bg-[#091d2c] px-3 pb-4">
      <div className="fixed p-2 bg-[#091d2c]">
        <Link to="/">
          <img src="/logo.png" className="w-[200px]" alt="StandGest" />
        </Link>
      </div>
      <div className="flex flex-col w-full gap-5 mt-20">
        {buttonsArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start gap-2 text-white"
          >
            <div className="text-[#ce5d00] border-[#ce5d00] border-b-[1px] w-full p-1 font-semibold text-[1.2rem]">
              {item.heading}
            </div>
            {item.buttons.map((button, buttonIndex) => (
              <Link
                key={buttonIndex}
                to={`/search?main=${item.heading.replaceAll(
                  " ",
                  "-"
                )}&sub=${button.replaceAll(" ", "-")}`}
                className={`w-full py-1 pl-6 font-light text-start hover:bg-[#ce5d00] rounded-md ${
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
          className="flex items-start gap-2 mt-auto text-white py-2 px-4 hover:bg-[#ce5d0036] rounded-md mb-2"
        >
          <FaSignOutAlt className="text-orange-500 hover:text-white" />{" "}
          {/* Orange icon */}
          Logout
        </button>
      </div>
    </div>
  );
}
