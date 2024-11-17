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
  const carMarca = Marca || "N/A";
  const carMatricula = Matricula || "N/A";
  const carCor = Cor || "N/A";
  const carKm = Km || "N/A";
  const carPreço = Preço || "N/A";
  const carEstado = Estado || "N/A";
  const carCilindrada = Cilindrada || "N/A";
  const carCombustivel = Combustivel || "N/A";
  const carCaixa = Caixa || "N/A";
  const carPotencia = Potencia || "N/A";
  const carPeso = Peso || "N/A";
  const carNumeroPortas = NumeroPortas || "N/A";

  return (
    <div className="flex flex-col items-stretch justify-start w-full gap-3 p-4 transition-shadow bg-white border border-gray-300 rounded-lg shadow-md md:flex-row hover:shadow-lg">
      <div className="flex items-center justify-start gap-4 mb-4 md:justify-center md:w-1/4 md:mb-0">
        <div className=" sm:w-[25%] md:w-full md:flex justify-start items-start  ">
          <Link to={`/search?main=${search[0]}&sub=${search[1]}&carId=${ID}`}>
            <img
              src={carImage}
              alt="Car Thumbnail"
              className="object-cover w-40 h-40 rounded-lg shadow-sm cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between w-1/2">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col flex-1 mb-5 sm:hidden sm:mb-0">
              <span className="lg:lg:text-sm  text-[14px] font-semibold text-gray-500 text-left">
                Marca
              </span>
              <span className="lg:lg:text-lg  text-[18px] font-medium text-gray-800 text-left">
                {carMarca}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="md:hidden flex flex-col w-[20%] mb-2 sm:mb-0">
              <button onClick={() => handleCarIconClick("qr")}>
                <img
                  src="/Icons_Car_menus/qr.png"
                  className="w-[30px]"
                  alt="qr"
                />
              </button>
            </div>
            <div className="md:hidden flex flex-col w-[20%] mb-2 sm:mb-0">
              <button
                onClick={() => handleCarIconClick("car-insurance_11442647")}
              >
                <img
                  src="/Icons_Car_menus/car-insurance_11442647.png"
                  className="w-[30px]"
                  alt="car-insurance_11442647"
                />
              </button>
            </div>
            <div className="md:hidden flex flex-col w-[20%] mb-2 sm:mb-0">
              <button onClick={() => handleCarIconClick("NovoContrato")}>
                <img
                  src="/Icons_Car_menus/NovoContrato.png"
                  className="w-[30px]"
                  alt="NovoContrato"
                />
              </button>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 md:w-3/4">
        {/* Car Details (Priority ordered) */}
        <div className="flex flex-wrap items-start justify-between gap-2 sm:items-center">
          <div className="hidden md:flex flex-col w-[10%] mb-2 sm:mb-0">
            <button onClick={() => handleCarIconClick("NovoContrato")}>
              <img
                src="/Icons_Car_menus/NovoContrato.png"
                className="w-[30px]"
                alt="NovoContrato"
              />
            </button>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Modelo</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carModelo}
            </span>
          </div>
          <div className="flex-col flex-1 hidden mb-2 sm:flex sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Marca</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carMarca}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">
              Matrícula
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carMatricula}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Preço</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carPreço} €
            </span>
          </div>
        </div>

        {/* Additional Details */}
        <div className="flex flex-wrap items-start justify-between gap-2 sm:items-center">
          <div className="hidden md:flex flex-col w-[10%] mb-2 sm:mb-0">
            <button onClick={() => handleCarIconClick("NovoContrato")}>
              <img
                src="/Icons_Car_menus/NovoContrato.png"
                className="w-[30px]"
                alt="NovoContrato"
              />
            </button>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Cor</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">{carCor}</span>
          </div>
          <div className="flex-col flex-1 hidden mb-2 sm:flex sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">
              Cilindrada
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carCilindrada}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">
              Combustível
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carCombustivel}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Estado</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carEstado}
            </span>
          </div>
        </div>

        {/* Technical Info */}
        <div className="flex flex-wrap items-start justify-between gap-2 sm:items-center">
          <div className="hidden md:flex flex-col w-[10%] mb-2 sm:mb-0">
            <button
              onClick={() => handleCarIconClick("car-insurance_11442647")}
            >
              <img
                src="/Icons_Car_menus/car-insurance_11442647.png"
                className="w-[30px]"
                alt="car-insurance_11442647"
              />
            </button>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Km</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">{carKm}</span>
          </div>
          <div className="flex-col flex-1 hidden mb-2 sm:flex sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">
              Potência
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carPotencia}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Peso</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">{carPeso}</span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500">Caixa</span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800">
              {carCaixa}
            </span>
          </div>
        </div>

        {/* Checkboxes Section */}
        <div className="flex-wrap items-start justify-between hidden sm:flex sm:items-center">
          <div className=" hidden md:flex flex-col w-[10%] mb-2 sm:mb-0">
            <button onClick={() => handleCarIconClick("qr")}>
              <img
                src="/Icons_Car_menus/qr.png"
                className="w-[30px]"
                alt="qr"
              />
            </button>
          </div>
          <div className="flex items-center">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">Fechado:</span>
            <input type="checkbox" readOnly checked={Fechado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">Emprestado:</span>
            <input type="checkbox" readOnly checked={Emprestado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">Consignado:</span>
            <input type="checkbox" readOnly checked={Consignado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">Seguro:</span>
            <input type="checkbox" readOnly checked={Seguro || false} />
          </div>
        </div>
            <div className="flex flex-wrap items-start justify-start sm:hidden">
          {Emprestado && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:lg:text-sm text-[14px] text-gray-600">
                Emprestado:
              </span>
              <input type="checkbox" readOnly checked={Emprestado || false} />
            </div>
          )}
          {Fechado && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:lg:text-sm text-[14px] text-gray-600">
                Fechado:
              </span>
              <input type="checkbox" readOnly checked={Fechado || false} />
            </div>
          )}
          {Consignado && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:lg:text-sm text-[14px] text-gray-600">
                Consignado:
              </span>
              <input type="checkbox" readOnly checked={Consignado || false} />
            </div>
          )}
          {Seguro && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:lg:text-sm text-[14px] text-gray-600">
                Seguro:
              </span>
              <input type="checkbox" readOnly checked={Seguro || false} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
