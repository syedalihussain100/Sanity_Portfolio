import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-bold">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                opacity:0,
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFb4DcJTBcsNeKyMpUvs64H_Y3RbbXnj8ug&usqp=CAU"
              alt="projectlogo"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB04]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                : Netflix Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas harum odio corrupti fugit dicta accusantium,
                reprehenderit, magnam praesentium consectetur atque facere?
                Sapiente explicabo ullam iste aspernatur voluptatem perspiciatis
                aut expedita odio aperiam. Sequi dolore assumenda ab odit amet
                culpa nesciunt.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB04]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Project;
