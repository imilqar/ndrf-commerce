import manPng from "@/assets/man.png";
import womanPng from "@/assets/woman.webp";

import { ProductCard } from "@/components/product";

const products = [
  {
    name: "T",
    id: 1,
    image: manPng,
    price: 99.99,
    new: true,
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
    new: true,
  },
  {
    name: "Tb",
    id: 5,
    image: womanPng,
    price: 99.99,
    new: true,
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
  {
    name: "Tb",
    id: 8,
    image: womanPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 9,
    image: womanPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 10,
    image: womanPng,
    price: 99.99,
  },
  {
    name: "Tb",
    id: 11,
    image: womanPng,
    price: 99.99,
  },
];

export default function Shop() {
  return (
    <main className="space-y-16 min-h-screen py-4 px-8">
      <h2 className="text-8xl font-semibold">Catalogue</h2>
      <div className="w-full flex flex-wrap justify-end gap-12">
        {products.map((product) => (
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
