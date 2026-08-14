import React, { useEffect, useState } from "react";
import backend from "../../backend.png";
import { motion } from "motion/react";
import { fields } from "../../assest";

const Features = () => {
  const [bgColor, setbgColor] = useState(null);

  const containerVar = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVar = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="h-full w-full"
    >
      {/* box */}
      <motion.div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 w-full bg-zinc-950 shadow-[0_1px_1px_rgba(255,255,255,0.08),0_4px_6px_rgba(0,0,0,0.3),0_24px_68px_rgba(0,0,0,0.5),0_2px_3px_rgba(255,255,255,0.04)]">
        {fields.map((item, idx) => (
          <motion.div
            onMouseEnter={() => {
              setbgColor(idx);
            }}
            onMouseLeave={() => {
              setbgColor(null);
            }}
            key={idx}
            variants={cardVar}
            animate={{
              backgroundColor:
                bgColor === idx && idx % 2 === 0 ? "#D7FF5F" : "#09090B",
            }}
            whileHover={{
              opacity: 1,
              textShadow: "0 0 20px rgba(215,255,95,0.6)",
            }}
            className=" h-50 border border-white/15 bg-zinc-950 px-3 py-4"
          >
            {/* FIELDS */}
            <motion.div
              animate={{
                color: bgColor === idx && idx % 2 === 0 ? "#09090B" : "#D7FF5F",
              }}
              className="text-[#D7FF5F] text-xs font-medium "
            >
              {item.field}
            </motion.div>
            <div className="flex justify-center items-center h-full">
              <motion.h1
                animate={{
                  color:
                    bgColor === idx && idx % 2 === 0 ? "#09090B" : "#D7FF5F",
                }}
                className="text-[#D7FF5F] lg:text-3xl font-black"
              >
                {item.fieldName}
              </motion.h1>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Features;
