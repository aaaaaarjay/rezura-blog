"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Researchfestival = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="researchfestival"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
                Research Festival
            </h1>




            <div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/pic20.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/pic18.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/pic19.jpg" alt="scc" width={600} height={300} />
                </div>
            </div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/pic22.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/121212.jpg" alt="scc" width={600} height={300} />
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center p-10 transtion duration-300 z-[30] hover:scale-105">
                <Image src="/pic23.jpg" alt="scc" width={600} height={300} />
                </div>
            </div>

            </div>

            

            

            {/*
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/pic18.jpg"
                    title="Modern 3D Portfolio Website"
                    description="3D Portfolio Website made with React, Vite, Three JS, and TailwindCSS."
                    link="#"
                />
                <ProjectCard
                    src="/pic20.jpg"
                    title="Stock price prediction with LSTM"
                    description="Stock Price Prediction with LSTM is a machine learning project that uses LSTM, a type of recurrent neural network, to predict stock prices."
                    link="#"
                />
                <ProjectCard
                    src="/pic19.jpg"
                    title="Modern 3D Portfolio Website"
                    description="3D Portfolio Website made with React, Vite, Three JS, and TailwindCSS."
                    link="#"
                />
            </div>
*/}



                <div className="text-[30px] text-white font-bold mt-[40px] mb-10 text-center">
                Presentation
                 </div>

                 <div className="flex flex-col items-center justify-center gap-2">
            <Link 
            target="_blank" 
            rel="noopener noreferrer"
            href={"https://sandmen.web.app"}
            className="flex relative rounded-lg shadow-lg border text-[20px] border-[#2A0E61] w-full text-white flex-col items-center justify-center px-10 py-5 transtion duration-300 hover:bg-[#2a0e6177] hover:scale-105 hover:border-[#ffffffc2] z-[30]"
            >
                CLICK HERE
            </Link>
            <div className="text-white text-[13px]">Visit our site</div>
            </div>


        </div>
    );
};

export default Researchfestival;