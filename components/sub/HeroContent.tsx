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
                    Im&#160;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 m-auto">
                        Arjay Alangcas
                        <br />
                    </span>
                    <span>Front-</span>
                    <span >End Developer</span>
                </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    <span>
                    I am
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                    &#160;Arjay Alangcas&#160;
                    </span>
                    a 22-year-old
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                    &#160;Computer Science&#160;
                    </span>
                    student at 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                    &#160;Saint Columban College&#160;
                    </span>
                     from Tukuran, Zamboanga Del Sur. Currently, I am immersed in an internship as a 
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                     &#160;Front-End Developer&#160;
                    </span>
                        at 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      
                        &#160;Studio Pinya,&#160;
                    </span>    
                         where I&#39;m actively expanding and applying my skill set into it.
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