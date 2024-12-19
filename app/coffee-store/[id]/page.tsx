import React from "react";
import { CoffeeStore } from "@/app/page";
import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

interface Props {
  params: { id: string }; // Note: id will be a string in Next.js dynamic routing
}

const fetchCoffeeStore = async (id: string): Promise<CoffeeStore | null> => {
  const coffeeStores: CoffeeStore[] = await import(
    "@/data/coffee-stores.json"
  ).then((module) => module.default);

  // Find the coffee store by id
  return coffeeStores.find((store) => store.id === parseInt(id)) || null;
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

  const coffeeStore = await fetchCoffeeStore(params.id)

  if (!coffeeStore) {
    return notFound();
  }

  return (
    <Box>
      <Link href="/" className="font-bold">
        <IoMdArrowBack className="inline" /> Back to Home
      </Link>

      <Heading as="h2" my={"5"} size={"5"} color="brown">
        {coffeeStore.name}
      </Heading>
      <Grid columns={{ initial: "1", sm: "2" }} gap={"7"}>
        <Box>
          <Image
            src={"/images/default-store.jpg"}
            alt={coffeeStore.name}
            width={500}
            height={500}
            className="rounded-md"
          />
        </Box>
        <Box>
          <ul className="flex flex-col gap-4">
            <li>
              <FaLocationDot className="inline me-2"  />
              <Text size={"5"}>{coffeeStore.address}</Text>
            </li>
            <li>
              <FaGlobe className="inline me-2" />
              <Text size={"5"}>{coffeeStore.websiteUrl}</Text>
            </li>
          </ul>
        </Box>
      </Grid>
    </Box>
  );
};

export default CoffeeStorePage;
