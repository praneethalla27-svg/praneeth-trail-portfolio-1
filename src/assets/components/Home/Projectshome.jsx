import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projectData } from "../../assest";
import arrow from "../../images/arrow.svg";

const Projectshome = () => {
  // const technologies = [
  //   { image: html, name: "HTML" },
  //   { image: css, name: "CSS" },
  //   { image: js, name: "JavaScript" },
  // ];

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-fit mx-auto justify-items-center gap-10 sm:gap-20 md:px-7">
      {projectData.map((project, idx) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, x: 5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              group w-full max-w-80 h-[30rem] relative overflow-hidden
              rounded-2xl bg-zinc-100
              shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.10),0_24px_48px_rgba(0,0,0,0.08)]
            "
          >
            {/* Browser Header */}
            <div className="px-4 pt-3">
              <div className="flex items-center justify-between border-b border-[#979D97] pb-2">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                </div>

                {/* Project name */}
                <span className="text-[11px] font-semibold tracking-tight">
                  {project.heading}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pt-3">
              {/* Project preview */}
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src={project.projectImg}
                  alt="Portfolio project preview"
                  className="block w-full object-cover"
                />
              </div>

              {/* Project title */}
              <div className="relative mt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {project.projectNumber}
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-950">
                  {project.desc}
                </h1>
              </div>

              {/* Description / label */}
              <div className="mt-4 w-fit rounded-lg bg-zinc-950 px-5 py-3">
                <p className="text-sm font-medium text-[#D7FF5F]">
                  {project.tag}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-5 flex items-center">
                {project.skills.map((skills, index) => (
                  <motion.div
                    key={index}
                    className="relative z-10"
                    initial="initial"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 10,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                      hover: {},
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                  >
                    {/* ICON */}
                    <motion.img
                      src={skills}
                      alt={skills}
                      className={`
                        relative z-10 h-10 w-10 rounded-xl
                        bg-zinc-100 object-contain p-1 shadow-sm
                        ${index !== 0 ? "-ml-2" : ""}
                      `}
                      variants={{
                        initial: {
                          scale: 1,
                        },
                        visible: {
                          scale: 1,
                        },
                        hover: {
                          y: -5,
                          scale: 1.1,
                          rotate: index % 2 === 0 ? -4 : 4,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    />

                    {/* TOOLTIP */}
                    <motion.span
                      className="
                        pointer-events-none absolute top-full left-1/2 z-50
                        mt-2 -translate-x-1/2 whitespace-nowrap
                        rounded-md bg-zinc-950 px-2 py-1
                        text-[9px] font-semibold uppercase tracking-wider text-white
                      "
                      variants={{
                        initial: {
                          opacity: 0,
                          y: -5,
                          scale: 0.9,
                        },
                        visible: {
                          opacity: 0,
                          y: -5,
                          scale: 0.9,
                        },
                        hover: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {project.skillsNames[index]}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 right-10">
              <img
                src={arrow}
                alt=""
                className="h-11 w-11 rounded-full p-1 transition-all delay-300 duration-500 ease-in-out group-hover:rotate-180 hover:bg-neutral-200"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projectshome;
