import React,{useRef, useEffect} from "react";
import "./About.css";
import { motion ,useInView ,useAnimation} from "framer-motion";

export default function About() {

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef);

  const controls = useAnimation();


  useEffect(() => {
    console.log("Element is in view: ", aboutInView);
    if(aboutInView){
      controls.start("show");
      controls.start("reveal");
    }
    
  }, [aboutInView])

  return (
    <>
      <svg
        id="visual"
        style={{position: "relative"}}
        viewBox="5 515 890 40"
        className="waveOne"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 517L21.5 523C43 529 86 541 128.8 541.5C171.7 542 214.3 531 257.2 525.8C300 520.7 343 521.3 385.8 525C428.7 528.7 471.3 535.3 514.2 532.3C557 529.3 600 516.7 642.8 519.8C685.7 523 728.3 542 771.2 544.8C814 547.7 857 534.3 878.5 527.7L900 521L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#0b0b0b"
          stroke="#eeeeee" stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <div className="about-cont">
        <motion.div 
        variants={{
          show:{
            x:0,
            y:0,
            opacity: 1
          }
        }}

        initial={{
          x:"-100px",
          y:"-20px",
          opacity: 0
        }}

        animate={controls}

        transition={{
          duration:0.5,
          ease:"backInOut"
        }}
        
        
        className="about-text">
          <h1 className="about-head">
            About
            <svg
              className="about-scribble"
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
          <h3 className="aboutInner-text">
            As a passionate full-stack developer, I specialize in building
            robust and innovative web applications.{" "}
            {/*I thrive on solving complex
            problems and enjoy creating seamless user experiences. With a strong
  foundation in both frontend and backend development, */}
            I'm skilled in a variety of languages, frameworks, and tools.
          </h3>
          <ul ref={aboutRef} className="skillist">
            <li>
              Languages: Python, Java, C, JavaScript, Node.js, HTML, CSS, EJS
            </li>

            <li>Frameworks: React.js, Express.js, Bootstrap</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Developer Tools: Git, AWS, Postman</li>
            <li>Other: JSON, Video Editing, Photo Shop, Adobe Illustrator</li>
          </ul>
        </motion.div>
        <div className="about-img">
          <div className="skills skillsa">
            <motion.div 
            
            variants={{
              reveal: {
                opacity: 1
              }
            }}

            initial={{
              opacity:0
            }}

            animate={controls}

            transition={{
              duration: 1,
              delay: 0
            }}
            

            className="skill">
              <img
                className="skillImage"
                src="/skills/python.png"
                alt="python"
              />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#655DBB" />
                  <stop offset="50%" stop-color="#AF2655" />
                  <stop offset="100%" stop-color="#DC5F00" />
                </linearGradient>
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.8
                        }}
                        
            
            className="skill">
              <img
                style={{ borderRadius: "30px" }}
                className="skillImage"
                src="/skills/js.png"
                alt="python"
              />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.7
                        }}
                        
            
            className="skill">
              <img className="skillImage" src="/skills/java.png" alt="python" />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
          </div>
          <div className="skills skillsb">
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.1
                        }}
                        
            
            className="skill">
              <img
                className="skillImage"
                src="/skills/nodejs.png"
                alt="python"
              />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.9
                        }}
                        
            
            className="skill">
              <img
                className="skillImage"
                src="/skills/react.png"
                alt="python"
              />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 1
                        }}
                        
            
            className="skill">
              <img className="skillImage" src="/skills/html.png" alt="python" />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.6
                        }}
                        
            
            className="skill">
              <img className="skillImage" src="/skills/css.png" alt="python" />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
          </div>
          <div className="skills skillsc">
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.3
                        }}
                        
            
            className="skill">
              <img
                className="skillImage"
                src="/skills/mysql.png"
                alt="python"
              />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.4
                        }}
                        
            
            className="skill">
              <img
                className="skillImage"
                src="/skills/mongodb.png"
                alt="python"
              />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
            <motion.div 
                        
                        variants={{
                          reveal: {
                            opacity: 1
                          }
                        }}
            
                        initial={{
                          opacity:0
                        }}
            
                        animate={controls}
            
                        transition={{
                          duration: 1,
                          delay: 0.5
                        }}
                        
            
            className="skill">
              <img className="skillImage" src="/skills/git.png" alt="python" />
              <svg
                className="hexaGon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="10 10 80 80"
                x="0px"
                y="0px"
              >
                <path
                  fill="url(#my-cool-gradient)"
                  d="m27.898 82.602c1 1.6992 2.8984 2.8008 4.8984 2.8008h34.398c2 0 3.8984-1.1016 4.8984-2.8008l17.199-29.699c1-1.6992 1-3.8984 0-5.6992l-17.191-29.805c-1-1.6992-2.8984-2.8008-4.8984-2.8008l-34.402 0.003906c-2 0-3.8984 1.1016-4.8984 2.8008l-17.102 29.797c-1 1.6992-1 3.8984 0 5.6992zm-15.199-34.301 17.199-29.699c0.60156-1 1.6992-1.6992 2.8984-1.6992h34.398c1.1992 0 2.3008 0.69922 2.8984 1.6992l17.199 29.699c0.60156 1 0.60156 2.3008 0 3.3984l-17.191 29.699c-0.60156 1-1.6992 1.6992-2.8984 1.6992l-34.402 0.003906c-1.1992 0-2.3008-0.69922-2.8984-1.6992l-17.203-29.703c-0.59766-1.0977-0.59766-2.3008 0-3.3984z"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
