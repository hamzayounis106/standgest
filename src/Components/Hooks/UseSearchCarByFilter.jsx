import axios from "axios";
import { useQuery } from "react-query";
import BASE_URL from "../../BaseURL";

export default function UseSearchCarByFilter(estado, closed, options = {}) {
  return useQuery(
    ["search", estado, closed],
    async () => {
      if (!estado) return;
    
      try {
        const response = await axios.get(
          BASE_URL+ `/fixed_car_filter?estado=${estado}&closed=${closed}`,
          {
            withCredentials: true,
          }
        );
      
        return { data: response.data.result, status: response.status };
      } catch (error) {
        if (error.response.status === 401) {
          throw new Error("Unauthorized");
        }
        console.log(error);
        return { message: "Car not found", status: 404 };
      }
    },
    {
      enabled: !!estado, 
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...options,
    }
  );
}
