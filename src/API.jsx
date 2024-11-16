import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


export const useCheckAuth = () => {
  return useMutation(async () => {
    try {
      const response = await axios.get("/api/Car_by_id?car_id=1", {
        withCredentials: true,
      });
      if (response.status === 200) {
        return { message: "Authorized", status: 200 };
      }
    } catch (error) {
      return { message: "Unauthorized", status: 401 };
    }
  });
};

