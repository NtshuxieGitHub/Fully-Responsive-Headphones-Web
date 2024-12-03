// eslint-disable-next-line no-unused-vars
import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { BlogsData } from "../constants";
import { motion } from "framer-motion";

const Blogs = () => {
  // Animation variants for floating in from the left
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="container">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {BlogsData.map((blog) => (
              <motion.div
                key={blog.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInLeft}
              >
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                    <img src={blog.img} alt="blog" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {blog.title}
                      </h1>
                      <p className="line-clamp-3">{blog.desc}</p>
                    </div>
                  </div>
                </UpdateFollower>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
