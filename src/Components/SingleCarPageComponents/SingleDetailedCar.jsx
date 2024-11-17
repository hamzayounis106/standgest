import React from "react";

export default function SingleDetailedCar({ car }) {
  const isImageUrl = (url) => {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
  };
  const handleCarIconClick = (icon) => {
    console.log(icon);
  };
  const carImage = isImageUrl(car.bucketurl)
    ? car.bucketurl
    : "/placeholder_car_image.jpg";
  return (
    <div className="max-w-screen-xl p-6 mx-auto bg-white rounded-lg">
      <div className="flex flex-col items-start justify-start gap-6 md:flex-row">
        {/* Car Image */}
        <div className="w-full md:w-[40%] flex justify-start flex-col">
          <img
            src={carImage}
            alt={`${car.Marca || ""} ${car.Modelo || ""}`}
            className="w-full rounded-lg "
          />
          <div className="flex justify-center gap-10 sm:gap-10 sm:justify-start mt-7">
            <button onClick={() => handleCarIconClick("NovoContrato")}>
              <img
                src="/Icons_Car_menus/NovoContrato.png"
                className="w-[40px]"
                alt="NovoContrato"
              />
            </button>
            <button onClick={() => handleCarIconClick("Editar")}>
              <img
                src="/Icons_Car_menus/Editar.png"
                className="w-[40px]"
                alt="Editar"
              />
            </button>
            <button
              onClick={() => handleCarIconClick("car-insurance_11442647")}
            >
              <img
                src="/Icons_Car_menus/car-insurance_11442647.png"
                className="w-[40px]"
                alt="car-insurance_11442647"
              />
            </button>
          </div>
        </div>

        {/* Car Details */}
        <div className="w-full md:w-[60%]">
          <div className="flex flex-wrap gap-4">
            {/* Left Side: Car Attributes */}
            <div className="w-full sm:w-[48%] p-4 bg-[#f3f3f3] rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#071e2b] mb-3">
                Car Details
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Cilindrada</td>
                    <td className="text-[#666]">{car.Cilindrada || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Valor Selo</td>
                    <td className="text-[#666]">{car.ValorSelo || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Segmento</td>
                    <td className="text-[#666]">{car.Subsegmento || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Peso</td>
                    <td className="text-[#666]">
                      {car.Peso ? car.Peso : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Val. Insp.</td>
                    <td className="text-[#666]">{car.ValInsp || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Portas</td>
                    <td className="text-[#666]">{car.NumeroPortas || "0"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Right Side: Additional Information */}
            <div className="w-full sm:w-[48%] p-4 bg-[#f3f3f3] rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#071e2b] mb-3">
                Additional Info
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Motor</td>
                    <td className="text-[#666]">{car.Motor || "N/A"}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Data Fecho</td>
                  </tr>
                  <tr>
                    <td className=" text-[#071e2b]">Emprestado</td>
                    <td>
                      <input
                        type="radio"
                        readOnly
                        checked={car.Emprestado || false}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className=" text-[#071e2b]">Seguro Ath</td>
                    <td>
                      <input
                        type="radio"
                        readOnly
                        checked={car.SeguroAth || false}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-[#071e2b]">Estado</td>
                    <td className="text-[#666]">{car.Estado || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Observations */}
          <div className="w-full p-4 mt-6 bg-[#f3f3f3] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#071e2b] mb-3">
              Observações
            </h3>
            <p className="text-[#666]">
              {car.Observacoes || "No observations available."}
            </p>
          </div>

          {/* Additional Car Information Section */}
          <div className="w-full p-4 mt-6 bg-[#f3f3f3] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#071e2b] mb-3">
              Additional Car Information
            </h3>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-semibold text-[#071e2b]">ClienteID</td>
                  <td className="text-[#666]">{car.ClienteID || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Matricula</td>
                  <td className="text-[#666]">{car.Matricula || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">
                    Matricula Secundária
                  </td>
                  <td className="text-[#666]">
                    {car.MatriculaSecundaria || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Marca</td>
                  <td className="text-[#666]">{car.Marca || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Modelo</td>
                  <td className="text-[#666]">{car.Modelo || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Versão</td>
                  <td className="text-[#666]">{car.Versao || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Preço</td>
                  <td className="text-[#666]">
                    {car.Preço ? `€${car.Preço}` : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Kilometragem</td>
                  <td className="text-[#666]">{car.Km || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">
                    Fornecedor Nome
                  </td>
                  <td className="text-[#666]">{car.FornecedorNome || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Combustível</td>
                  <td className="text-[#666]">{car.Combustivel || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-[#071e2b]">Cor</td>
                  <td className="text-[#666]">{car.Cor || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
