import React from 'react'
import Link from "next/link"
import { GithubIcon, TwitterIcon,  YoutubeIcon } from 'lucide-react'
import Container from '../utils/container';
export default function PrimaryFooter() {
    const currentYear = new Date().getFullYear();
  return (
   <Container>
 <footer className="  py-6">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-sm">&copy; {currentYear} AKM SYFUL ALOM. All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Link className="text-gray-400 hover:text-gray-100 transition-colors" href="#">
          <YoutubeIcon className="h-6 w-6" />
          <span className="sr-only">YouTube</span>
        </Link>
        <Link className="text-gray-400 hover:text-gray-100 transition-colors" href="#">
          <GithubIcon className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link className="text-gray-400 hover:text-gray-100 transition-colors" href="#">
          <TwitterIcon className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </div>
  </footer>
   </Container>
  )
}






