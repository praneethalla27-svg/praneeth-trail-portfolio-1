import React, { useState, useEffect } from "react";
import { navLinks } from "../assest";
import { NavLink } from "react-router";
import menu from "../menu.png";
import close from "../close.png";

import { motion, useScroll, useMotionValueEvent } from "motion/react";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuopen, setMenuopen] = useState(false);

  // Detect mobile screen
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);

      if (window.innerWidth >= 640) {
        setMenuopen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect scrolling
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldScroll = latest > 20;

    setScrolled((prev) => (prev === shouldScroll ? prev : shouldScroll));
  });

  return (
    <div className="flex relative w-full">
      {/* Desktop & Mobile Navbar */}

      <motion.div
        animate={{
          width: isMobile ? "100%" : scrolled ? "60%" : "100%",

          borderRadius: isMobile ? "0px" : scrolled ? "12px" : "0px",

          y: scrolled ? 8 : 0,

          backgroundColor: scrolled
            ? "rgba(244, 241, 233, 0.88)"
            : "rgba(244, 241, 233, 0)",

          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",

          WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(0px)",

          border: scrolled
            ? "1px solid rgba(23, 23, 23, 0.15)"
            : "1px solid transparent",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className={`
          w-full mx-auto inset-x-0
          py-3 px-7 text-[#171717]
          fixed z-30 top-0 left-0

          ${scrolled ? "shadow-[0_4px_0px_rgba(23,23,23,0.08)]" : ""}
        `}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}

          <div className="text-[1.5rem] sm:text-[1.2rem] md:text-[1.6rem] font-nohemi font-black tracking-tight">
            Praneeth
            <span className="text-[#365CFF]">.</span>
          </div>

          {/* Desktop Navigation */}

          <div
            className="flex md:gap-4 sm:gap-3 font-nohemi font-semibold text-md max-sm:hidden"
            onMouseLeave={() => setHovered(null)}
          >
            {navLinks.map((nav, idx) => (
              <NavLink
                className="relative py-1 px-3"
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                to={nav.url}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? "text-white" : "text-[#171717]"
                      }`}
                    >
                      {nav.name}
                    </span>

                    {(hovered === idx || isActive) && (
                      <motion.span
                        layoutId="hovered-span"
                        className={`absolute inset-0 rounded-sm ${
                          isActive ? "bg-[#365CFF]" : "bg-[#FFE65C]"
                        } shadow-[3px_3px_0px_#171717]`}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}

          <div className="hidden max-sm:block">
            <img
              onClick={() => setMenuopen(true)}
              src={menu}
              alt="Open menu"
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}

      <motion.div
        initial={false}
        animate={{
          width: menuopen ? "100%" : "0%",
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          z-40 top-0 left-0
          h-screen fixed
          bg-[#F4F1E9]
          flex flex-col
          justify-center items-center
          gap-5
          overflow-hidden
          font-nohemi font-bold
          text-4xl
          sm:hidden
        "
      >
        {navLinks.map((nav, idx) => (
          <NavLink
            className="relative w-fit py-2 px-6"
            key={idx}
            to={nav.url}
            onClick={() => setMenuopen(false)}
          >
            {({ isActive }) => (
              <>
                <span
                  className={`relative z-10 ${
                    isActive ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {nav.name}
                </span>

                {isActive && (
                  <span className="absolute bg-[#365CFF] inset-0 shadow-[4px_4px_0px_#171717]" />
                )}
              </>
            )}
          </NavLink>
        ))}

        {/* Close Button */}

        <button
          onClick={() => setMenuopen(false)}
          aria-label="Close menu"
          className="
            absolute top-5 right-5
            w-12 h-12
            flex items-center justify-center
            bg-[#FFE65C]
            border-2 border-[#171717]
            shadow-[3px_3px_0px_#171717]
          "
        >
          <img src={close} alt="" className="w-6 h-6" />
        </button>

        {/* Mobile Footer */}

        <p
          className="
          absolute bottom-8
          text-xs font-medium
          tracking-widest text-[#777777]
        "
        >
          PRANEETH ALLA © 2026
        </p>
      </motion.div>
    </div>
  );
};

export default Navbar;
