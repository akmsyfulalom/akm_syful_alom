import React from "react";
import Link from "next/link";
import { GithubIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Container from "../utils/container";
export default function PrimaryFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <footer className="  py-6">
        <div className="container mx-auto px-4 md:px-6  ">
          <div className="text-center  mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} AKM SYFUL ALOM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
