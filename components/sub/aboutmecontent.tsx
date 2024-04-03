"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { Pinya } from "@/constants"; // Import the data

const Aboutmecontent = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center ">

<motion.div
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-bold mt-[10px] text-center"
            >
                Making apps with modern technologies
            </motion.div>

            <div className="flex justify-center mt-10 mb-[10px]">
                {Pinya.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={slideInFromTop}
                        className="flex flex-col items-center justify-center mr-8"
                    >
                        <img src={item.src} alt={item.name} className="h-20 w-20" />
                        <h1 className="text-[13px] text-white mt-2">
                            {item.name}
                        </h1>
                    </motion.div>
                ))}
            </div>


            {/* Description */}
            
            <motion.div
                variants={slideInFromRight(0.5)}
                className=" text-[20px] text-gray-200 text-center"
            >
                These technologies align closely with the requirements of my role at Studio Pinya, motivating my pursuit to master them. 
                <br />  
                Additionally, I have a keen interest in languages like HTML, CSS, JavaScript, and PHP, which I&quot;ve explored through personal projects and coursework.
            </motion.div>

            {/* Big Icons */}
            
        </div>
    )
}

export default Aboutmecontent;
