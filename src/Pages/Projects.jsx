import React from "react";
import { motion } from "motion/react";
import { projectPageData } from "../assets/assest";
import arrow from "../assets/images/arrow.svg";

const Projects = () => {
  const accents = [
    {
      number: "text-[#365CFF]",
      tag: "bg-[#365CFF] text-[#F4F1E9]",
      arrow: "group-hover:bg-[#FFE65C]",
    },
    {
      number: "text-[#FF82AD]",
      tag: "bg-[#FFE65C] text-[#171717]",
      arrow: "group-hover:bg-[#FF82AD]",
    },
    {
      number: "text-[#365CFF]",
      tag: "bg-[#FF82AD] text-[#171717]",
      arrow: "group-hover:bg-[#365CFF]",
    },
    {
      number: "text-[#FF82AD]",
      tag: "bg-[#365CFF] text-[#F4F1E9]",
      arrow: "group-hover:bg-[#FFE65C]",
    },
  ];

  return (
    <div className="mt-20 w-full min-h-screen bg-[#F4F1E9] py-30">
      <div className="mx-auto w-full max-w-7xl columns-1 gap-6 px-5 sm:columns-2 lg:columns-3">
        {projectPageData.map((project, idx) => {
          const accent = accents[idx % accents.length];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, x: 5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`group w-full max-w-80 h-[30rem] mt-10 relative overflow-hidden
                border-2 border-[#171717] bg-[#F4F1E9]
                ${idx % 4 === 0 ? "min-h-[33rem]" : ""}
                ${idx % 4 === 1 ? "min-h-[34rem]" : ""}
                ${idx % 4 === 2 ? "min-h-[35rem]" : ""}
                ${idx % 4 === 3 ? "min-h-[26rem]" : ""}
                shadow-[6px_6px_0px_#171717]
              `}
            >
              {/* Browser Header */}
              <div className="px-4 pt-3">
                <div className="flex items-center justify-between border-b-2 border-[#171717] pb-2">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 border border-[#171717] rounded-full bg-[#FF82AD]" />
                    <span className="h-2.5 w-2.5 border border-[#171717] rounded-full bg-[#FFE65C]" />
                    <span className="h-2.5 w-2.5 border border-[#171717] rounded-full bg-[#365CFF]" />
                  </div>

                  {/* Project name */}
                  <span className="text-[11px] font-bold tracking-tight text-[#171717]">
                    {project.heading}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pt-3">
                {/* Project Preview */}
                <div className="overflow-hidden border-2 border-[#171717]">
                  <motion.img
                    src={project.projectImg}
                    alt="Portfolio project preview"
                    className="block w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Title */}
                <div className="relative mt-5">
                  <p
                    className={`text-[11px] font-black uppercase tracking-[0.18em] ${accent.number}`}
                  >
                    {project.projectNumber}
                  </p>

                  <h1 className="mt-1 text-2xl font-black tracking-tight text-[#171717]">
                    {project.desc}
                  </h1>
                </div>

                {/* Description / Label */}
                <div
                  className={`mt-4 w-fit border-2 border-[#171717] px-5 py-3 ${accent.tag}`}
                >
                  <p className="text-sm font-bold uppercase">{project.tag}</p>
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
                        alt={project.skillsNames[index] || "Technology"}
                        className={`
                          relative z-10 h-10 w-10 border-2 border-[#171717]
                          bg-[#F4F1E9] object-contain p-1
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
                          border-2 border-[#171717]
                          bg-[#171717] px-2 py-1
                          text-[9px] font-bold uppercase tracking-wider text-[#FFE65C]
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

              {/* Arrow */}
              <div className="absolute bottom-10 right-10">
                <img
                  src={arrow}
                  alt="View project"
                  className={`h-11 w-11 border-2 border-[#171717] p-1 transition-all delay-300 duration-500 ease-in-out group-hover:rotate-180 ${accent.arrow}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
