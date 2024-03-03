import { api } from "@/lib/api";
import { ProductCard } from "@/components/product";

import type { IProduct } from "@/components/product/types";

export default async function Shop() {
  const products = await fetchProducts();

  if (!products || products.length == 0) return null;

  return (
    <main className="space-y-16 min-h-screen py-4 px-8">
      <h2 className="text-4xl sm:text-8xl font-semibold">Catalogue</h2>
      <div className="w-full flex flex-wrap justify-center sm:justify-end gap-12">
        {products.map((product: any) => (
          <ProductCard
            product={product}
            isNewBadgeActive={product.new}
            enableExtraFields
            key={product.id}
          />
        ))}
      </div>
    </main>
  );
}

async function fetchProducts() {
  try {
    const response = await api.get("/products");
    const products: IProduct[] = response.data;
    return products;
  } catch (err) {
    console.error(err);
  }
}
