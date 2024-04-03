"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { Interest } from "@/constants"; // Import the data

const InterestComponent: React.FC = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center ">
            {/* Big Icons */}
            <div className="flex justify-center mt-[10px]">
                {Interest.map((item: { name: string, src: string }, index: number) => (
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
                className=" text-[20px] text-gray-200 mb-10 mt-10 text-center"
            >
                My overarching goal is to evolve into a skilled front-end developer specializing in user interface design, driven by a passion for
                <br />
                crafting intuitive and visually captivating web applications. I aspire to channel my expertise into meaningful contributions within innovative tech companies,
                <br />
                where I can collaborate on impactful projects and continue my growth journey as a developer.
            </motion.div>

            {/* Big Icons */}
            
        </div>
    )
}

export default InterestComponent;
