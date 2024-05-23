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
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: any) {
  return (
    <Card className="rounded-none">
      <CardContent className="p-0 overflow-hidden  relative">
        <div className={styles.imageContainer}>
          <Image
            src={project?.imageUrl}
            alt={"project Image"}
            width={500}
            height={500}
            priority
            className={styles.image}
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{project?.title}</CardTitle>
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
      <CardFooter className="flex justify-between">
        <Button variant="outline">Live View</Button>
        <Button>Details</Button>
      </CardFooter>
    </Card>
  );
}
