import Image from "next/image";
import Link from "next/link";

import { LOGO, APP_NAME } from "@/config/app.config";

import { Button } from "../ui";
import { CartSheet } from "../cart";
import { ShoppingCartIcon } from "lucide-react";

function Header() {
  return (
    <header className="py-2 px-6 w-full h-16 border-b-2 shadow-sm flex items-center justify-between">
      <Link className="flex items-center gap-2" href="/">
        <div className="w-8 h-8 flex items-center justify-center border border-input shadow-sm rounded-md">
          <Image className="w-4 h-4" src={LOGO} alt="logo" />
        </div>
        <h2 className="text-xl font-semibold">{APP_NAME}</h2>
      </Link>

      <div>
        <Button variant="link" asChild>
          <Link href="/shop">Shop</Link>
        </Button>
        <CartSheet
          triggerElement={
            <Button size="icon" variant="outline">
              <ShoppingCartIcon className="w-4 h-4" />
            </Button>
          }
        />
      </div>
    </header>
  );
}

export { Header };
