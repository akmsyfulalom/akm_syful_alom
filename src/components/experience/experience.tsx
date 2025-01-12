import React from "react";
import SectionTitle from "../utils/section-title";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Experience() {
  return (
    <div className="">
      <div>
        <Card className="border-none shrink-0 shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Full-stack web developer</CardTitle>
                <div className="flex items-center gap-2 justify-start">
                  <div className="max-w-14 my-2">
                    <Image
                      src="https://www.masterappliancetech.com/masterApplienceLogo.png"
                      alt="company title"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <CardTitle>Master Applience</CardTitle>
                    <CardDescription>Calondy, USA</CardDescription>
                  </div>
                </div>
              </div>
              <p>2023-present</p>
            </div>
          </CardHeader>
          <Separator />
        </Card>
        <Card className="border-none shrink-0 shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Full-stack web developer</CardTitle>
                <div className="flex items-center gap-2 justify-start">
                  <div className="max-w-14 my-2">
                    <Image
                      src="https://www.masterappliancetech.com/masterApplienceLogo.png"
                      alt="company title"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <CardTitle>Master Applience</CardTitle>
                    <CardDescription>Calondy, USA</CardDescription>
                  </div>
                </div>
              </div>
              <p>2023-present</p>
            </div>
          </CardHeader>
          <Separator />
        </Card>
        <Card className="border-none shrink-0 shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Full-stack web developer</CardTitle>
                <div className="flex items-center gap-2 justify-start">
                  <div className="max-w-14 my-2">
                    <Image
                      src="https://www.masterappliancetech.com/masterApplienceLogo.png"
                      alt="company title"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <CardTitle>Master Applience</CardTitle>
                    <CardDescription>Calondy, USA</CardDescription>
                  </div>
                </div>
              </div>
              <p>2023-present</p>
            </div>
          </CardHeader>
        </Card>
      </div>
      <div>
        <SectionTitle
          title="Education"
          className="text-xl font-semibold  lg:text-2xl"
        />
        <Card className="border-none shrink-0 shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  Complete Web Development course (MERN Stack)
                </CardTitle>
                <div className="flex items-center gap-2 justify-start">
                  <div className="max-w-14 my-2">
                    <Image
                      src="https://www.masterappliancetech.com/masterApplienceLogo.png"
                      alt="company title"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <CardTitle>Master Applience</CardTitle>
                    <CardDescription>Calondy, USA</CardDescription>
                  </div>
                </div>
              </div>
              <p>2023</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore excepturi sapiente nesciunt est exercitationem
              accusantium tempore dolorem repudiandae soluta veniam. Quasi
              tempore ea inventore earum delectus, accusantium odit aliquam
              facere.
            </div>
          </CardHeader>
          <Separator />
        </Card>
        <Card className="border-none shrink-0 shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  Complete Web Development course (MERN Stack)
                </CardTitle>
                <div className="flex items-center gap-2 justify-start">
                  <div className="max-w-14 my-2">
                    <Image
                      src="https://www.masterappliancetech.com/masterApplienceLogo.png"
                      alt="company title"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <CardTitle>Master Applience</CardTitle>
                    <CardDescription>Calondy, USA</CardDescription>
                  </div>
                </div>
              </div>
              <p>2023</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore excepturi sapiente nesciunt est exercitationem
              accusantium tempore dolorem repudiandae soluta veniam. Quasi
              tempore ea inventore earum delectus, accusantium odit aliquam
              facere.
            </div>
          </CardHeader>
          <Separator />
        </Card>
        <Card className="border-none shrink-0 shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>
                  Complete Web Development course (MERN Stack)
                </CardTitle>
                <div className="flex items-center gap-2 justify-start">
                  <div className="max-w-14 my-2">
                    <Image
                      src="https://www.masterappliancetech.com/masterApplienceLogo.png"
                      alt="company title"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <CardTitle>Master Applience</CardTitle>
                    <CardDescription>Calondy, USA</CardDescription>
                  </div>
                </div>
              </div>
              <p>2023</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore excepturi sapiente nesciunt est exercitationem
              accusantium tempore dolorem repudiandae soluta veniam. Quasi
              tempore ea inventore earum delectus, accusantium odit aliquam
              facere.
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
