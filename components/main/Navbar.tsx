"use client";


import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full h-[100px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />

                    <span className="font-bold ml-[10px]  text-gray-300">
                        Arjay Alangcas
                    </span>
                </a>

                <div className="md:hidden" style={{ position: "absolute", top: "calc(100% + 10px)", left: 0, width: "100%" }}>
                    <div className={`${menuOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col items-center w-[full] bg-[#110c308c] px-4 text-gray-200 rounded-lg font-bold ">
                            <a href="#about-me" className="cursor-pointer py-4" onClick={toggleMenu}>
                            ABOUT ME
                            </a>
                            <a href="#industry" className="cursor-pointer py-4" onClick={toggleMenu}>
                                INDUSTRY
                            </a>
                            <a href="#ojtblog" className="cursor-pointer py-4" onClick={toggleMenu}>
                                OJT BLOG
                            </a>
                            <a href="#schoolanddepartment" className="cursor-pointer py-4" onClick={toggleMenu}>
                                SCHOOL & DEPARTMENT
                            </a>
                            <a href="#educationaltour" className="cursor-pointer py-4" onClick={toggleMenu}>
                                EDUCATIONAL TOUR
                            </a>
                            <a href="#researchfestival" className="cursor-pointer py-4" onClick={toggleMenu}>
                                RESEARCH FESTIVAL
                            </a>
                            <a href="#trainingsandseminars" className="cursor-pointer py-4" onClick={toggleMenu}>
                                TRAININGS & SEMINARS
                            </a>
                            
                            <div className="flex justify-center gap-6 py-4">
                            {Socials.map((social) => (
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    key={social.name}
                                    width={24}
                                    height={24}
                                    className="cursor-pointer gap-2"
                                    onClick={() => window.open(social.link)}
                                />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center md:font-sm justify-center gap-8 w-auto h-auto bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200" style={{ border: "1px solid rgba(112, 66, 248, 0.384)" }}>
                    <a href="#about-me" className="cursor-pointer">
                        ABOUT ME
                    </a>
                    <a href="#industry" className="cursor-pointer">
                        INDUSTRY
                    </a>
                    <a href="#ojtblog" className="cursor-pointer">
                        OJT BLOG
                    </a>
                    <a href="#schoolanddepartment" className="cursor-pointer">
                        SCHOOL & DEPARTMENT
                    </a>
                    <a href="#educationaltour" className="cursor-pointer">
                        EDUCATIONAL TOUR
                    </a>
                    <a href="#researchfestival" className="cursor-pointer">
                        RESEARCH FESTIVAL
                    </a>
                    <a href="#trainingsandseminars" className="cursor-pointer">
                        TRAININGS & SEMINARS
                    </a>
                    
                </div>

                <button className="md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <div className="flex-row gap-5 hidden md:flex">
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                            className="cursor-pointer"
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
