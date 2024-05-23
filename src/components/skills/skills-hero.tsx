import React from "react";
import SectionTitle from "../utils/section-title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Link from "next/link";
import Container from "../utils/container";

export default function SkillsHero() {
  return (
    <Container>
      <SectionTitle className="!mb-0" title="My Skillset" />
      <SectionTitle
        className="md:!text-xl !text-sm  font-normal !mt-2 !mb-6"
        title="AKM SYFUL ALOM's"
      />
      <div className="flex justify-center items-center my-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage>Skills</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </Container>
  );
}
