"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MapChart from "@/components/MapChart";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 p-4 space-y-8 lg:space-y-0">
        <div className="h-[300px] lg:h-full lg:w-1/2 flex items-center justify-center text-6xl p-2">
          <MapChart />
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-3/5 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-6 sm:p-8 lg:p-24"
        >
          <div className="text-center text-2xl sm:text-2xl lg:text-6xl mb-4">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>

          <span className="text-sm sm:text-base">Dear Mehmet,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-sm sm:text-base"
            name="user_message"
            placeholder="Your message..."
          />
          <span className="text-sm sm:text-base">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            placeholder="Your email"
            className="bg-transparent border-b-2 border-b-black outline-none text-sm sm:text-base"
          />
          <span className="text-sm sm:text-base">Mehmet's e-mail address</span>
          <input
            type="text"
            placeholder="mehmetsalihbozkir@gmail.com"
            className="bg-transparent border-b-2 border-b-black outline-none text-sm sm:text-base"
            disabled
          />
          <span className="text-sm sm:text-base">Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3 sm:p-4 text-sm sm:text-base">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-sm sm:text-base text-center">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm sm:text-base text-center">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
