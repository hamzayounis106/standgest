import { useEffect, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import useLogin from "../Components/Hooks/UseLogin";
import UseGetCarById from "../Components/Hooks/UseGetCarById";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";

export default function Login() {
  const { mutate: login, isLoading, isError, error } = useLogin();
  const {
    data: car,
    status: authStatus,
    isSuccess: isAuthSuccess,
    isLoading: authLoading,
  } = UseGetCarById(1, { retry: 0 });

  const [getFormData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...getFormData, [e.target.id]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({
      username: getFormData.username,
      password: getFormData.password,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (authLoading) return;
    if (car) {
      // window.location.href = "/search";
      navigate("/search");
    }
    return;
  }, [authStatus, navigate,location]);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[#091d2c]">
        {authLoading  ? (
          <div className="flex flex-col items-center justify-center gap-1">
            <img src="/logo.png" className="w-[370px]" alt="StandGest" />
            <Audio
              height="50"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : !car && !authLoading   && (
          <>
            <div className="w-[50%] flex justify-center items-center flex-col gap-8">
              <div className="flex flex-col items-center justify-center gap-1 text-center text-white ">
                <img
                  src="/logo.png"
                  className="w-[370px]"
                  alt="StandGest"
                />
                <p className="font-bold capitalize text-[1.2rem]">
                  Bem-vindo de volta
                </p>
                <p className="uppercase text-[0.9rem]">Login para contiuar </p>
              </div>
              <form
                onSubmit={handleLoginSubmit}
                className="flex flex-col items-start w-[45%] justify-center gap-6 text-white"
              >
                <div className="flex flex-col items-start justify-center w-full gap-2">
                  <label htmlFor="username" className="text-start">
                    username
                  </label>
                  <input
                    className="w-full text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc5d00] focus:border-transparent py-1 px-2"
                    type="text"
                    autoComplete="username"
                    id="username"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative flex flex-col items-start justify-center w-full gap-2">
                  <label htmlFor="password" className="text-start">
                    Password
                  </label>
                  <input
                    className="w-full text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc5d00] focus:border-transparent py-1 px-2"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    id="password"
                    onChange={handleInputChange}
                  />
                  <span
                    className="absolute text-black cursor-pointer right-3 top-10"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button
                  type="submit"
                  className="outline-white outline-2 outline bg-[#cc5d00] rounded-md py-2 px-5 w-full font-semibold mt-4"
                >
                  {isLoading ? (
                    <p className="text-sm text-center text-white">Loading...</p>
                  ) : (
                    "Entrar"
                  )}
                </button>

                {isError && (
                  <p className="text-sm text-center text-red-500">
                    {error.message}
                  </p>
                )}
              </form>
              {/* <Link to="/car?car_id=12">Get Car</Link> */}
            </div>
          </>
        ) }
      </div>
    </>
  );
}
