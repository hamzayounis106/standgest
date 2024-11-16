import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HandleNavigateToCar } from "../../Pages/Search";
export default function SingleCarInSearchTypeTwo({ car }) {
  const search = useContext(HandleNavigateToCar);
  const {
    Modelo,
    Marca,
    Matricula,
    Km,
    Preço,
    Cor,
    Cilindrada,
    Combustivel,
    Caixa,
    Fechado,
    Emprestado,
    Consignado,
    Estado,
    Peso,
    Potencia,
    NumeroPortas,
    Seguro,
    bucketurl,
    ID,
  } = car;

  const isImageUrl = (url) => {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
  };

  const carImage = isImageUrl(bucketurl)
    ? bucketurl
    : "/placeholder_car_image.jpg";

  const carModelo = Modelo || "N/A";
  const carMarca = Marca || "Unknown Brand";
  const carMatricula = Matricula || "Not Specified";
  const carCor = Cor || "N/A";
  const carKm = Km || "N/A";
  const carPreço = Preço || "Price Unavailable";
  const carEstado = Estado || "N/A";
  const carCilindrada = Cilindrada || "N/A";
  const carCombustivel = Combustivel || "N/A";
  const carCaixa = Caixa || "N/A";
  const carPotencia = Potencia || "N/A";
  const carPeso = Peso || "N/A";
  const carNumeroPortas = NumeroPortas || "N/A";

  return (
    <div className="flex flex-col items-stretch justify-start w-full p-4 transition-shadow bg-white border border-gray-300 rounded-lg shadow-md gap-3 md:flex-row hover:shadow-lg">
      <div className="flex items-center justify-center w-full mb-4 md:w-1/4 md:mb-0">
        <Link to={`/search?main=${search[0]}&sub=${search[1]}&carId=${ID}`}>
          <img
            src={carImage}
            alt="Car Thumbnail"
            className="object-cover w-40 h-40 rounded-lg shadow-sm cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between  items-center mr-2">
        <button onClick={() => handleCarIconClick("NovoContrato")}>
          <img
            src="/Icons_Car_menus/NovoContrato.png"
            className="w-[30px]"
            alt="NovoContrato"
          />
        </button>
        <button onClick={() => handleCarIconClick("car-insurance_11442647")}>
          <img
            src="/Icons_Car_menus/car-insurance_11442647.png"
            className="w-[30px]"
            alt="car-insurance_11442647"
          />
        </button>
        <button onClick={() => handleCarIconClick("qr")}>
          <img src="/Icons_Car_menus/qr.png" className="w-[30px]" alt="qr" />
        </button>
      </div>
      <div className="flex flex-col w-full gap-4 md:w-3/4">
        {/* Car Details (Priority ordered) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Modelo</span>
            <span className="text-lg font-medium text-gray-800">
              {carModelo}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Marca</span>
            <span className="text-lg font-medium text-gray-800">
              {carMarca}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Matrícula
            </span>
            <span className="text-lg font-medium text-gray-800">
              {carMatricula}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Preço</span>
            <span className="text-lg font-medium text-gray-800">
              {carPreço} €
            </span>
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Cor</span>
            <span className="text-lg font-medium text-gray-800">{carCor}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Cilindrada
            </span>
            <span className="text-lg font-medium text-gray-800">
              {carCilindrada}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Combustível
            </span>
            <span className="text-lg font-medium text-gray-800">
              {carCombustivel}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Estado</span>
            <span className="text-lg font-medium text-gray-800">
              {carEstado}
            </span>
          </div>
        </div>

        {/* Technical Info */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Km</span>
            <span className="text-lg font-medium text-gray-800">{carKm}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Potência
            </span>
            <span className="text-lg font-medium text-gray-800">
              {carPotencia}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Peso</span>
            <span className="text-lg font-medium text-gray-800">{carPeso}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Caixa</span>
            <span className="text-lg font-medium text-gray-800">
              {carCaixa}
            </span>
          </div>
        </div>

        {/* Checkboxes Section */}
        <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Fechado:</span>
            <input type="checkbox" readOnly checked={Fechado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Emprestado:</span>
            <input type="checkbox" readOnly checked={Emprestado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Consignado:</span>
            <input type="checkbox" readOnly checked={Consignado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Seguro:</span>
            <input type="checkbox" readOnly checked={Seguro || false} />
          </div>
        </div>
      </div>
    </div>
  );
}
