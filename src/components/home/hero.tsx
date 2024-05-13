/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from '../utils/container'
import TransitionEffect from '../utils/TransitionEffect'
import HireMe from '../utils/HireMe'
import Image from 'next/image'
import AnimatedText from '../utils/AnimatedText'
import Link from 'next/link'



export default function Hero() {
  return (
    <Container>
      
      <TransitionEffect />
     <div className="flex flex-col justify-center items-center h-screen" >
      <div className='max-h-48 max-w-48  '>
        <Image className='rounded-full border-8 border-green-500 overflow-hidden' src={"/pictures/akm syful alom full stack web app developer.jpg"} alt="akm syful alom full stack web developer" width={500} height={500}/>
      </div>
      <div className='text-center'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">I'm AKM SYFUL ALOM</h1>
        <p className='font-bold text-xl md:text-2xl lg:text-3xl'>Full-stack Web Developer</p>
      </div>
      <div>
        <AnimatedText text="As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Full Stack Web App Development." className='text-center lg:!text-2xl md:!text-xl mt-3 dark:text-gray-300 '/>
      </div>
     </div>
    
    </Container>
  )
}
