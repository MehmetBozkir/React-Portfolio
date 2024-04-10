"use client";

import Cnsole from "console-art-x";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Cnsole />
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-5/12 flex justify-center items-center">
          <div className="deneme"></div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Brushstrokes on a Digital Canvas: <br />{" "}
            <span className="md:text-5xl ">Artistic Front-End Designs. </span>
          </h1>

          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. Embark on a journey where design meets development.
          </p>

          <div className="flex gap-4 bg-white p-2 rounded-full bg-opacity-40">
            <Link href="https://github.com/MehmetBozkir" target="_blank">
              <FaGithub className="text-4xl hover:scale-[1.35]" />
            </Link>
            <Link href="https://medium.com/@mehmetsalihbozkir" target="_blank">
              <FaMedium className="text-4xl hover:scale-[1.35]" />
            </Link>
            <Link
              href="https://stackoverflow.com/users/23094164/mehmet-salih-bozk%c4%b1r"
              target="_blank"
            >
              <IoLogoStackoverflow className="text-4xl hover:scale-[1.35]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mehmet-salih-bozk%C4%B1r/"
              target="_blank"
            >
              <FaLinkedin className="text-4xl hover:scale-[1.35]" />
            </Link>
            <Link href="https://linktr.ee/MehmetSalihBozkir" target="_blank">
              <SiLinktree className="text-4xl hover:scale-[1.35]" />
            </Link>
          </div>

          <div className="flex gap-4 ">
            <Link
              href={"/portfolio"}
              className="p-4 rounded-full ring-1 ring-black bg-black text-white flex hover:scale-[1.15]"
            >
              Download CV <FiDownload className="text-2xl ml-2" />
            </Link>
            <Link
              href={"/contact"}
              className="p-4 rounded-full ring-1 ring-white flex bg-violet-500 text-white hover:scale-[1.15]"
            >
              Contact Me <IoIosSend className="text-2xl ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
