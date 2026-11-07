import React from "react";
import { motion } from "motion/react";
import { projectData } from "../../assest";
import arrow from "../../images/arrow.svg";

const Projectshome = () => {
  return (
    <div
      className="
      grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2
      w-fit mx-auto justify-items-center
      gap-10 sm:gap-12 md:px-7
    "
    >
      {projectData.map((project, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, x: 3 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="
              group w-full max-w-80 min-h-[30rem]
              relative overflow-visible
              border-2 border-[#171717]
              bg-[#F4F1E9]
              text-[#171717]
              shadow-[6px_6px_0px_#171717]
              hover:shadow-[9px_9px_0px_#365CFF]
              transition-shadow duration-300
            "
          >
            {/* Browser Header */}

            <div className="px-4 pt-3">
              <div
                className="
                flex items-center justify-between
                border-b-2 border-[#171717]
                pb-3
              "
              >
                {/* Traffic Lights */}

                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFE65C]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#79C99E]" />
                </div>

                {/* Project Name */}

                <span
                  className="
                  text-[11px] font-bold
                  tracking-tight text-[#171717]
                "
                >
                  {project.heading}
                </span>
              </div>
            </div>

            {/* Project Content */}

            <div className="px-4 pt-4">
              {/* Project Preview */}

              <div
                className="
                overflow-hidden
                border-2 border-[#171717]
                bg-white
              "
              >
                <motion.img
                  src={project.projectImg}
                  alt={`${project.heading} project preview`}
                  className="
                    block w-full aspect-[4/3]
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Project Title */}

              <div className="relative mt-5">
                <p
                  className="
                  text-[11px] font-black
                  uppercase tracking-[0.18em]
                  text-[#365CFF]
                "
                >
                  {project.projectNumber}
                </p>

                <h2
                  className="
                  mt-1 text-2xl
                  font-black tracking-tight
                  text-[#171717]
                "
                >
                  {project.desc}
                </h2>
              </div>

              {/* Project Tag */}

              <div
                className="
                mt-4 w-fit
                bg-[#FFE65C]
                border-2 border-[#171717]
                px-4 py-2
                shadow-[3px_3px_0px_#171717]
              "
              >
                <p
                  className="
                  text-sm font-bold
                  text-[#171717]
                "
                >
                  {project.tag}
                </p>
              </div>

              {/* Technologies */}

              <div className="mt-6 flex items-center">
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
                    {/* Technology Icon */}

                    <motion.img
                      src={skills}
                      alt={project.skillsNames[index]}
                      className={`
                        relative z-10
                        h-10 w-10
                        border-2 border-[#171717]
                        bg-[#F4F1E9]
                        object-contain p-1
                        shadow-[2px_2px_0px_#171717]
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

                    {/* Technology Tooltip */}

                    <motion.span
                      className="
                        pointer-events-none
                        absolute top-full left-1/2 z-50
                        mt-3 -translate-x-1/2
                        whitespace-nowrap
                        border-2 border-[#171717]
                        bg-[#171717]
                        px-2 py-1
                        text-[9px] font-bold
                        uppercase tracking-wider
                        text-[#FFE65C]
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

            {/* Project Arrow */}

            <div
              className="
              absolute bottom-7 right-5
              flex items-center justify-center
              h-11 w-11
              border-2 border-[#171717]
              bg-[#365CFF]
              shadow-[3px_3px_0px_#171717]
              transition-all duration-300
              group-hover:bg-[#FFE65C]
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            >
              <img
                src={arrow}
                alt="View project"
                className="
                  h-6 w-6
                  brightness-0 invert
                  transition-all duration-300
                  group-hover:brightness-0
                  group-hover:invert-0
                  group-hover:rotate-[-45deg]
                "
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projectshome;
