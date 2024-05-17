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
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
                Tranings & Seminars
            </h1>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-bold mt-[10px] mb-10 text-center"
            >
                Certificates
            </motion.div>

            <div >
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/1.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/2.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/3.jpg" alt="scc" width={600} height={300} />
                </div>
            </div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/4.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/5.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/6.jpg" alt="scc" width={600} height={300} />
                </div>
            </div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/7.png" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/8.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/9.jpg" alt="scc" width={600} height={300} />
                </div>
            </div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/10.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/11.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/121212.jpg" alt="scc" width={600} height={300} />
                </div>
            </div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/PinyaCert.png" alt="scc" width={600} height={300} />
            </div>
            </div>
            </div>



        </div>
    );
};

export default Trainingsandseminars;