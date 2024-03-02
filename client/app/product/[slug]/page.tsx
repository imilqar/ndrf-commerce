"use client";

import { useCallback, useEffect, useState } from "react";

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

export default function Product({ params }: any) {
  const { slug } = params;
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(product?.image);

  const checkStockQuantity = useCallback(() => {
    if (!product) return 0;

    var variant = product.variants.find(function (variant) {
      return variant.color === selectedColor && variant.size === selectedSize;
    });
    return variant ? variant.quantity : 0;
  }, [product, selectedColor, selectedSize]);

  useEffect(() => {
    fetchProductBySlug(slug).then((product) => {
      setProduct(product);
      setActiveImage(product.image);
    });
  }, [slug]);

  if (!product) return null;

  const colorOptions = product.variants?.map((variant: any) => variant.color);
  const sizeOptions = product.variants?.map((variant: any) => variant.size);

  return (
    <main className="flex gap-4 flex-col min-h-screen items-center justify-between pt-10">
      <div className="w-[70%] relative grid grid-cols-3 gap-4 border py-4 px-8 rounded-lg  ">
        <Button
          className="absolute bottom-2 right-2"
          variant="ghost"
          size="icon"
          asChild
        >
          <Link href="/">
            <XIcon className="w-4 h-4" />
          </Link>
        </Button>

        <div className="flex flex-wrap gap-2">
          <div
            className="w-[20%] cursor-pointer"
            onClick={() => setActiveImage(product.image)}
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
              onClick={() => setActiveImage(productImg.image)}
              key={idx}
            >
              <AspectRatio ratio={6 / 9}>
                <Image
                  fill
                  className="object-cover border-2 border-input shadow-md rounded-md h-full"
                  src={productImg.image}
                  alt={productImg.alt_text}
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
                src={activeImage}
                alt="product_image"
              />
            </AspectRatio>
          </div>

          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p>${product.price}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Select onValueChange={setSelectedColor}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {colorOptions.map((color: string, idx: number) => (
                    <SelectItem value={color} key={idx}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedSize}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sizeOptions.map((size: string, idx: number) => (
                    <SelectItem value={size} key={idx}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="bg-black"
            disabled={
              !selectedColor || !selectedSize || checkStockQuantity() == 0
            }
          >
            {!selectedColor || !selectedSize
              ? "Select color and size"
              : checkStockQuantity() > 0
              ? "Add to cart"
              : "Out of stock"}
          </Button>

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

async function fetchProductBySlug(slug) {
  try {
    const response = await api.get(`products/${slug}`);
    const product = response.data;
    return product;
  } catch (err) {
    console.error(err);
  }
}

// TODO if color or size change change sku and view new product
