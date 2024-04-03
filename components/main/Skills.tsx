"use client";

import {Skill_data} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import Aboutmecontent from "../sub/aboutmecontent";
import InterestComponent from "../sub/interest";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 pt-[200px]"
            style={{ transform: "scale(0.9" }}
        >
            
            <Aboutmecontent />
            <InterestComponent />
            <SkillText />
            
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className="text-[30px] font-bold text-gray-200 mt-56 text-center">
                Program & Degree
            </div>
            <div className=" text-[20px] text-gray-200 mb-32 mt-[10px] text-center  gap-10  md:px-40">
            The BSCS is a rigorous four-year program offering students a deep understanding of computing concepts and practical skills in algorithmic foundations and cutting-edge technologies. Covering topics from programming languages to cybersecurity, the curriculum fosters critical thinking and problem-solving. Through projects, internships, and research, students gain real-world experience essential for success in today"s digital world. Graduates are equipped for diverse careers in software development, IT consulting, and more, contributing to industries like finance, healthcare, and entertainment.
            </div>

            <div className="text-[30px] font-bold text-gray-200 text-center">
                Purpose of Practicum
            </div>
            <div className=" text-[20px] text-gray-200 mb-10 text-center  gap-10  md:px-40">
            As a fourth-year Bachelor of Science in Computer Science student, my participation in the internship at Studio Pinya as a front-end developer serves to apply and further develop my skills in web development within a professional environment. Specifically, my role entails contributing to the creation of Studio Pinya"s website, which serves as a platform for artists to upload and explore novels or comics. By actively engaging in this internship, I aim to gain practical experience in designing and implementing user-friendly interfaces while collaborating with the team to deliver a visually appealing and functional website. This opportunity not only enriches my academic learning but also provides valuable insights into the industry and contributes to the growth of Studio Pinya as a startup company.
            </div>


            


                {/*
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

                */}

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover mt-[130px]">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;