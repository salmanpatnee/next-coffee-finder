import { Card, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

type CoffeeStore = {
  id: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
};

interface Props {
  store: CoffeeStore;
}

const StoreCard = ({ store }: Props) => {
  return (
    <Card key={store.id}>
      <Link href={`/coffee-stores/${store.id}`}>
        <Heading as="h2" size={"4"} color="brown" mb={"3"} align={"center"}>
          {store.name}
        </Heading>
        <Image
          src={"/images/default-store.jpg"}
          alt={store.name}
          width={500}
          height={500}
          className="mx-auto rounded"
        />
      </Link>
    </Card>
  );
};

export default StoreCard;
