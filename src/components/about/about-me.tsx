/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { CircleUserRound, Languages, MapPin } from "lucide-react";
import SectionTitle from "../utils/section-title";

export default function AboutMe() {
  return (
    <div>
      <SectionTitle title="About Me" />
      <div
        id="about"
        className="grid md:grid-cols-2  justify-items-center items-center gap-5 md:gap-10"
      >
        <div className="max-w-96 max-h-96 ">
          <Image
            className="rounded-sm border-8 border-green-500 overflow-hidden shrink-0"
            src={"/pictures/akm syful alom web developer about us.jpg"}
            alt="akm syful alom web developer about us"
            width={700}
            height={700}
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-3">
            I'm AKM SYFUL ALOM
          </h1>
          <Separator className="my-3 " />
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-1 ">
                <CircleUserRound className="shrink-0 w-5 h-5" />
                <p>Name: </p>
              </div>
              <p>AKM SYFUL ALOM</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-1 ">
                <MapPin className="shrink-0 w-5 h-5" />
                <p>Location: </p>
              </div>
              <p>Sylhet, Bangladesh</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-1 ">
                <Languages className="shrink-0 w-5 h-5" />
                <p>Languages: </p>
              </div>
              <p>English, Bangla</p>
            </div>
          </div>
          <Separator className="my-3 " />

          <div>
            <p>
              As an outgoing and dedicated web developer proficient in the MERN
              stack and advanced web technologies, I'm passionate about
              leveraging my skills to create innovative solutions. With a
              commitment to continuous learning and an open-minded approach, I
              thrive in dynamic environments, collaborating effectively with
              teams to deliver exceptional results. I'm eager to contribute my
              expertise and enthusiasm to a new opportunity where I can further
              develop professionally and make meaningful contributions to
              impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
