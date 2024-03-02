import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { AspectRatio, Badge } from "@/components/ui";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: any;
  isNewBadgeActive?: boolean;
  enableExtraFields?: boolean;
  imageClassName?: string;
}

function ProductCard({
  product,
  isNewBadgeActive = false,
  enableExtraFields = false,
  className,
  imageClassName,
  ...props
}: ProductCardProps) {
  return (
    <div className={cn("w-[200px] sm:w-[450px] relative group", className)}>
      <Link href={`/product/${product.slug}`}>
        <AspectRatio ratio={6 / 9}>
          <Image
            fill
            className={cn(
              "object-cover border border-input shadow-sm rounded-md h-full",
              imageClassName
            )}
            src={product.image}
            alt=""
          />
        </AspectRatio>

        {enableExtraFields && (
          <div className="flex items-center justify-between">
            <h4>{product.name}</h4>
            <span>${product.price}</span>
          </div>
        )}

        {isNewBadgeActive && (
          <Badge
            variant="black"
            className="absolute group-hover:bg-primary top-2 -right-2"
          >
            NEW
          </Badge>
        )}
      </Link>
    </div>
  );
}

export { ProductCard };
