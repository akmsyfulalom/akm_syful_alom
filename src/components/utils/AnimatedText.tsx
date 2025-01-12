"use client"
import React from 'react'
import { motion } from "framer-motion"

const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
};

const singleWord = {
    initial: {
        opacity: 0,
        y:50

    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1
        }
    }
};


export default function AnimatedText({ text, className = "" }: any) {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
            <motion.h1 className={`inline-block w-full     ${className}`}
                variants={quote}
               
            >
                {
                    text.split(" ").map((word: any, index: any) =>
                        <motion.span key={word + '-' + index} className='inline-block'
                        variants={singleWord}
                        initial="initial"
                        animate="animate"
                        >
                            {word}&nbsp;

                        </motion.span>
                    )
                }
            </motion.h1>

        </div>
    )
}
