import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function BlogCard({ blog }: any) {
  return (
    <Card className="rounded-none">
      <CardContent className="p-0 ">
        <Image
          src={blog?.imageUrl}
          alt={"blog Image"}
          width={500}
          height={500}
          priority
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{blog?.title}</CardTitle>
        <div className="flex justify-center items-center gap-1">
          <Button variant={"outline"} size={"sm"}>
            NextJS
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Mongoose
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Shadcn
          </Button>
          <Button variant={"outline"} size={"sm"}>
            Ecommerce
          </Button>
        </div>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui deleniti
          nemo sunt, suscipit amet maiores omnis. Eveniet labore aliquid
          impedit?
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant={"outline"} className="w-full">
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
