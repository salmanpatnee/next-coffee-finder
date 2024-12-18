'use client'
import coffeeStores from "@/data/coffee-stores.json";
import { Container, Grid } from "@radix-ui/themes";
import Banner from "./components/Banner";
import StoreCard from "./components/StoreCard";

export default function Home() {

  const handleButtonClick = () => {
    alert('Clicked')
  }

  return (
    <>
    <Banner onButtonClick={handleButtonClick}/>

    <Container>
      <Grid columns={{initial: "1", sm: "2", md: "3"}} gap={"5"}>
        {coffeeStores.map(store => <StoreCard store={store}/>)}
      </Grid>
    </Container>
    </>
  );
}
