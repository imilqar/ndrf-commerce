"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { api } from "@/lib/api";

import {
  AspectRatio,
  Button,
  Textarea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { XIcon } from "lucide-react";

import type { IProduct } from "@/components/product/types";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function Product({ params }: ProductPageProps) {
  const { slug } = params;
  const router = useRouter();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductBySlug = async (slug: string) => {
      try {
        const res = await api.get(`products/${slug}`);
        setProduct(res.data);
        setActiveImg(res.data.image);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProductBySlug(slug);
  }, [slug]);

  if (!product) return null;

  const handleChangeActiveImage = (img: string) => {
    setActiveImg(img);
  };
  const handleChangeProductVariant = (slug: string) => {
    if (!slug) return;
    router.push(`/product/${slug}`);
  };

  return (
    <main className="flex gap-4 flex-col min-h-screen items-center justify-center sm:justify-between pt-10">
      <div className="sm:w-[70%] flex flex-col relative sm:grid grid-cols-3 gap-4 border py-4 px-8 rounded-lg  ">
        <Button
          className="absolute lg:bottom-2 right-2"
          variant="ghost"
          size="icon"
          asChild
        >
          <Link href="/">
            <XIcon className="w-4 h-4" />
          </Link>
        </Button>

        <div className="w-full h-24 md:h-full overflow-y-scroll flex flex-wrap gap-2">
          <div
            className="w-[20%] cursor-pointer"
            onClick={() => handleChangeActiveImage(product.image)}
          >
            <AspectRatio ratio={6 / 9}>
              <Image
                fill
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={product.image}
                alt={"cover"}
              />
            </AspectRatio>
          </div>

          {product.product_image?.map((productImg, idx) => (
            <div
              className="w-[20%] cursor-pointer"
              onClick={() => handleChangeActiveImage(productImg.image)}
              key={idx}
            >
              <AspectRatio ratio={6 / 9}>
                <Image
                  fill
                  className="object-cover border-2 border-input shadow-md rounded-md h-full"
                  src={productImg.image}
                  alt={productImg.alt_text || "product image"}
                />
              </AspectRatio>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-start border-r">
          <div className="w-[70%]">
            <AspectRatio ratio={6 / 9}>
              <Image
                fill
                className="object-cover border-2 border-input shadow-md rounded-md h-full"
                src={activeImg || "selected product image"}
                alt="product_image"
              />
            </AspectRatio>
          </div>

          <h3 className="text-2xl w-2/3 font-semibold break-words">
            {product.name}
          </h3>
          <p>${product.price}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <Select onValueChange={handleChangeProductVariant}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem disabled value={product.slug}>
                    {product.color}
                  </SelectItem>
                  {product.variants.map((variant) => (
                    <SelectItem value={variant.slug} key={variant.uuid}>
                      {variant.color}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {product.stock.map((stock, idx: number) => (
                    <SelectItem
                      disabled={stock.quantity == 0}
                      value={stock.size}
                      key={idx}
                    >
                      {stock.size}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-black">Add to cart</Button>

          <div className="border"></div>

          <Textarea
            className="h-60 resize-none"
            value={product.description}
            readOnly
          />
        </div>
      </div>
    </main>
  );
}

// TODO if color or size change change sku and view new product
