/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Container from '../utils/container'
import Image from 'next/image'
import { Separator } from '../ui/separator'

export default function About() {
  return (
    <Container>
        <div id='about' className='flex md:flex-row flex-col justify-center items-center gap-5 md:gap-10'>
        <div className="max-w-96 max-h-96 flex-1">
            <Image className='rounded-sm border-8 border-green-500 overflow-hidden' src={"/pictures/akm syful alom web developer about us.jpg"} alt="akm syful alom web developer about us" width={700} height={700} priority/>
        </div>
        <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-3">I'm AKM SYFUL ALOM</h1>
        <Separator  className="my-3 " />
        </div>
        </div>
      
    </Container>
  )
}
