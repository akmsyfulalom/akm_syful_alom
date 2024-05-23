import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

export default function Sorted() {
  return (
    <div className="my-10">
      <Carousel className="w-full ">
        <CarouselContent className="flex gap-5">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/3 md:basis-1/6 lg:basis-1/12"
            >
              <div className="p-1">
                <Button
                  variant={"outline"}
                  className="flex items-center justify-center "
                >
                  <span className="">{index + 1} NextJS</span>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
