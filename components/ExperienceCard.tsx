import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Code Wala Bhai</h4>
        <p className="font-bold text-2xl mt-1">CODE WALA BHAI</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
            alt="logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
            alt="logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... - Ended Work...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point</li>
          <li>Summary Point Summary Point Summary Point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
