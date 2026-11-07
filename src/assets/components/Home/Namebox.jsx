import React, { useEffect, useState } from "react";
import { easeInOut, motion, AnimatePresence } from "motion/react";

const roles = [
  "Founder",
  "Full Stack Developer",
  "Generative AI Developer",
  "AI Engineer",
  "Machine Learning Engineer",
];

const Namebox = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{
        scaleX: 0,
        transformOrigin: "left",
      }}
      animate={{
        scaleX: 1,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-full md:w-2xl sm:w-xl
        bg-[#F4F1E9]
        text-[#171717]
        border-2 border-[#171717]
        min-h-100
        px-7 py-5 pb-12
        flex flex-col
        shadow-[8px_8px_0px_#171717]
      "
    >
      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.25,
          duration: 0.5,
          ease: easeInOut,
        }}
        className="flex justify-between items-center"
      >
        <p className="text-[12px] text-[#777777] font-semibold">
          HOME / PORTFOLIO
        </p>

        <p className="text-[12px] text-[#777777] font-semibold">PORTFOLIO-1</p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.35,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col mt-7"
      >
        <h1
          className="
          text-[#365CFF]
          text-4xl sm:text-5xl
          md:text-[58px] lg:text-[68px]
          font-black leading-tight
        "
        >
          I Make web less boring
        </h1>

        <h1
          className="
          text-[#171717]
          text-2xl sm:text-3xl md:text-[35px]
          font-bold
        "
        >
          with character.
        </h1>

        <h1
          className="
          text-[#171717]
          text-4xl sm:text-5xl md:text-[52px]
          font-black mt-2
        "
        >
          Praneeth Alla.
        </h1>
      </motion.div>

      {/* Animated Job Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.8,
          duration: 0.6,
        }}
        className="
          flex items-center gap-3
          mt-6 min-h-12
          flex-wrap
        "
      >
        <span
          className="
          text-[#777777]
          text-sm sm:text-base
          font-semibold
        "
        >
          CURRENTLY:
        </span>

        <div
          className="
          relative overflow-hidden
          h-10 flex items-center
        "
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              initial={{
                y: 25,
                opacity: 0,
                filter: "blur(5px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -25,
                opacity: 0,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[#365CFF]
                text-lg sm:text-xl md:text-2xl
                font-black whitespace-nowrap
              "
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="
          mt-5
          bg-[#FFE65C]
          border-2 border-[#171717]
          px-4 py-3
          w-fit
        "
      >
        <p className="text-[#171717] text-sm font-bold">
          BUILDING IDEAS INTO REALITY.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Namebox;
