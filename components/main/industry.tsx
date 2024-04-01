"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 "
            id="industry"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                INDUSTRY
            </h1>
            <div className="h-full w-full flex flex-col md:flex-col gap-10 px-10 justify-center items-center rounded-lg shadow-lg border border-[#2A0E61] p-20">
                <Image src="/pinya.webp" width={600} height={600} alt={""} className="flex justify-center" />


                <div>
                <motion.div
                variants={slideInFromRight(0.5)}
                className=' text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Founded by two college buddies who shared a passion for reading, and a dream of showcasing the incredible creativity of Filipino talent to the world.
                <br />
                Thanks to the visionary leadership of our CEO, that dream became a reality! With a keen eye for fresh, exciting storytelling, she recognized
                <br />
                 the potential in using webtoons to bring the fun and engaging stories created by talented Filipino writers and illustrators to a wider audience.
            </motion.div>
            </div>
            </div>
        </div>
    );
};

export default Projects;