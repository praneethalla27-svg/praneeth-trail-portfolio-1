import React, { useState } from "react";
import { motion } from "motion/react";
import { fields } from "../../assest";

const accentColors = ["#365CFF", "#FFE65C", "#FF82AD"];

const Features = () => {
  const [bgColor, setBgColor] = useState(null);

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
          grid grid-cols-2 lg:grid-cols-5
          w-full
          border-2 border-[#171717]
          bg-[#F4F1E9]
          shadow-[7px_7px_0px_#171717]
        "
      >
        {fields.map((item, idx) => {
          const isHovered = bgColor === idx;

          return (
            <motion.div
              key={idx}
              variants={cardVar}
              onMouseEnter={() => setBgColor(idx)}
              onMouseLeave={() => setBgColor(null)}
              animate={{
                backgroundColor: isHovered
                  ? accentColors[idx % accentColors.length]
                  : "#F4F1E9",
              }}
              whileHover={{
                textShadow: "none",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                lg:h-50 py-3 px-4
                lg:aspect-auto
                aspect-square
                sm:aspect-2/1
                border border-[#171717]
                bg-[#F4F1E9]
                cursor-pointer
              "
            >
              {/* FIELD */}

              <motion.div
                className="
                  text-xs
                  font-bold
                  tracking-wide
                  text-[#171717]
                "
              >
                {item.field}
              </motion.div>

              {/* FIELD NAME */}

              <div className="flex items-center justify-center h-full">
                <motion.h1
                  animate={{
                    color: "#171717",
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    text-xl
                    md:text-2xl
                    font-black
                    text-[#171717]
                  "
                >
                  {item.fieldName}
                </motion.h1>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Features;
