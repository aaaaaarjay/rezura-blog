import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import Image from "next/image";

const Schoolanddepartment = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 "
            id="schoolanddepartment"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                School & Department
            </h1>

            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center">
                <Image src="/scclogo.png" alt="scc" width={300} height={300} />
                <p className="p-6 flex text-center">
                Known to be one of the most leading institutions in Pagadian City, Saint Columban College, in its pursuit of academic excellence and character formation, has taken on the spotlight of producing globally-competitive graduates since its founding. As an institution since 1957, SCC offers the complete educational package from kindergarten to graduate school. Withstanding every challenge and adversities for 64 years and counting; SCC became not just an institution but a home to many SCCians.
                </p>
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center">
                <Image src="/ccslogo.png" alt="ccs" width={300} height={300} />
                <p className="p-6 flex text-center">
                The College of Computing Studies (CCS) is a hub for innovation in information technology, computer science, information systems, and library and information science. Programs are guided by accomplished professionals and experienced academics, offering a dynamic blend of theory and hands-on experience, preparing students for success in these rapidly evolving fields.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Schoolanddepartment;