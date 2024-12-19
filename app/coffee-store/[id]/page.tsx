import React from "react";
import { CoffeeStore } from "@/app/page";
import { Box, Grid } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { id: string }; // Note: id will be a string in Next.js dynamic routing
}

const fetchCoffeeStore = async (id: string): Promise<CoffeeStore | null> => {
  const coffeeStores: CoffeeStore[] = await import(
    "@/data/coffee-stores.json"
  ).then((module) => module.default);

  // Find the coffee store by id
  return coffeeStores.find((store) => store.id.toString() === id) || null;
};

// Generate static params for dynamic routes
export const generateStaticParams = async () => {
  const coffeeStores: CoffeeStore[] = await import(
    "@/data/coffee-stores.json"
  ).then((module) => module.default);

  // Return an array of params with id as a string
  return coffeeStores.map((store) => ({
    id: store.id.toString(), // Ensure id is a string
  }));
};

const CoffeeStorePage = async ({ params }: Props) => {
  const coffeeStore: CoffeeStore = await fetchCoffeeStore(params.id);

  return (
    <Grid columns={{ initial: "1", sm: "2" }} gap={"7"}>
      <Box>
        <Link href="/">Back to Home</Link>
        <h2>{coffeeStore.name}</h2>
        <Image
          src={"/images/default-store.jpg"}
          alt={coffeeStore.name}
          width={500}
          height={500}
          className="rounded"
        />
      </Box>
      <Box>2</Box>
    </Grid>
  );
};

export default CoffeeStorePage;
