import React from "react";
import "./Nav.css";
import { motion } from "framer-motion";

const evariants = {
  startw: {
    d: "M0 38L32 38.8C64 39.7 128 41.3 192 40.8C256 40.3 320 37.7 384 34.7C448 31.7 512 28.3 576 28.5C640 28.7 704 32.3 768 34C832 35.7 896 35.3 928 35.2L960 35L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z",
  },
  endw: {
    d: "M0 37L32 36C64 35 128 33 192 32.3C256 31.7 320 32.3 384 32.7C448 33 512 33 576 33.2C640 33.3 704 33.7 768 35C832 36.3 896 38.7 928 39.8L960 41L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z",
  },
  startg: {
    d: "M0 20L32 19.7C64 19.3 128 18.7 192 19.3C256 20 320 22 384 23.2C448 24.3 512 24.7 576 24.7C640 24.7 704 24.3 768 24.5C832 24.7 896 25.3 928 25.7L960 26L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z",
  },
  endg: {
    d: "M0 20L32 19.5C64 19 128 18 192 17.2C256 16.3 320 15.7 384 16.2C448 16.7 512 18.3 576 20.8C640 23.3 704 26.7 768 27.7C832 28.7 896 27.3 928 26.7L960 26L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z",
  },
  startb: {
    d: "M0 8L32 7.7C64 7.3 128 6.7 192 7.8C256 9 320 12 384 14.2C448 16.3 512 17.7 576 18.2C640 18.7 704 18.3 768 16.7C832 15 896 12 928 10.5L960 9L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z",
  },
  endb: {
    d: "M0 15L32 14C64 13 128 11 192 11.7C256 12.3 320 15.7 384 15.3C448 15 512 11 576 9.5C640 8 704 9 768 10.2C832 11.3 896 12.7 928 13.3L960 14L960 0L928 0C896 0 832 0 768 0C704 0 640 0 576 0C512 0 448 0 384 0C320 0 256 0 192 0C128 0 64 0 32 0L0 0Z",
  },
};

const navWavTransition = {
  duration: 1.5,
  yoyo: Infinity,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "linear",
};

export default function Nav({about, projects, contact}) {
  return (
    <>
      <div className="nav-bar">
        <div className="nava">
          <h1 className="nav-logo">Dheeraj Kumar</h1>
        </div>
        <div className="navb">
          <div className="navb-controls">
            <h2 onClick={()=>{
              about.current.scrollIntoView()
            }}className="nav-btn">About</h2>
            <h2 onClick={()=>{
              projects.current.scrollIntoView()
            }}className="nav-btn">Projects</h2>
            <h2 onClick={()=>{
              contact.current.scrollIntoView()
            }}className="nav-btn">Contact</h2>
            <h2
              onClick={() => {
                window.open("dheeraj_default_resume_times.pdf", '_blank', 'noopener,noreferrer');
              }}
              style={{
                border: "orange 2px dashed",
                height: "37px",
                padding: "0px 5px",
                boxSizing: "border-box",
              }}
              className="nav-btn"
            >
              My Resume
            </h2>
          </div>
        </div>
        <svg
          className="nav-wave"
          id="visual"
          viewBox="0 0 960 45"
          //width="960"
          //height="540"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <motion.path
            variants={evariants}
            transition={navWavTransition}
            initial="startw"
            animate="endw"
            fill="#eeeeee"
          ></motion.path>
          <motion.path
            variants={evariants}
            transition={navWavTransition}
            initial="startg"
            animate="endg"
            fill="#686D76"
          ></motion.path>
          <motion.path
            variants={evariants}
            transition={navWavTransition}
            initial="startb"
            animate="endb"
            fill="#373a40"
          ></motion.path>
        </svg>
      </div>
    </>
  );
}
