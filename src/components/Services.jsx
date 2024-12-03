// eslint-disable-next-line no-unused-vars
import React from "react";
import { ServicesData } from "../constants";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-gray-200 font-poppins py-8">
      <div className="container py-14">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-3xl font-bold text-center pb-10"
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ServicesData.map((service) => (
            <UpdateFollower
              key={service.id}
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 0.5,
                scale: 5,
                rotate: 720,
                mixBlendMode: "darken",
                backgroundElement: (
                  <div>
                    <img src={service.icon} alt="icon" />
                  </div>
                ),
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="flex  flex-col item-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
              >
                <img
                  src={service.icon}
                  alt="service"
                  className="w-[100px] mb-4"
                />
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">{service.title}</h1>
                  <p className="text-center text-sm text-black/75">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
