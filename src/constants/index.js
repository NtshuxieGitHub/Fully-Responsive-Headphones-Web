import headphones1 from "../assets/headphone.png";
import headphones2 from "../assets/headphone2.png";
import headphones3 from "../assets/headphone3.png";
import icon1 from "../assets/icons/obj1.png";
import icon2 from "../assets/icons/obj2.png";
import icon3 from "../assets/icons/obj3.png";
import headphone4 from "../assets/headphone4.png";
import Blogs1 from "../assets/blogs/blog1.jpg";
import Blogs2 from "../assets/blogs/blog2.jpg";
import Blogs3 from "../assets/blogs/blog3.jpg";
import Blogs4 from "../assets/blogs/blog4.jpg";
import { link, title } from "framer-motion/client";

export const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

export const HeadphonesData = [
  {
    id: 1,
    image: headphones1,
    title: "Wireless Headphones Brown",
    subtitle: "Listen to music with style, anywhere, anytime.",
    price: "R1 500",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: headphones2,
    title: "Wireless Headphones Green",
    subtitle: "Listen to music with style, anywhere, anytime.",
    price: "R1 500",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: headphones3,
    title: "Wireless Headphones Blue",
    subtitle: "Listen to music with style, anywhere, anytime.",
    price: "R1 500",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

export const ServicesData = [
  {
    id: 1,
    title: "Security",
    link: "#",
    icon: icon1,
    img: "https://placehold.co/50x50",
    desc: "Your peace of mind is our priority. Our secure payment gateway and advanced encryption technology ensure that your transactions and personal information are protected at all times. Shop confidently, knowing your data is safe with us.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    link: "#",
    icon: icon2,
    img: "https://placehold.co/50x50",
    desc: "We stand by the quality of our products. Each pair of headphones comes with a hassle-free warranty, ensuring your complete satisfaction. We’ve got you covered with easy returns and reliable customer support.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    link: "#",
    icon: icon3,
    img: "https://placehold.co/50x50",
    desc: "Experience premium sound without breaking the bank. We offer high-quality headphones at competitive prices, with regular discounts and flexible payment options, making great audio accessible to everyone.",
    delay: 1.1,
  },
];

export const BannerContent = {
  image: headphone4,
  heading: "The Latest Headphones With The Latest technology",
  subheading:
    "Discover the Perfect Blend of Superior Sound Quality, Advanced Features, and Future-Ready Technology in Every Pair",
};

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const BlogsData = [
  {
    id: 1,
    title: "The Evolution of Headphones: From Wired to Wireless",
    desc: "Explore the fascinating journey of headphone technology, from bulky wired models to sleek, feature-packed wireless options. Learn how innovations like noise cancellation and Bluetooth connectivity have transformed the way we experience sound.",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title: "How to Choose the Perfect Headphones for Your Lifestyle",
    desc: "Whether you’re a gamer, a music lover, or a fitness enthusiast, finding the right headphones can enhance your experience. Dive into our guide to discover the best options for every lifestyle and budget.",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title: "Top 5 Features to Look for in High-Quality Headphones",
    desc: "From sound quality to comfort and battery life, this article breaks down the must-have features of premium headphones, helping you make an informed purchase for unparalleled audio performance.",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title: "Understanding Noise-Canceling Technology: Is It Worth the Hype?",
    desc: "Noise-canceling headphones promise a distraction-free listening experience, but how do they actually work? Discover the science behind the technology and whether it’s the right fit for your needs.",
    link: "#",
    img: Blogs4,
  },
];
