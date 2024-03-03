import { ProductCard } from "@/components/product";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";

import { api } from "@/lib/api";

import type { IProduct } from "@/components/product/types";

export default async function Home() {
  const products = await fetchFeaturedProducts();

  if (!products || products.length === 0) return null;

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
        <Carousel
          className="w-full border border-input shadow-sm rounded-md overflow-hidden"
          opts={{
            active: true,
          }}
        >
          <CarouselContent>
            {products?.map((product: any) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
                key={product.id}
              >
                <ProductCard
                  imageClassName="rounded-none border-none shadow-none"
                  product={product}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </main>
  );
}

async function fetchFeaturedProducts() {
  try {
    const response = await api.get("/products/featured");
    const products: IProduct[] = response.data;
    return products;
  } catch (err) {
    console.error(err);
  }
}
