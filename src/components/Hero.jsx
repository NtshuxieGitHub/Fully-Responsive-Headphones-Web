// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { HeadphonesData } from "../constants";
import { UpdateFollower } from "react-mouse-follower";
import { FaWhatsapp } from "react-icons/fa";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = () => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const Hero = () => {
  const [activeData, setActiveData] = useState(HeadphonesData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-[700px}">
          {/* Headphone info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-varela font-bold"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="await">
                <motion.p
                  key={activeData.id}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="await">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    style={{ backgroundColor: activeData.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* Headphones List Separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">
                  Top of the line headphones for your ears.
                </p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              {/* Headphones list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {HeadphonesData.map((headphone) => {
                  return (
                    <UpdateFollower
                      key={headphone.id}
                      mouseOptions={{
                        backgroundColor: headphone.bgColor,
                        zIndex: 999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        onClick={() => handleActiveData(headphone)}
                        key={headphone.id}
                        className="grid place-items-center cursor-pointer"
                      >
                        <div>
                          <img
                            src={headphone.image}
                            alt="headphone"
                            className="w-[100px]"
                          />
                        </div>
                        <div className="space-y-2 text-center">
                          <p className="text-base font-bold">
                            {headphone.modal}
                          </p>
                          <p className="text-xs font-normal">
                            {headphone.price}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,

                  transition: {
                    duration: 0.2,
                  },
                }}
                src={activeData.image}
                alt="headphone image"
                className="w-[300px] md:w-[400px] cl:w-[550px]"
              />
            </AnimatePresence>
          </div>

          {/* Whatsapp icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
            <a href="https://web.whatsapp.com/">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
