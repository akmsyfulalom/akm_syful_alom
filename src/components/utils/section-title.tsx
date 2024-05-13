"use client"
import React from 'react';
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

export default function SectionTitle({ title, className = "" }: any) {
  return (
    <motion.h1
      className={`text-2xl font-bold md:text-3xl lg:text-5xl text-center my-10 lg:my-24 ${className}`}
      variants={quote}
    >
      {
                    title.split(" ").map((word: any, index: any) =>
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
  );
}
