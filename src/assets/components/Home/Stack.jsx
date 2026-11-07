import React, { useState } from "react";
import { motion } from "motion/react";
import { stack } from "../../assest";

const accentColors = [
  "#365CFF", // Cobalt blue
  "#FFE65C", // Butter yellow
  "#FF82AD", // Coral pink
];

const Stack = () => {
  const [bgColor, setBgColor] = useState(null);

  const containerVar = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
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
      {/* Tech Stack Grid */}

      <motion.div
        className="
          grid lg:grid-cols-5 grid-cols-2
          w-full
          border-2 border-[#171717]
          bg-[#F4F1E9]
          shadow-[7px_7px_0px_#171717]
        "
      >
        {stack.map((item, idx) => {
          const isHovered = bgColor === idx;
          const accent = accentColors[idx % accentColors.length];

          return (
            <motion.div
              key={idx}
              onMouseEnter={() => setBgColor(idx)}
              onMouseLeave={() => setBgColor(null)}
              variants={cardVar}
              animate={{
                backgroundColor: isHovered ? accent : "#F4F1E9",
                color: isHovered ? "#171717" : "#171717",
              }}
              whileHover={{
                y: -4,
                boxShadow: "4px 4px 0px #171717",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                relative
                lg:h-50
                py-3 px-4
                lg:aspect-auto
                aspect-square
                sm:aspect-2/1
                border-r-2 border-b-2
                border-[#171717]
                cursor-pointer
                overflow-hidden
              "
            >
              {/* Field Label */}

              <motion.div
                animate={{
                  color: "#171717",
                }}
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                "
              >
                {item.field}
              </motion.div>

              {/* Technology Name */}

              <div
                className="
                flex justify-center
                items-center h-full
              "
              >
                <motion.h2
                  animate={{
                    scale: isHovered ? 1.08 : 1,
                    color: "#171717",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    text-center
                    md:text-2xl
                    text-xl
                    font-black
                    tracking-tight
                  "
                >
                  {item.fieldName}
                </motion.h2>
              </div>

              {/* Index Number */}

              <span
                className="
                absolute bottom-3 right-4
                text-[10px]
                font-bold
                opacity-50
              "
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Stack;
