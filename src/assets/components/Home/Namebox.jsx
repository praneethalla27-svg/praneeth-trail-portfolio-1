import React from "react";
import { easeInOut, motion } from "motion/react";

const Namebox = () => {
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
      className="md:w-2xl sm:w-xl bg-black sm:min-h-90 text-white px-7 py-5 pb-12 flex flex-col shadow-[0_1px_1px_rgba(255,255,255,0.08),0_4px_6px_rgba(0,0,0,0.3),0_24px_68px_rgba(0,0,0,0.5),0_2px_3px_rgba(255,255,255,0.04)]"
    >
      {/* caption for the box */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.25,
          duration: 0.5,
          ease: easeInOut,
        }}
        className="flex justify-between items-center"
      >
        <p className="sm:text-[11px] text-[8px] text-[#979D97] font-medium">
          HOME / PORTFOLIO
        </p>

        <p className="sm:text-[11px] text-[8px] text-[#979D97] font-medium">
          PORTFOLIO-1
        </p>
      </motion.div>

      {/* name in the box */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.35,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col mt-7"
      >
        <h1 className="text-[#D7FF5F] md:text-[48px] sm:text-[35px] text-[25px] font-black">
          Praneeth Alla.
        </h1>

        <h1 className="md:text-[40px] sm:text-[34px] text-[15px] font-bold">
          Making the web less boring.
        </h1>

        <h1 className="md:text-[43px] sm:text-[37px] text-[17px] font-bold">
          Building things with character.
        </h1>
      </motion.div>

      {/* my job title */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.55,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex md:gap-3 sm:gap-6 gap-7 sm:mt-7 mt-5"
      >
        {/* Full Stack Developer */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.7,
            duration: 0.5,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          className="relative"
        >
          {/* 3D depth */}
          <div className="absolute inset-0 sm:translate-x-2 sm:translate-y-2 translate-x-1 translate-y-1 rounded bg-[#D7FF5F]" />

          {/* Button */}
          <motion.div
            whileHover={{
              y: 4,
              x: 3,
            }}
            transition={{
              duration: 0.03,
              ease: easeInOut,
            }}
            className="relative sm:px-5 sm:py-4 px-2 py-1 rounded bg-[#087F5B] font-bold sm:text-sm text-[12px]"
          >
            Full Stack Developer
          </motion.div>
        </motion.div>

        {/* Machine Learning Engineer */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.85,
            duration: 0.5,
            type: "spring",
            stiffness: 180,
            damping: 14,
          }}
          className="relative"
        >
          {/* 3D depth */}
          <div className="absolute inset-0 sm:translate-x-2 sm:translate-y-2 translate-x-1 translate-y-1 rounded bg-[#D7FF5F]" />

          {/* Button */}
          <motion.div
            whileHover={{
              y: 4,
              x: 3,
            }}
            transition={{
              duration: 0.03,
              ease: easeInOut,
            }}
            className="relative sm:px-5 sm:py-4 px-2 py-1 rounded  bg-[#087F5B] font-bold sm:text-sm text-[12px]"
          >
            Machine Learning Engineer
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Namebox;
