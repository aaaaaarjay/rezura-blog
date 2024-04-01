"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";

const Trainingsandseminars = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="trainingsandseminars"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Tranings & Seminars
            </h1>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-bold mt-[10px] mb-10 text-center'
            >
                Certificates
            </motion.div>

            <div className="flex justify-center items-center flex-col">


    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5">
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/1.jpg" alt="certs" className="w-[600px] h-auto m-10"  />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/2.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
    </div>

    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5 ">
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/3.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/4.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
    </div>


    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5 ">
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/5.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/6.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
    </div>


    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5 ">
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/7.png" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/8.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
    </div>
    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5 ">
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/9.png" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/10.jpg" alt="certs" className="w-[600px] h-auto m-10" />
        </div>
    </div>
</div>



        </div>
    );
};

export default Trainingsandseminars;