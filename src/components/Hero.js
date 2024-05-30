import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const blobVariants = {
    one: {
      d: "M53.8,-61.9C67.9,-52.3,76.2,-33.6,78.2,-14.8C80.3,3.9,76.1,22.7,67.4,40C58.7,57.3,45.5,73.1,28.6,79.7C11.7,86.3,-8.9,83.7,-26.9,76.2C-44.9,68.7,-60.3,56.2,-67.6,40.5C-75,24.8,-74.3,5.9,-68.6,-9.6C-62.9,-25,-52.1,-37.1,-39.8,-47C-27.5,-57,-13.7,-64.9,3.1,-68.5C19.9,-72.1,39.7,-71.6,53.8,-61.9Z",
    },
    two: {
      d: "M51.5,-60.8C65.9,-49.3,76.2,-32.3,79.6,-13.8C83.1,4.6,79.9,24.4,70.5,40.9C61.2,57.4,45.9,70.6,29,74.4C12.2,78.2,-6.1,72.6,-25.2,66.7C-44.4,60.9,-64.3,54.8,-73.1,41.3C-81.9,27.9,-79.6,7.2,-75.5,-12.9C-71.5,-32.9,-65.7,-52.2,-52.9,-64C-40,-75.7,-20,-79.9,-0.7,-79C18.6,-78.2,37.1,-72.2,51.5,-60.8Z",
    },
    three: {
      d: "M53.3,-66.1C64.2,-54.4,64.8,-33,67.4,-12.7C69.9,7.5,74.3,26.5,68.5,42.4C62.7,58.3,46.6,71.1,27.9,78.9C9.1,86.7,-12.2,89.5,-26.9,81C-41.5,72.6,-49.4,52.8,-54.1,35.6C-58.9,18.4,-60.5,3.7,-59.4,-11.9C-58.4,-27.6,-54.7,-44.2,-44.4,-56C-34,-67.8,-17,-74.8,2.1,-77.3C21.2,-79.8,42.4,-77.8,53.3,-66.1Z",
    },
  };

  return (


    
    <div className="back-hero">
      
      <div className="backVideoDiv">
        <video className="backVideo" loop autoPlay muted>
          <source type="video/mp4" src="/loop_slowed.mp4"></source>
        </video>
      </div>

      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
        className="blackLayer"
      ></motion.div>
      <div className="hero-cont">
        <h1 className="hero-text heroHead">Hello</h1>
        <h1 className="hero-text heroHead">
          I'm <section className="name">Dheeraj</section>
        </h1>
        <h2 className="hero-text heroSubHead">Full Stack MERN Developer</h2>
        <h3 className="hero-text heroPara">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea magni
          animi in, a
        </h3>
      </div>
      <div className="heroimg">
        <svg
          className="heroSVG"
          viewBox="21 25 160 160"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
  <pattern id="myself" patternUnits="objectBoundingBox" x="0" y="0" width="1" height="1">
    <image href="/myself.jpg" x="-25" y="-15" width="230" height="230" />
  </pattern>
</defs>
          <motion.path
            variants={blobVariants}
            
            animate={{
              d: ["M53.8,-61.9C67.9,-52.3,76.2,-33.6,78.2,-14.8C80.3,3.9,76.1,22.7,67.4,40C58.7,57.3,45.5,73.1,28.6,79.7C11.7,86.3,-8.9,83.7,-26.9,76.2C-44.9,68.7,-60.3,56.2,-67.6,40.5C-75,24.8,-74.3,5.9,-68.6,-9.6C-62.9,-25,-52.1,-37.1,-39.8,-47C-27.5,-57,-13.7,-64.9,3.1,-68.5C19.9,-72.1,39.7,-71.6,53.8,-61.9Z",
              "M51.5,-60.8C65.9,-49.3,76.2,-32.3,79.6,-13.8C83.1,4.6,79.9,24.4,70.5,40.9C61.2,57.4,45.9,70.6,29,74.4C12.2,78.2,-6.1,72.6,-25.2,66.7C-44.4,60.9,-64.3,54.8,-73.1,41.3C-81.9,27.9,-79.6,7.2,-75.5,-12.9C-71.5,-32.9,-65.7,-52.2,-52.9,-64C-40,-75.7,-20,-79.9,-0.7,-79C18.6,-78.2,37.1,-72.2,51.5,-60.8Z",
              "M51.1,-62.1C62.7,-51.1,66.2,-31.7,69.1,-12.6C72.1,6.6,74.4,25.5,67.4,40C60.3,54.6,43.8,64.9,25.5,72.6C7.2,80.3,-12.9,85.5,-30.5,80.5C-48.2,75.6,-63.4,60.5,-69.1,43.4C-74.8,26.3,-71,7.2,-67.9,-12.2C-64.8,-31.7,-62.3,-51.5,-51.1,-62.6C-39.9,-73.7,-20,-76.1,-0.1,-76C19.7,-75.8,39.4,-73.2,51.1,-62.1Z",
              "M53.8,-61.9C67.9,-52.3,76.2,-33.6,78.2,-14.8C80.3,3.9,76.1,22.7,67.4,40C58.7,57.3,45.5,73.1,28.6,79.7C11.7,86.3,-8.9,83.7,-26.9,76.2C-44.9,68.7,-60.3,56.2,-67.6,40.5C-75,24.8,-74.3,5.9,-68.6,-9.6C-62.9,-25,-52.1,-37.1,-39.8,-47C-27.5,-57,-13.7,-64.9,3.1,-68.5C19.9,-72.1,39.7,-71.6,53.8,-61.9Z"
            ]
            }}
            transition={{
              yoyo: Infinity,
              duration: 5,
              repeat: Infinity,
              times: [0, 0.33, 0.66, 1],
              ease: "linear"
            }}
            fill="url(#myself)"
            stroke="#eeeeee" stroke-width="1.5"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}
