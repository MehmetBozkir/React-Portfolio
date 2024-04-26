"use client";
import React from "react";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

function Transmission() {
  return (
    <div className="flex gap-4">
      <a
        href={"MehmetSalihBozkir_Cv.pdf"}
        download={"MehmetSalihBozkir_Cv.pdf"}
        className="p-4 rounded-full ring-1 ring-black bg-black text-white bg-opacity-80 flex hover:scale-[1.15]"
      >
        Download CV <FiDownload className="text-2xl ml-2" />
      </a>
      <Link
        href={"/contact"}
        className="p-4 rounded-full flex bg-white text-black bg-opacity-40 hover:scale-[1.15]"
      >
        Contact Me <IoIosSend className="text-2xl ml-2" />
      </Link>
    </div>
  );
}

export default Transmission;
