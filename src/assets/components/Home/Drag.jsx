import React from "react";
import { easeInOut, motion } from "motion/react";

const Drag = ({ rotate, right, top, x, question, answer, tag }) => {
  const colors = [
    {
      bg: "#FFE65C",
      text: "#171717",
      muted: "#555555",
    },
    {
      bg: "#365CFF",
      text: "#FFFFFF",
      muted: "#DCE3FF",
    },
    {
      bg: "#FF82AD",
      text: "#171717",
      muted: "#555555",
    },
    {
      bg: "#F4F1E9",
      text: "#171717",
      muted: "#777777",
    },
  ];

  // Assign color based on card position
  const colorIndex = Math.abs(Math.floor(right / 100)) % colors.length;
  const theme = colors[colorIndex];

  return (
    <motion.div
      drag
      dragElastic={1}
      dragConstraints={{
        top: -400,
        left: -1000,
        right: 400,
        bottom: 150,
      }}
      className="
        sm:w-55 sm:h-40
        w-45 h-30
        ml-20 pb-3
        max-sm:hidden
        cursor-grab active:cursor-grabbing
        border-2 border-[#171717]
        px-3
        absolute top-10
        shadow-[6px_6px_0px_#171717]
        hover:shadow-[9px_9px_0px_#171717]
        transition-shadow duration-200
      "
      initial={{
        opacity: 0,
        rotate: 0,
        x: x,
      }}
      animate={{
        opacity: 1,
        rotate: rotate,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.6,
        ease: easeInOut,
      }}
      style={{
        top: `${top}px`,
        right: `${right}px`,
        backgroundColor: theme.bg,
        color: theme.text,
        zIndex: 10,
      }}
      whileDrag={{
        scale: 1.05,
        rotate: rotate + 3,
        cursor: "grabbing",
        zIndex: 50,
      }}
    >
      {/* Card Header */}

      <div
        className="
          flex justify-between items-center
          py-1 border-b-2
        "
        style={{
          borderColor: theme.text,
        }}
      >
        {/* Window Dots */}

        <div className="flex gap-1 w-full py-2">
          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full" />
          <div className="w-2 h-2 bg-[#365CFF] rounded-full" />
          <div className="w-2 h-2 bg-[#79C99E] rounded-full" />
        </div>

        {/* Tag */}

        <div
          className="
            text-[10px]
            font-black
            uppercase
            tracking-wider
            px-2 whitespace-nowrap
          "
          style={{
            color: theme.muted,
          }}
        >
          {tag}
        </div>
      </div>

      {/* Card Content */}

      <div className="mt-3">
        <h1
          className="
            font-black
            text-base sm:text-lg
            tracking-tight
            leading-tight
          "
          style={{
            color: theme.text,
          }}
        >
          {question}
        </h1>

        <h5
          className="
            text-base sm:text-xl
            font-bold
            mt-1
            tracking-tight
          "
          style={{
            color: theme.text,
          }}
        >
          {answer}
        </h5>
      </div>

      {/* Decorative Index */}

      <span
        className="
          absolute bottom-2 right-3
          text-[9px] font-black opacity-40
        "
        style={{
          color: theme.text,
        }}
      >
        DRAG ↗
      </span>
    </motion.div>
  );
};

export default Drag;
