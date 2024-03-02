import { api } from "@/lib/api";
import { ProductCard } from "@/components/product";

export default async function Shop() {
  const products = await fetchProducts();

  return (
    <main className="space-y-16 min-h-screen py-4 px-8">
      <h2 className="text-8xl font-semibold">Catalogue</h2>
      <div className="w-full flex flex-wrap justify-end gap-12">
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
    const products = response.data;
    return products;
  } catch (err) {
    console.error(err);
  }
}
