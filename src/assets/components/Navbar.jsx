import React, { useState } from "react";
import { navLinks } from "../assest";
import { NavLink } from "react-router";
import menu from "../menu.png";
import close from "../close.png";
import {
  motion,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "motion/react";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [scrolled, setscrolled] = useState(null);
  const [menuopen, setmenuopen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldScroll = latest > 20;

    if (shouldScroll !== scrolled) {
      setscrolled(shouldScroll);
    }
  });
  return (
    <div className="flex relative w-full">
      <motion.div
        animate={{
          width: scrolled ? "60%" : "100%",
          borderRadius: scrolled ? "10px" : "0px",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.4,
          // ease: easeInOut,
        }}
        className="w-full mx-auto inset-x-0 bg-[#087F5B] py-3 px-7 text-[#D7FF5F] fixed z-30 top-0 left-0  "
      >
        {/* navbar conyain divs */}
        <div className="flex justify-between items-center">
          {/* logo div  */}
          <div className="text-[1.5rem] sm:text-[1.2rem] md:text-[1.6rem] font-nohemi font-black ">
            Praneeth Alla.
          </div>
          {/* navlinks div  */}
          <div
            className={`md:gap-4 sm:gap-3 font-nohemi font-semibold text-md max-sm:hidden`}
          >
            {navLinks.map((nav, idx) => {
              return (
                <NavLink
                  className="relative py-1 px-3"
                  key={idx}
                  onMouseEnter={() => setHovered(idx)}
                  to={nav.url}
                >
                  <span className="relative z-10">{nav.name}</span>
                  {hovered === idx && (
                    <motion.span
                      layoutId="hovered-span"
                      className="absolute bg-[#087F5B] shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.12),0_12px_24px_rgba(0,0,0,0.14),0_24px_48px_rgba(0,0,0,0.10)] inset-0 rounded"
                    ></motion.span>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </motion.div>
      {/* mobile view */}
      <motion.div
        className={`z-20 top-4 right-4 sm:hidden max-sm:block fixed ${scrolled ? "block" : "hidden"} font-nohemi font-bold`}
      >
        <img
          onClick={() => {
            setmenuopen(true);
          }}
          src={menu}
          alt=""
          className="w-7 h-7"
        />
        <div
          className={`flex flex-col bg-red-400 w-0 h-full fixed top-0 left-0 ${menuopen ? "w-full" : "w-0"} justify-center items-center text-4xl font-no gap-3 `}
        >
          {navLinks.map((nav, idx) => {
            return (
              <NavLink
                className={`relative w-fit py-1 px-6  ${menuopen ? "flex" : "hidden"}`}
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                to={nav.url}
                onClick={() => {
                  setmenuopen(false);
                }}
              >
                <span className="relative z-10">{nav.name}</span>
                <span className="absolute bg-red-300 inset-0 rounded-xl"></span>
              </NavLink>
            );
          })}
          <img
            onClick={() => {
              setmenuopen(false);
            }}
            src={close}
            alt=""
            className="w-14 h-14 absolute top-3 right-3"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
