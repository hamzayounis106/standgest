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
  const carMarca = Marca || "Unknown Brand";
  const carMatricula = Matricula || "Not Specified";
  const carMatriculaSecundaria = MatriculaSecundaria || "-";
  const carFinalPrice = Preçofinal || "Price Unavailable";
  const carPontoDeVenda = PontoDeVenda || "Unknown";

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
        {/* Section 1 */}
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
            <span className="text-sm font-semibold text-gray-500">
              Preço Final
            </span>
            <span className="text-lg font-medium text-gray-800">
              {carFinalPrice}
            </span>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Km</span>
            <span className="text-lg font-medium text-gray-800">
              {Km || "N/A"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">Lucro</span>
            <span
              className={`text-lg font-medium ${
                Lucro > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {Lucro || "N/A"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Ponto de Venda
            </span>
            <span className="text-lg font-medium text-gray-800">
              {carPontoDeVenda}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500">
              Days Since Entry
            </span>
            <span className="text-lg font-medium text-gray-800">
              {DaysSinceEntry || "-"}
            </span>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Emprestado:</span>
            <input type="checkbox" readOnly checked={Emprestado || false} />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Fechado:</span>
            <input type="checkbox" readOnly checked={Fechado || false} />
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
