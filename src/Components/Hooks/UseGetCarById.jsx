import axios from "axios";
import { useQuery } from "react-query";
import BASE_URL from "../../BaseURL";

export default function UseGetCarById(id, options = {}) {
  if (!id) {
    return { message: "Car not found", status: 404 };
  }
  return useQuery(
    ["car", id],
    async () => {
      try {
        const response = await axios.get(BASE_URL+`/Car_by_id?car_id=${id}`, {
          withCredentials: true,
        });

        return response.data;
      } catch (error) {
        if (error.response.status === 401) {
          return false;
        }

        return { message: "Car not found", status: 404 };
      }
    },

    {
      refetchOnWindowFocus: false,
      retry: 0,
      ...options,
    }
  );
}
