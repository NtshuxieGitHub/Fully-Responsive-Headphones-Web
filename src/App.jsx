/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { UpdateFollower } from "react-mouse-follower";
import Services from "./components/Services";
import Banner from "./components/Banner";
import BannerText from "./components/BannerText";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.2,
        }}
      >
        <NavBar />
        <Hero />
      </UpdateFollower>

      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.2,
        }}
      >
        <Services />
        <Banner />
        <BannerText />
        <Blogs />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
