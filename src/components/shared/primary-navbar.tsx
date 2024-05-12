"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {  Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CartDrawer } from "../Cart/cart-drawer";
import { useCartDataContext } from "@/context/CartDataContext";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import dynamic from "next/dynamic";

type TMenu = {
  id: number;
  title: string;
  link: string;
};

const PrimaryNavbar = () => {
  const ConditinalButton = dynamic(() =>import("../ui/ConditionalLazyLoadingComponents/ConditinalButton"), {ssr:false})
  const {cartItems, setCartItems} = useCartDataContext() 
  const currentPath = usePathname();

  
 

  const menu: TMenu[] = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects",
    },
    {
      id: 2,
      title: "About Me",
      link: "/about",
    },

    {
      id: 4,
      title: "Contact",
      link: "/contact",
    }  
  ];

  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center   gap-4 border-b bg-background px-4 md:px-6 ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center  md:gap-5 md:text-lg lg:gap-6  ">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <div className="max-w-sm flex items-center justify-start gap-1 lg:mr-16">
               
               <h1 className="text-4xl dark:!text-white font-bold whitespace-nowrap ">
                Electric Drift Trike
              </h1>
             
            </div>
          </Link>
          {menu &&
            menu?.map((item, id) => (
              <Link
                href={item?.link}
                key={id}
                className={currentPath === item?.link ? 'whitespace-nowrap  text-[#016EFD]' :`text-foreground transition-colors hover:text-foreground whitespace-nowrap hover:text-[#016EFD]  `}
              >
                {item?.title}
              </Link>
            ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="z-[10000]">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <div className="">
                <h1 className="text-4xl dark:!text-white font-bold whitespace-nowrap ">
                Electric Drift Trike
              </h1>
                </div>
              </Link>

              {menu &&
                menu?.map((item, id) => (
                  <SheetClose key={id} asChild >  
                  <Link
                    href={item?.link}
                    
                    className={currentPath === item?.link ? "whitespace-nowrap  text-[#016EFD]" : "text-foreground transition-colors hover:text-foreground"}
                  >
                    {item?.title}
                  </Link>
                  </SheetClose>
                ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="outline" className="relative">
            <CartDrawer />
            {cartItems?.length > 0 && (
              <p className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-1">
                {cartItems?.length}
              </p>
            )}
          </Button>
            <>
          <ConditinalButton />
          </>
        </div>
      </header>
    </div>
  );
};

export default PrimaryNavbar;
