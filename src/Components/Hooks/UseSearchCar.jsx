import axios from "axios";
import { useQuery } from "react-query";
import BASE_URL from "../../BaseURL";
export default function UseSearchCar(query, options = {}) {
  return useQuery(
    ["querySearch", query],
    async () => {
      if (query === "") return;
      try {
        const response = await axios.get(BASE_URL+`/search_car?search_content=${query}`, {
          withCredentials: true,
        });
      
        return { data:   response.data.result, status: response.status };
      } catch (error) {
        console.log(error);
        return { message: "Car not found", status: 404 };
      }
    },
    {
      enabled: !!query, // Query only runs if query is truthy
      cacheTime: 0, // Adjust based on your needs
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...options,
    }
  );
}
