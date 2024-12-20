export type StoreLocation = {
    formatted_address: string;
  };
  
  export type CoffeeStore = {
    fsq_id: string;
    name: string;
    description?: string;
    location: StoreLocation;
    rating: number;
    imgUrl?: string;
    website?: string;
  };