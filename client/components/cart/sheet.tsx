"use client";
import { useState, useEffect } from "react";

import { api } from "@/lib/api";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@/components/ui";
import { ShoppingCartIcon } from "lucide-react";
import { ProductCard } from "../product";

interface CartSheetProps {
  triggerElement: React.ReactNode;
}

function CartSheet({ triggerElement: TriggerElement }: CartSheetProps) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const res = await api.get("/cart", { withCredentials: true });
        setCartItems(res.data.cart_items);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCartItems();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{TriggerElement}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription className="flex flex-col items-center gap-2">
            {cartItems.length == 0 && (
              <>
                <ShoppingCartIcon className="w-8 h-8 text-foreground" />
                <span className="text-foreground text-lg">Cart is empty.</span>
              </>
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-4 h-dvh px-4 py-2 overflow-y-scroll">
          {/* REFACTOR */}
          {cartItems.map((item) => (
            <ProductCard
              className="bg-muted w-full sm:w-full"
              product={item.product}
              key={item.uuid}
              enableExtraFields
            />
          ))}
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" variant="outline">
              Order Button
            </Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}

export { CartSheet };
