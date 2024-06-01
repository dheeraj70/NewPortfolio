import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact({contact_Ref}) {
  return (
    <>
      <svg
        id="visual"
        style={{ position: "relative" }}
        viewBox="5 425 800 170"
        className="waveOne"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 517L21.5 523C43 529 86 541 128.8 541.5C171.7 542 214.3 531 257.2 525.8C300 520.7 343 521.3 385.8 525C428.7 528.7 471.3 535.3 514.2 532.3C557 529.3 600 516.7 642.8 519.8C685.7 523 728.3 542 771.2 544.8C814 547.7 857 534.3 878.5 527.7L900 521L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#0b0b0b"
          stroke="#eeeeee"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>

      <motion.h1
        // ref={projTitleRef}
        // variants={titleVariants}
        //  initial={{
        //    x: "-100px",
        //    y: "-20px",
        //    opacity: 0,
        //  }}
        //  animate={controls}
        //  transition={{
        //    delay: 0.6
        //  }}
        ref={contact_Ref}
        className="projs-head"
      >
        Contact
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
      </motion.h1>
      <div className="contact-cont">
        <h2 className="contact-head contactFirst-head">
          Have a question or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </h2>
        <h1 className="contact-head" style={{ textAlign: "center" }}>
          Don't be shy! Hit me up!
        </h1>

        <form
          action="https://formsubmit.co/tornadorush7@gmail.com"
          method="POST"
        >
          <div className="contact-form">
            <label htmlFor="name">
              <h2 class=" contact-labelFirst">Name:</h2>
            </label>

            <input class="contact-text" type="text" name="name" id="name" />

            <label htmlFor="name">
              <h2 class="contact-label">Email:</h2>
            </label>
            <input class="contact-text" type="email" name="email" id="email" />
            <label htmlFor="name">
              <h2 class="contact-label">Message:</h2>
            </label>
            <textarea
              class="contact-textArea"
              name="message"
              id="message"
              height="200px"
            ></textarea>
            <div className="submitBtnHolder">
              <motion.button
                className="contactSubmit"
                type="submit"
                variants={{
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
                }}
                initial={{
                  scale: 1,
                  backgroundColor: "#DC5F00",
                  color: "#eeeeee",
                }}
                animate={{
                  backgroundColor: "#DC5F00",
                }}
                whileHover="hover"
                whileTap={{ scale: 0.8 }}
              >
                Submit
              </motion.button>
            </div>
          </div>
        </form>
      </div>
      <div className="footer">
        <p>Copyright © 2024. All rights are reserved</p>
        <div className="socialIcons">
          <motion.svg
          onClick={()=>{
            window.open("https://github.com/dheeraj70", '_blank', 'noopener,noreferrer');
          }}
            style={{
                cursor: "pointer"
            }}
            whileHover={{
                scale: 1.2
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="40px"
            height="40px"
          >
            <path
              d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
              fill="#eeeeee"
            />
          </motion.svg>
          <motion.svg
          onClick={()=>{
            window.open("https://www.linkedin.com/in/dheeraj70", '_blank', 'noopener,noreferrer');
          }}
            style={{
                cursor: "pointer"
            }}
            whileHover={{
                scale: 1.2
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="40px"
            height="40px"
          >
            <path
              d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              fill="#eeeeee"
            />
          </motion.svg>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 2476 2476"
            id="instagram"
            onClick={()=>{
            window.open("https://www.instagram.com/dheeraj_kumar7717/", '_blank', 'noopener,noreferrer');
          }}
            style={{
                cursor: "pointer"
            }}
            whileHover={{
                scale: 1.2
            }}
          >
            <path
              d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"
              fill="#eeeeee"
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
}
