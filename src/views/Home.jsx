import React, { useContext } from "react";
// import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import home from "../assets/home.png";
import whoami from "../assets/whoami.png";
import { flattenOptionGroups } from "@mui/base";
import { style } from "@mui/system";

const Home = () => {

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontFamily: "font-light, font-inter, sans-serif",
    color: 'white',
    fontSize: '1rem',
    textAlign: 'center',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    zIndex: -1,
    backgroundImage: `url(${home})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(3px)',
  }
};
  return (
    <>
      <div style={styles.backgroundImage} />
        <div style={styles.container} id="/" >
        <div style={styles.overlay} />
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
          style={styles.text}
        >
          <div class="relative w-[30px] h-[30px] md:w-[60px] md:h-[60px]">
              <img src={whoami} height="120px" alt="whoami" />
              <h2 class="text-2xl md:text-4xl lg:text-6xl text-center font-light font-inter text-gray">
                Hello World, I'm
              </h2>
              <h1 class="text-5xl md:text-7xl lg:text-7xl font-extrabold text-white font-inter mt-7 text-center">Yash Kothari</h1>
          </div>
          <p class="text-xl md:text-3xl lg:text-5xl text-gray font-inter mt-12 text-center">A <span class="text-green font-semibold">software engineer </span>based in <span class="font-semibold">USA </span></p>
          <div className="flex justify-center md:justify-start ">
            {
              contactLinks.map((el) => (
              <a
                href={el.link}
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <img alt="" src={el.url} />
              </a>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
              <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                Resume
              </Link>
            </div>
            </div>
        </div>
        <motion.img
          initial="hidden"
          whileInView={"visible"}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
              },
            },
            hidden: { opacity: 1, y: 80 },
          }}
          // src={heroBg}
          alt=""
          className="md:w-3/6 hidden sm:block"
        />
        </div>
        </>
  );
};

export default Home;
