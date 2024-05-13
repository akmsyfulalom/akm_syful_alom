/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Container from '../utils/container'
import TransitionEffect from '../utils/TransitionEffect'
import Image from 'next/image'
import AnimatedText from '../utils/AnimatedText'
import { Button } from '../ui/button'
import { ArrowBigDownDash, Github, LinkedinIcon } from 'lucide-react'




export default function Hero() {
  return (
    <Container>
      
      <TransitionEffect />
     <div className="flex flex-col justify-center items-center h-screen gap-10" >
      <div className='max-h-48 max-w-48  '>
        <Image className='rounded-full border-8 border-green-500 overflow-hidden' src={"/pictures/akm syful alom full stack web app developer.jpg"} alt="akm syful alom full stack web developer" width={500} height={500}/>
      </div>
      <div className='text-center'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">I'm AKM SYFUL ALOM</h1>
        <p className='font-bold text-xl md:text-2xl lg:text-3xl'>Full-stack Web Developer</p>

        <div className='max-w-[800px]'>
        <AnimatedText text="As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Full Stack Web App Development." className='text-center lg:!text-2xl md:!text-xl mt-3 dark:text-gray-300 '/>
      </div>
      </div>
      
      <div className='flex gap-5 '>
      <div> <Button variant={'outline'} size={'lg'} className='text-xl'><Github className='shrink-0 mr-2'/>GitHub</Button></div>
      <div> <Button variant={'outline'} className='text-xl'><LinkedinIcon className='shrink-0 mr-2'/>LinkedIn</Button></div>
      <div> <Button variant={'outline'} className='text-xl'><ArrowBigDownDash className='shrink-0 mr-2'/>Get Resume</Button></div>
     </div>
     </div>

    
    
    </Container>
  )
}
