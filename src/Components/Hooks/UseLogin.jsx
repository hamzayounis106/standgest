import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

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
          "/api/login",
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
        console.log("Login success");
        window.location.href = "/search";
        // navigate("/search");
      },
    }
  );
}
