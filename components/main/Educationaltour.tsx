"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { EmblaCarousel } from "../sub/Carousel";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Educationaltour = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 "
            id="educationaltour"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-20 mb-[40px] text-center">
                Educational Tour
            </h1>
            <div className="rounded-lg shadow-lg border border-[#2A0E61] px-4">
            <EmblaCarousel />
            </div>


            <div className='text-[30px] text-white font-medium mt-[40px] mb-10 text-center'>
       
            </div>
            <div className="text-[20px] text-gray-200 mb-10 text-center px-[350px] md:px-[100px]">
                
During our educational tour in Cebu City, we were privileged to visit six distinguished companies, each offering unique insights into their respective industries. CEBU BUSINESS INCUBATOR FOR IT provided valuable insights into startup facilitation, research marketing, and funding acquisition. INNODATA KNOWLEDGE SERVICES enlightened us on digitization processes and server management techniques. PAGASA MACTAN RADAR VISAYAS WEATHER PRSD offered a fascinating glimpse into manual weather measurement methods and meteorological education. DYNATA PHILIPPINES INC showcased their focus on business-to-business solutions development, while DASH ENGINEERING PHILIPPINES INC demonstrated their expertise in model crafting and design using specialized tools. Finally, MANDAUE COMMAND CENTER underscored the critical role of real-time monitoring and rapid response in urban management. Collectively, these experiences expanded our understanding of diverse industries and underscored the importance of experiential learning in our educational journey.
            </div>
        </div>
        
    );
};

export default Educationaltour;