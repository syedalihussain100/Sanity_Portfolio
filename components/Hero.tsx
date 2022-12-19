import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Profile from "./profile.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Syed Muhemin ALi 👏",
      "Guy-Who-loves-Coffee.tsx ☕",
      "<ButLovesToCodeMore /> 🔥",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={Profile}
        alt="Picture of the author"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-bold">
          Mern Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="HeroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="HeroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="HeroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="HeroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
