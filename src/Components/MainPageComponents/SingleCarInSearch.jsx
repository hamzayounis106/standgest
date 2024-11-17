import React from "react";
import { useContext } from "react";
import { HandleNavigateToCar } from "../../Pages/Search";
import { Link } from "react-router-dom";

export default function SingleCarInSearch({ car }) {
  const search = useContext(HandleNavigateToCar);

  const {
    Modelo,
    Marca,
    Matricula,
    MatriculaSecundaria,
    Km,
    Preçofinal,
    Lucro,
    PontoDeVenda,
    Seguro,
    Emprestado,
    Fechado,
    Consignado,
    DaysSinceEntry,
    ID,
    bucketURL,
  } = car;

  const isImageUrl = (url) => {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
  };
  const handleCarIconClick = (iconName) => {
    console.log(`Icon clicked: ${iconName}`);
  };
  const carImage = isImageUrl(bucketURL)
    ? bucketURL
    : "/placeholder_car_image.jpg";

  const carModelo = Modelo || "N/A";
  const carMarca = Marca || "N/A";
  const carMatricula = Matricula || "N/A";
  const carMatriculaSecundaria = MatriculaSecundaria || "-";
  const carFinalPrice = Preçofinal || "N/A";
  const carPontoDeVenda = PontoDeVenda || "N/A";

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
              <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
                Marca
              </span>
              <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
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

      <div className="flex flex-col w-full gap-y-4 md:gap-y-10 lg:gap-4 md:w-3/4">
        {/* Section 1 */}
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
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Modelo
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {carModelo}
            </span>
          </div>
          <div className="flex-col flex-1 hidden mb-2 sm:flex sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Marca
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {carMarca}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Matrícula
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {carMatricula}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Preço Final
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {carFinalPrice}
            </span>
          </div>
        </div>

        {/* Section 2 */}
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
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Km
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {Km || "N/A"}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Lucro
            </span>
            <span
              className={`lg:text-lg text-[18px] text-left font-medium ${
                Lucro > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {Lucro || "N/A"}
            </span>
          </div>
          <div className="flex flex-col flex-1 mb-2 sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Ponto de Venda
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {carPontoDeVenda}
            </span>
          </div>
          <div className="flex-col flex-1 hidden mb-2 sm:flex sm:mb-0">
            <span className="lg:text-sm text-[14px] font-semibold text-gray-500 text-left">
              Days Since Entry
            </span>
            <span className="lg:text-lg text-[18px] font-medium text-gray-800 text-left">
              {DaysSinceEntry || "-"}
            </span>
          </div>
        </div>

        {/* Section 3 */}
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
          <div className="flex items-center flex-1 mb-2 sm:mb-0">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
              Emprestado:
            </span>
            <input type="checkbox" readOnly checked={Emprestado || false} />
          </div>
          <div className="flex items-center flex-1 mb-2 sm:mb-0">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
              Fechado:
            </span>
            <input type="checkbox" readOnly checked={Fechado || false} />
          </div>
          <div className="flex items-center flex-1 mb-2 sm:mb-0">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
              Consignado:
            </span>
            <input type="checkbox" readOnly checked={Consignado || false} />
          </div>
          <div className="flex items-center flex-1 mb-2 sm:mb-0">
            <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
              Seguro:
            </span>
            <input type="checkbox" readOnly checked={Seguro || false} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between sm:hidden">
          {Emprestado && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
                Emprestado:
              </span>
              <input type="checkbox" readOnly checked={Emprestado || false} />
            </div>
          )}
          {Fechado && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
                Fechado:
              </span>
              <input type="checkbox" readOnly checked={Fechado || false} />
            </div>
          )}
          {Consignado && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
                Consignado:
              </span>
              <input type="checkbox" readOnly checked={Consignado || false} />
            </div>
          )}
          {Seguro && (
            <div className="flex items-center flex-1 mb-2 sm:mb-0">
              <span className="mr-2 lg:text-sm text-[14px] text-gray-600">
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
