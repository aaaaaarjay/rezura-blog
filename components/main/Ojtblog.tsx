import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";

const Ojtblog = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="ojtblog"
        >
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
                On-the-Job Training Blog
            </h1>



            <div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center py-4">
                <Image src="/dr1.jpg" alt="scc" width={300} height={300} />
                <div className="flex text-lg font-bold py-2">
                WEEK 1 - Febuary 19 - 24
                </div>
                <p className="px-6 flex text-center ">
                During the first week of our project, we established our workspace and met with the CEO and staff to define website features. We then researched essential tools and technologies, setting them up by the third day. Diving into tutorials, we honed our skills and understanding. As the week advanced, we shifted to practical tasks, initiating the websites UI design. Additionally, some team members explored Next.js and Tailwind CSS further through tutorials and practical exercises.
                </p>
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center py-4">
                <Image src="/dr2.jpg" alt="scc" width={300} height={300} />
                <div className="flex text-lg font-bold py-2">
                WEEK 2 - Febuary 26 - March 1
                </div>
                <p className="px-6 flex text-center ">
                Throughout the week, I focused on front-end UI design using Next.js and Tailwind CSS. Day one started my own UI design project, laying the groundwork. Day two continued refining and expanding this work. Day three began replicating UI designs from our UI/UX developer. Day four involved developing the front end for the registration page. Day five refined registration page functionality and made minor adjustments for consistency and user-friendliness across registration and login pages.
                </p>
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center py-4">
                <Image src="/dr3.jpg" alt="scc" width={300} height={300} />
                <div className="flex text-lg font-bold py-2">
                WEEK 3 - March 2 - 8
                </div>
                <p className="px-6 flex text-center ">
                Throughout the week, I focused on front-end development, enhancing user experience. Day one involved creating navigation elements for various pages. Day two centered on refining the admin dashboards front end. Day three saw development of the novel approval page and versatile components. Day four focused on improving the chapter view pages presentation. Day five continued refining the chapter view and associated components for a cohesive user experience.
                </p>
                </div>
            </div>
            <div className="justify-between h-full w-full flex flex-col md:flex-row gap-10 mb-10 md:px-40">
            <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center py-4">
                <Image src="/dr4.jpg" alt="scc" width={300} height={300} />
                <div className="flex text-lg font-bold py-2">
                WEEK 4 - March 11 - 15
                </div>
                <p className="px-6 flex text-center ">
                Throughout the week, I focused on updating our websites front end to reflect a new design. I finalized the admin dashboard layout on day one and moved on to implementing the new design on novel pages, including the novel approval page, on day two. Day three involved adapting the new design for the novel chapter view. On day four, I continued front-end development while also meeting with a front-end developer expert to ensure alignment with best practices.
                </p>
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center py-4">
                <Image src="/dr5.jpg" alt="scc" width={300} height={300} />
                <div className="flex text-lg font-bold py-2">
                WEEK 5 - March 18 - 22
                </div>
                <p className="px-6 flex text-center ">
                During the week, I focused on front-end development tasks. Day one involved initiating work on the artist sides front end and crafting the artist side sidebar. On day two, I created a modal for the admin side and integrated all front-end pages provided by the developer. Day three was spent fixing functions on admin-side pages and finalizing the sidebar. Day four saw the start of development on the create novel page for the artist side, and day five was dedicated to its continued development.
                </p>
                </div>
                <div className="flex relative rounded-lg shadow-lg border border-[#2A0E61] w-full text-white flex-col items-center justify-center py-4">
                <Image src="/dr6.jpg" alt="scc" width={300} height={300} />
                <div className="flex text-lg font-bold py-2">
                WEEK 6 - March 25 - 27
                </div>
                <p className="px-6 flex text-center ">
                Throughout the week, I focused on enhancing the front-end of our websites create novel page. On day one, I concentrated on creating modals to improve the user experience. Day two involved further refinement of the front-end design and addressing any bugs present on the page. By day three, I implemented a rich text editor for the create novel page and incorporated additional functionalities to enhance its usability and appeal.
                </p>
                </div>
            </div>
            </div>


            {/* 
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/photo.png"
                    title="Modern 3D Portfolio Website"
                    description="3D Portfolio Website made with React, Vite, Three JS, and TailwindCSS."
                    link="https://nikhil-maguwala-dark-3d.netlify.app/"
                />
                <ProjectCard
                    src="/spplstm.png"
                    title="Stock price prediction with LSTM"
                    description="Stock Price Prediction with LSTM is a machine learning project that uses LSTM, a type of recurrent neural network, to predict stock prices."
                    link=""
                />
                <ProjectCard
                    src="/auto_mieten.png"
                    title="Auto Mieten"
                    description="Developed with Next.js and leveraging its server-side rendering capabilities, the Car Rental website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience."
                    link=""
                />
            </div>
            */}

        </div>
    );
};

export default Ojtblog;