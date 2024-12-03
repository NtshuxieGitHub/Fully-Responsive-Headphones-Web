/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Buzzing</h1>
            <p className="text-sm max-w-[300px]">
              Top of the line headphones for your ears.
            </p>

            <div>
              <p className="flex items-center gap-2">
                <FaPhone /> +27 (63) 111-1111
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Johannesburg, South Africa
              </p>
            </div>
          </div>

          {/* Footer links */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div>
              <div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Private Policy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTwitter className="text-3xl hover:scale-105 duration-300" />
              <FaTiktok className="text-3xl hover:scale-105 duration-300" />
            </div>

            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={Cards} alt="cards" className="w-[80%]" />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <p className="text-white text-center mt-8 border-t-2 pt-8">
          Copyright &copy; {new Date().getFullYear()} || NCMATPRO
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
