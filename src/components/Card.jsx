"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreen } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "React Commerce",
    desc: "eCommorce Website Via Api | Nextjs,Axios , Zustand , Authjs , Clerk and Aceternity UI. ",
    img: "/Demo1.png",
    link: "https://github.com/MehmetBozkir/React-PizzaShop-Website",
    demo: "https://react-pizza-shop-x.netlify.app/",
  },
  {
    id: 2,
    title: "Weather APP",
    desc: "A Weather App Via Api | Vitejs, Axios, ReactQuery ,Tailwindcss , Phosphor Icons and Daisyui.",
    img: "/Demo2.png",
    link: "https://github.com/MehmetBozkir/React-interview-app",
    demo: "https://react-weather-app-xxx.netlify.app/",
  },
  {
    id: 3,
    title: "Vanilla Coffee App",
    desc: "eCommorce Website | Nextjs, Zustand, Next-intl, Stripe.",
    img: "/Demo3.png",
    link: "https://github.com/MehmetBozkir/React_Zustand_CartTesting",
    demo: "https://react-zustand-coffeshop.netlify.app/en",
  },
  {
    id: 4,
    title: "Personal Details App",
    desc: "Between 0 and 100 personnel with random information shown | Nextjs,Typescript,Shadcn ui,Axios,Lucide,Github-Corner,Tailwind CSs.",
    img: "/Demo4.png",
    link: "https://github.com/MehmetBozkir/React-TypeScript-Example",
    demo: "https://react-typescript-example-x.netlify.app/",
  },
  {
    id: 5,
    title: "React e-Commerce",
    desc: "A eCommorce Website Via Api | Reactjs, Nextjs, FakeStore Api, Axios ,Tailwindcss and Daisyui.",
    img: "/Demo5.png",
    link: "https://github.com/MehmetBozkir/React-eCommorce-Website",
    demo: "https://react-ecommorce-website-x.netlify.app/",
  },
  {
    id: 6,
    title: "React Todo App",
    desc: "An example Todo App where I use Reactjs, Tailwindcss and Daisyui.",
    img: "/Demo6.png",
    link: "https://github.com/MehmetBozkir/React_Todo_App",
    demo: "https://react-todo-app-x.netlify.app/",
  },
];

function Card() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-prose ">
      {items.map((item) => (
        <motion.div key={item.id} className="flex">
          <div className="card shadow-xl m-2 bg-opacity-20 bg-white">
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{item.title}</h2>
              <p className="text-white">{item.desc}</p>
              <div className="card-actions justify-center">
                <Link href={item.link} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg ring-1 ring-black bg-black text-white bg-opacity-60 hover:scale-[1.15] font-semibold rounded-full flex">
                    Github <FaGithub className="text-xl" />
                  </button>
                </Link>
                <Link href={item.demo} target="_blank">
                  <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-white bg-opacity-40 hover:scale-[1.15] font-semibold rounded-full flex">
                    Demo <PiProjectorScreen className="text-xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;
