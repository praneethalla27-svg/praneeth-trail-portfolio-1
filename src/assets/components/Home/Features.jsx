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
      className="w-full"
    >
      <motion.div
        className="
      grid
      grid-cols-2
      lg:grid-cols-5
      w-full
      bg-zinc-950
      shadow-[0_1px_1px_rgba(255,255,255,0.08),0_4px_6px_rgba(0,0,0,0.3),0_24px_68px_rgba(0,0,0,0.5)]
    "
      >
        {fields.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVar}
            onMouseEnter={() => setbgColor(idx)}
            onMouseLeave={() => setbgColor(null)}
            animate={{
              backgroundColor:
                bgColor === idx && idx % 2 === 0 ? "#D7FF5F" : "#09090B",
            }}
            whileHover={{
              textShadow: "0 0 20px rgba(215,255,95,0.6)",
            }}
            className=" lg:h-50 py-3 px-4 lg:aspect-auto aspect-square sm:aspect-2/1 as border border-white/15 bg-zinc-950"
          >
            {/* FIELD */}
            <motion.div
              animate={{
                color: bgColor === idx && idx % 2 === 0 ? "#09090B" : "#D7FF5F",
              }}
              className="
            text-xs
            font-medium
            tracking-wide
          "
            >
              {item.field}
            </motion.div>

            {/* FIELD NAME */}
            <div className="flex items-center justify-center h-full">
              <motion.h1
                animate={{
                  color:
                    bgColor === idx && idx % 2 === 0 ? "#09090B" : "#D7FF5F",
                }}
                className="
            text-xl
            md:text-2xl
            font-black
          "
              >
                {item.fieldName}
              </motion.h1>
            </div>
          </motion.div>
        ))}

        {/* EMPTY MOBILE BOX */}
        {/* <div
          className="
        aspect-square
        bg-zinc-800/80
        border
        border-white/15
        lg:hidden
      "
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default Features;
