"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Researchfestival = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="researchfestival"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Research Festival
            </h1>
            

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





            <div className="flex justify-center items-center flex-col">


    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5">
        
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/pic20.jpg" alt="certs" className="w-[600px] h-auto p-6" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/pic18.jpg" alt="certs" className="w-[600px] h-auto m-10 p-6" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/pic19.jpg" alt="certs" className="w-[600px] h-auto m-10 p-6" />
    </div>
    </div>

    <div className="max-w-[1500px] flex flex-col md:flex-row gap-10 my-5 ">
        
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/pic21.jpg" alt="certs" className="w-[600px] h-auto m-10 p-6" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/pic22.jpg" alt="certs" className="w-[600px] h-auto m-10 p-6" />
        </div>
        <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-1/2 text-white items-center justify-center">
            <img src="/pic23.jpg" alt="certs" className="w-[600px] h-auto m-10 p-6" />
        </div>
        </div>

</div>

<motion.div
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-bold mt-[10px] mb-10 text-center"
            >
                Presentation
            </motion.div>


        </div>
    );
};

export default Researchfestival;