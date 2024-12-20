import { CoffeeStore } from "./types";

const baseUrl = `https://api.foursquare.com`;
const apiEndpoint = `${baseUrl}/v3/places`;

const getStoresApiUrl = (latlng: string, query: string, limit: number) => {
  return `${apiEndpoint}/search?query=${query}&ll=${latlng}&exclude_all_chains=true&fields=fsq_id%2Cname%2Clocation%2Cdescription%2Cwebsite%2Crating&limit=${limit}`;
};

const apiOpts = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.FOURSQUARE_API_KEY!,
  },
};
const getStoreApiUrl = (id: string) => {
  return `${apiEndpoint}/${id}?fields=fsq_id%2Cname%2Cdescription%2Clocation%2Crating%2Cwebsite`;
};


export const fetchCoffeeStores = async (): Promise<CoffeeStore[]> => {
  try {
    const response = await fetch(
      getStoresApiUrl("24.867232219799256,67.08307875344723", "coffee", 6),
      apiOpts
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coffee stores");
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching coffee stores:", error);
    return []; // Return empty array on error
  }
};

export const fetchCoffeeStore = async (id: string): Promise<CoffeeStore | null> => {
  try {
    const response = await fetch(getStoreApiUrl(id), apiOpts);

     
    
    if (!response.ok) {
      throw new Error("Failed to fetch coffee stores");
    }
    
    const data = await response.json();
    return data || {};
  } catch (error) {
    console.error("Error fetching coffee stores:", error);
    return null // Return empty array on error
  }
};
