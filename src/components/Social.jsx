"use client";

import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoLogoStackoverflow } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Social() {
  return (
    <div className="flex gap-4 bg-white p-2 rounded-full bg-opacity-40 text-white">
      <Link
        href="https://github.com/MehmetBozkir"
        target="_blank"
        aria-label="Github Link"
      >
        <FaGithub className="text-4xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://medium.com/@mehmetsalihbozkir"
        target="_blank"
        aria-label="Medium Link"
      >
        <FaMedium className="text-4xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://stackoverflow.com/users/23094164/mehmet-salih-bozk%c4%b1r"
        target="_blank"
        aria-label="StackoverFlow Link"
      >
        <IoLogoStackoverflow className="text-4xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mehmet-salih-bozk%C4%B1r/"
        target="_blank"
        aria-label="Linkedin Link"
      >
        <FaLinkedin className="text-4xl hover:scale-[1.35]" />
      </Link>
      <Link
        href="https://linktr.ee/MehmetSalihBozkir"
        target="_blank"
        aria-label="Linktr Link"
      >
        <SiLinktree className="text-4xl hover:scale-[1.35]" />
      </Link>
    </div>
  );
}

export default Social;
