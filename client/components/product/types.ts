

export interface IProduct {
  uuid: string;
  category: {
      name: string;
      slug: string;
  };
  name: string;
  description: string;
  slug: string;
  sku: string;
  image: string;
  price: string;
  color: string;
  product_image: {
      image: string;
      alt_text: string | null;
  }[];
  stock: {
      size: string;
      quantity: number;
  }[];
  variants: {
      uuid: string;
      color: string;
      slug: string;
  }[];
}