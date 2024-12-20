import { fetchCoffeeStore, fetchCoffeeStores } from "@/lib/api";
import { CoffeeStore } from "@/lib/types";
import { Box, Button, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";

interface Props {
  params: { id: string }; // Note: id will be a string in Next.js dynamic routing
}

// Generate static params for dynamic routes
export const generateStaticParams = async () => {
  const coffeeStores: CoffeeStore[] = await fetchCoffeeStores()

  // Return an array of params with id as a string
  return coffeeStores.map((store) => ({
    id: store.fsq_id,
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
          <ul className="flex flex-col gap-4 mb-4">
            <li>
              <FaLocationDot className="inline me-2"  />
              <Text size={"5"}>{coffeeStore.location?.formatted_address}</Text>
            </li>
            <li>
            <MdOutlineRateReview className="inline me-2"/>
              <Text size={"5"}>{coffeeStore.rating}</Text>
            </li>
          </ul>
          <Button size={"3"}>Vote</Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default CoffeeStorePage;
