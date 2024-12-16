import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../BaseURL";

export default function useLogin() {
  const navigate = useNavigate();
  return useMutation(
    async ({ username, password }) => {
      if (username === "" || password === "") {
        return Promise.reject({
          message: "Please fill in all fields",
          status: 400,
        });
      }

      try {
        const response = await axios.post(
          BASE_URL+"/login",
          {
            username,
            password,
          },
          {
            withCredentials: true,
          }
        );
        return response.data;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
    {
      onSuccess: () => {
       
        // window.location.href = "/search";
        navigate("/search");
      },
    }
  );
}
