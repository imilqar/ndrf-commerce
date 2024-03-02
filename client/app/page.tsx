import { ProductCard } from "@/components/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

import { api } from "@/lib/api";

export default async function Home() {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <div>None</div>;

  return (
    <main className="flex gap-12 min-h-screen flex-col items-center justify-between pt-10 p-24">
      <div className="flex h-auto items-center">
        <ProductCard
          product={products[0]}
          className="w-1/2 sm:w-1/2"
          imageClassName="rounded-none rounded-l-md"
        />
        <ProductCard product={products[1]} isNewBadgeActive />
      </div>

      <div className="text-center">
        <h3 className="text-3xl sm:text-9xl font-bold">The World Is Yours</h3>
      </div>

      <div className="container mt-18">
        <Carousel className="w-full">
          <CarouselContent>
            {products?.map((product: any) => (
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

async function fetchFeaturedProducts() {
  try {
    const response = await api.get("/products/featured");
    const products = response.data;
    return products;
  } catch (err) {
    console.error(err);
  }
}
