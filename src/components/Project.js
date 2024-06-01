import React from "react";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";

export default function Project(props) {
  const btnVariants = {
    hover: {
      backgroundColor: "#DC5F00",
      color: "#eeeeee",
      scale: 1.2,

      transition: {
        duration: 0.2,
        type: "spring",
        ease: "ease",
        
      },
    },
  };

  return (
    <div className="carousel-inside">
      <div
        className="proj-img"
        style={{ backgroundImage: "url('/proj-imgs/" + props.img + "')" }}
      ></div>
      <div className="proj-details">
        <h3 className="proj-details-text">
          <h2 className="proj-title">{props.title}</h2>
          {props.cont}
        </h3>
        <div className="proj-btns">
          <motion.button
            variants={btnVariants}
            initial={{
              scale: 1,
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            whileHover="hover"
            whileTap={{scale: 0.8}}
            className="proj-btn"
          >
            Live App
          </motion.button>
          <motion.button
            variants={btnVariants}
            initial={{
              scale: 1,
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            whileHover="hover"
            whileTap={{scale: 0.8}}
            className="proj-btn"
          >
            Git Repository
          </motion.button>
          <motion.button
            variants={btnVariants}
            initial={{
              scale: 1,
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            whileHover="hover"
            whileTap={{scale: 0.8}}
            className="proj-btn"
          >
            Video Demo
          </motion.button>
        </div>
      </div>
    </div>
  );
}
