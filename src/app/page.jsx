"use client";

import Cnsole from "console-art-x";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Transmission from "@/components/Transmission";
import Animation from "@/components/Animation";

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
            Brushstrokes on a Digital Canvas: <br />
            <span className="md:text-5xl "><Animation/></span>
          </h1>

          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. Embark on a journey where design meets development.
          </p>
          <Social />
          <Transmission />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
