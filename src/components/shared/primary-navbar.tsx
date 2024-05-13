"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import {  ArrowBigDownDash, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import { ModeToggle } from "../theme/theme-switch";
import Container from "../utils/container";
import Logo from "../utils/logo";

type TMenu = {
  id: number;
  title: string;
  link: string;
};

const PrimaryNavbar = () => {
  
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
      link: "#about",
    },
    {
      id: 2,
      title: "Experience",
      link: "/experience",
    },
    {
      id: 2,
      title: "Skills",
      link: "/skills",
    },

    {
      id: 4,
      title: "Contact",
      link: "/contact",
    }  
  ];

  return (
    <Container>
      <header className="sticky top-0 flex h-16 items-center   gap-4  bg-background px-4 md:px-6 ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center  md:gap-5 md:text-lg lg:gap-6  ">
         
            <div className="max-w-sm flex items-center justify-start gap-1 lg:mr-16">
               
               
              <Logo />
             
            </div>
         
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
              
                <div className="">
                <Logo />
                </div>
            

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
          
          <Link href="/AKM_SYFUL_ALOM_Resume.pdf" target='_blank' download={true}><Button variant={"outline"} className="font-bold "><ArrowBigDownDash  className="shrink-0  mr-0.5" /> Get Resume</Button></Link>
           
         <ModeToggle />
        
        </div>
      </header>
    </Container>
  );
};

export default PrimaryNavbar;
