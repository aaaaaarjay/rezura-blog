"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">


                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                  <span>
                    Im
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 m-auto">
                        Arjay Alangcas
                        <br />
                    </span>
                    FrontEnd Developer
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    <span>
                    I am 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                        Arjay Alangcas,
                    </span>
                    a 22-year-old 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                        Computer Science
                    </span>
                    student at 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                      Saint Columban College,
                    </span>
                     from Tukuran, Zamboanga Del Sur. Currently, I am immersed in an internship as a 
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                      Front-End Developer 
                    </span>
                        at 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                      Studio PInya,
                    </span>    
                         where I"m actively expanding and applying my skill set into it.
                    </span>
                </motion.p>
                <motion.a
                href="#skills"
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons" 
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;