"use client";
import { Container, Grid } from "@radix-ui/themes";
import Banner from "./components/Banner";
import StoreCard from "./components/StoreCard";

export type CoffeeStore = {
  id: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
};

const Home = async () => {
  // Fetching JSON data from the local file or an external source
  const coffeeStores = await import("@/data/coffee-stores.json").then(
    (module) => module.default
  );

  const handleButtonClick = () => {
    alert("Clicked");
  };

  return (
    <>
      <Banner onButtonClick={handleButtonClick} />

      <Container>
        <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"7"}>
          {coffeeStores.map((store: CoffeeStore) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
