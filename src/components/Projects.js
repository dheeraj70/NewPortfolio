import React, { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";

export default function Projects() {
  const [nextDir, toggleDir] = useState(true);

  const projects = [{
    title: "Recipe Gram",
    cont : "Full stack Recipe sharing app. Built using Node.js, React.js, MySQL,and Passport.js for secure authentication. The app is hosted on AWSEC2 with NGINX for reverse proxy.",
    img : "recipegram.png"
  },{
    title: "Image Scout",
    cont : "Full stack Recipe sharing app. Built using Node.js, React.js, MySQL,and Passport.js for secure authentication. The app is hosted on AWSEC2 with NGINX for reverse proxy.",
    img : "imagescout.png"
  },{
    title: "The Draw App",
    cont : "Full stack Recipe sharing app. Built using Node.js, React.js, MySQL,and Passport.js for secure authentication. The app is hosted on AWSEC2 with NGINX for reverse proxy.",
    img : "drawapp.png"
  },{
    title: "Doctor Appointment App",
    cont : "Full stack Recipe sharing app. Built using Node.js, React.js, MySQL,and Passport.js for secure authentication. The app is hosted on AWSEC2 with NGINX for reverse proxy.",
    img : "docappointment.png"
  },
]

  const carouselItems = projects.map((i, index)=>{
      return(
      <Project
      key = {index}
      title={i.title}
      cont={i.cont}
      img={i.img}
    />)
    })
  ;

  console.log(carouselItems)



  const len = carouselItems.length;

  const [Indices, setIndex] = useState([len - 1, 0, 1]);
  //const [Cid, setCid] = useState(0);
  //const [Rid, setRid] = useState(1);

  const handlePrev = () => {
    toggleDir(false);
    setIndex([
      Indices[0] === 0 ? len - 1 : Indices[0] - 1,
      Indices[0],
      Indices[1],
    ]);
    //alert(Indices[0] +" "+ Indices[1]+" "+ Indices[2]);
  };

  const handleNext = () => {
    setIndex([
      Indices[1],
      Indices[2],
      Indices[2] === len - 1 ? 0 : Indices[2] + 1,
    ]);
    toggleDir(true);
    //alert(Indices[0] +" "+ Indices[1]+" "+ Indices[2]);
  };

  const CarouselVariants = {
    center: {
      x: "0px",
      scale: 1,
      zIndex: "5",
      filter: "brightness(100%)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      x: "700px",
      scale: 0.8,
      zIndex: "3",
      filter: "brightness(50%) blur(5px)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-700px",
      scale: 0.8,
      zIndex: "4",
      filter: "brightness(50%) blur(5px)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightOut: {
      x: "1350px",
    },
    leftOut: {
      x: "-1350px",
    },
  };

  return (
    <>
      <svg
        id="visual"
        viewBox="5 25 870 50"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 70L18.8 71.7C37.7 73.3 75.3 76.7 112.8 74C150.3 71.3 187.7 62.7 225.2 54.7C262.7 46.7 300.3 39.3 337.8 41.3C375.3 43.3 412.7 54.7 450.2 62C487.7 69.3 525.3 72.7 562.8 69C600.3 65.3 637.7 54.7 675.2 47.8C712.7 41 750.3 38 787.8 38C825.3 38 862.7 41 881.3 42.5L900 44L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
          fill="#0b0b0b"
          stroke-linecap="round"
          stroke-linejoin="miter"
          stroke="#eeeeee"
          stroke-width="3"
        ></path>
      </svg>

      <div className="projetcs-cont">
        <h1 className="projs-head">
          Projects
          <svg
            className="projs-scribble"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="100"
            viewBox="0 0 1413.000000 194.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,194.000000) scale(0.100000,-0.100000)"
              fill="#DC5F00"
              stroke="none"
            >
              <path
                d="M275 1650 c-87 -20 -166 -83 -186 -150 -27 -89 43 -148 184 -156 40
-2 756 -9 1592 -14 836 -6 2638 -20 4005 -30 1367 -11 2658 -20 2870 -21 219
0 376 -4 365 -9 -11 -4 -245 -24 -520 -44 -275 -20 -1074 -79 -1775 -131 -701
-52 -2182 -163 -3290 -245 -1421 -106 -2028 -155 -2060 -165 -101 -34 -169
-117 -156 -189 7 -36 47 -79 88 -95 55 -21 1672 -81 2993 -111 1808 -41 4170
-41 5945 0 998 23 1660 45 2710 91 500 21 535 26 608 79 77 56 99 146 48 199
-55 57 -88 59 -601 36 -2712 -120 -5554 -153 -8293 -98 -177 3 -320 8 -318 10
2 2 667 53 1477 114 6938 516 7095 528 7139 544 69 24 117 63 141 111 41 85 0
152 -103 173 -51 11 -989 19 -9298 81 -1455 10 -2845 21 -3090 23 -245 2 -458
1 -475 -3z"
              />
            </g>
          </svg>
        </h1>

        <div className="proj-carousel">
          <AnimatePresence initial={false}>
            <motion.div
              key={Indices[0]}
              className="carousel-item CIa"
              variants={CarouselVariants}
              initial={nextDir ? "center" : "leftOut"}
              animate="left"
              exit="leftOut"
            >
              {carouselItems[Indices[0]]}
            </motion.div>
            <motion.div
              key={Indices[1]}
              className="carousel-item CIb"
              variants={CarouselVariants}
              initial={nextDir ? "right" : "left"}
              animate="center"
            >
              {carouselItems[Indices[1]]}
            </motion.div>
            <motion.div
              key={Indices[2]}
              className="carousel-item CIc"
              variants={CarouselVariants}
              initial={nextDir ? "rightOut" : "center"}
              animate="right"
              exit={"rightOut"}
            >
              {carouselItems[Indices[2]]}
            </motion.div>
          </AnimatePresence>

          <div className="carouselBtns">
            <motion.button 
            initial={{scale: 1, opacity: 0.8}}
            whileHover={{ scale: 1.2, opacity: 1}}
            whileTap={{scale: 0.8}}
            transition={{
              duration: 0.1,
              
              ease: "easeInOut"
            }}
            className="carouselBtn" onClick={handlePrev}>
              {"⮜"}
            </motion.button>
            <motion.button 
            initial={{scale: 1, opacity: 0.8}}
            whileHover={{ scale: 1.2, opacity: 1}}
            whileTap={{scale: 0.8}}
            transition={{
              duration: 0.1,
              
              ease: "easeInOut"
            }}
            className="carouselBtn" onClick={handleNext}>
              {"⮞"}
            </motion.button>
          </div>
          {/*<div className="leftBlur"></div>
          <div className="rightBlur"></div>
          <div className="leftBlack"></div>
          <div className="rightBlack"></div>*/}
        </div>
      </div>
    </>
  );
}
