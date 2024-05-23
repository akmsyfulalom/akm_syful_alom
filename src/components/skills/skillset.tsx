import React from "react";
import Container from "../utils/container";
import SectionTitle from "../utils/section-title";

import Image from "next/image";
import { Button } from "../ui/button";

export default function SkillSet() {
  return (
    <Container>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div>
          <h1 className="md:!text-2xl  !mb-2 !text-base font-semibold text-center my-10 lg:my-24 ">
            Skills
          </h1>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
        </div>
        <div>
          <h1 className="md:!text-2xl  !mb-2 !text-base font-semibold text-center my-10 lg:my-24 ">
            Tools I use every day
          </h1>

          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"} className="!px-3 m-2">
            <div className="text-center flex justify-between items-center gap-1">
              <Image
                className="max-w-8"
                src="https://anamcoder.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F48%2F000000%2Fexternal-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png&w=256&q=75"
                width={500}
                height={500}
                alt="title"
              />

              <p className="whitespace-nowrap text-xl font-bold">React JS</p>
            </div>
          </Button>
        </div>
      </div>
    </Container>
  );
}
