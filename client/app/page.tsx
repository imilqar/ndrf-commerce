import { ProductCard } from "@/components/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

import manPng from "@/assets/man.png";
import womanPng from "@/assets/woman.webp";

const products = [
  {
    name: "T",
    id: 1,
    image: manPng,
    price: 99.99,
  },
  {
    name: "TD",
    id: 2,
    image: womanPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 3,
    image: manPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 4,
    image: manPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 5,
    image: womanPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 6,
    image: manPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 7,
    image: womanPng,
    price: 99.99,
  },
];

export default function Home() {
  return (
    <main className="flex gap-12 min-h-screen flex-col items-center justify-between pt-10 p-24">
      <div className="flex h-auto items-center">
        <ProductCard
          product={{ image: manPng }}
          className="w-1/2 sm:w-1/2"
          imageClassName="rounded-none rounded-l-md"
        />
        <ProductCard product={{ image: womanPng }} isNewBadgeActive />
      </div>

      <div className="text-center">
        <h3 className="text-3xl sm:text-9xl font-bold">The World Is Yours</h3>
      </div>

      <div className="container mt-18">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
                key={product.id}
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
