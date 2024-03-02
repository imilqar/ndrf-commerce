import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { ShoppingCartIcon } from "lucide-react";

interface CartSheetProps {
  triggerElement: React.ReactNode;
}

function CartSheet({ triggerElement: TriggerElement }: CartSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{TriggerElement}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription className="flex flex-col items-center gap-2">
            <ShoppingCartIcon className="w-8 h-8 text-foreground" />
            <span className="text-foreground text-lg">Cart is empty.</span>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
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
