import StoreCard from "@/app/components//StoreCard";
import Banner from "@/app/components/Banner";
import { fetchCoffeeStores } from "@/lib/api";
import { CoffeeStore } from "@/lib/types";
import { Grid, Heading } from "@radix-ui/themes";

const Home = async () => {
  // Fetching data directly in the server component
  const coffeeStores: CoffeeStore[] = await fetchCoffeeStores();

  return (
    <>
      <Banner />

      <Heading as="h2" color="brown" size={"8"} mb={"5"}>
        Coffee Stores
      </Heading>
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"7"}>
        {coffeeStores.map((store) => (
          <StoreCard key={store.fsq_id} store={store} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
