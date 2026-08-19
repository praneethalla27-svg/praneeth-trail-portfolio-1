import React from "react";
import { easeInOut, motion } from "motion/react";
import { expert } from "../../assest";

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
      className="md:w-2xl sm:w-xl bg-black min-h-100 text-white px-7 py-5 pb-12 flex flex-col shadow-[0_1px_1px_rgba(255,255,255,0.08),0_4px_6px_rgba(0,0,0,0.3),0_24px_68px_rgba(0,0,0,0.5),0_2px_3px_rgba(255,255,255,0.04)]"
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
        <p className="text-[12px] text-[#979D97] font-medium">
          HOME / PORTFOLIO
        </p>

        <p className="text-[12px] text-[#979D97] font-medium">PORTFOLIO-1</p>
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
        <h1 className="text-[#D7FF5F] md:text-[48px] sm:text-[35px] text-4xl font-black">
          Praneeth Alla.
        </h1>

        <h1 className="md:text-[40px] sm:text-[34px] text-4xl font-bold">
          Making the web less boring.
        </h1>

        <h1 className="md:text-[43px] sm:text-[37px] text-4xl font-bold text-[#D7FF5F]">
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
        className="flex max-sm:flex-col w-full md:gap-3 sm:gap-6 gap-3 sm:mt-7 mt-5"
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
          {/* Button */}
          <motion.div className="relative sm:px-5 sm:py-4 px-2 sm:w-fit py-3 uppercase rounded bg-[#087F5B] text-neutral-800 font-semibold sm:text-sm text-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.12),0_12px_24px_rgba(0,0,0,0.14),0_24px_48px_rgba(0,0,0,0.10)]">
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
          {/* Button */}
          <motion.div className="relative sm:px-5 sm:py-4 px-2 sm:w-fit py-3 uppercase rounded bg-zinc-950 border border-white font-medium sm:text-sm text-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.12),0_12px_24px_rgba(0,0,0,0.14),0_24px_48px_rgba(0,0,0,0.10)]">
            Machine Learning
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="mt-5 flex flex-col gap-2">
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 text-[#979D97]"
          className="text-[#979D97] uppercase text-[10px]"
        >
          <span className="text-[#D7FF5F] pr-2"> ^</span>expert in:
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3 text-[#979D97]"
        >
          {expert.map((exp, idx) => (
            <div className="border border-[#979D97] hover:invert bg-zinc-950 transition-all duration-600 flex items-center gap-1 w-fit px-4 py-2">
              <img src={exp.expertImg} alt="" className="w-5 h-5" />
              <span className="text-[12px]">{exp.expertname}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Namebox;
