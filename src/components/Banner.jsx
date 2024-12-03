// eslint-disable-next-line no-unused-vars
import React from "react";
import { BannerContent } from "../constants";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../constants";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          {/* Banner Image */}
          <div>
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
              src={BannerContent.image}
              alt="banner"
              className="w-[300px] md:w-[400px]"
            />
          </div>

          {/* Banner Text Info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                {BannerContent.heading}
              </motion.h1>

              <motion.p
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
              >
                {BannerContent.subheading}
              </motion.p>

              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUp(1.2)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white"
                >
                  Learn More
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;