import React from "react";
import { easeInOut, motion } from "motion/react";

const Drag = ({ rotate, right, top, x, question, answer, tag }) => {
  return (
    <motion.div
      drag
      dragElastic={1}
      // dragTransition={{
      //   bounceStiffness: 700,
      //   bounceDamping: 30,
      // }}
      dragConstraints={{
        top: -400,
        left: -1000,
        right: 400,
        bottom: 150,
      }}
      className={`sm:w-55 sm:h-40 w-45 h-30 bg-black ml-20 pb-3 max-sm:hidden cursor-grab active:cursor-grabbing rounded-3xl px-3 absolute top-10 shadow-[0_1px_1px_rgba(255,255,255,0.08),0_4px_6px_rgba(0,0,0,0.3),0_24px_68px_rgba(0,0,0,0.5),0_2px_3px_rgba(255,255,255,0.04)]`}
      initial={{ opacity: 0, rotate: 0, x: x }}
      animate={{ opacity: 1, rotate: rotate, x: 0 }}
      transition={{ duration: 1, delay: 1.6, ease: easeInOut }}
      style={{
        top: `${top}px`,
        right: `${right}px`,
      }}
    >
      <div className="flex justify-between items-center py-1 border-b-2 border-[#979D97]">
        {/* all dots  */}
        <div className="flex gap-1 w-full py-2">
          {/* green dot */}
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          {/* yellow dot */}
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          {/* red dot  */}
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        </div>
        <div className="text-[10px] font-medium uppercase px-3 whitespace-nowrap text-[#979D97]">
          {tag}
        </div>
      </div>
      {/* question  */}
      <div>
        <h1 className="text-white font-bold max-sm:text-[13px]">{question}</h1>
        <h5 className="text-[#D7FF5F] text-lg max-sm:text-[20px]">{answer}</h5>
      </div>
    </motion.div>
  );
};

export default Drag;
