// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdMenu } from "react-icons/md";
import { NavBarMenu } from "../constants";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <>
      <div className="bg-brandDark text-white py-6 font-varela">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container flex justify-between items-center"
        >
          {/* Logo section  */}
          <div>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.2,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <a href="#" className="text-xl font-bold uppercase">
                Buzzing /
                <span className="font-extralight text-white/70">Music</span>
              </a>
            </UpdateFollower>
          </div>

          {/* Menu section  */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.2,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={item.link}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}

              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.2,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <button className="text-xl ps-14">
                  <SlEarphones />
                </button>
              </UpdateFollower>
            </ul>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <MdMenu text-4xl />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default NavBar;
