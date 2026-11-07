import React, { useRef } from "react";
import Namebox from "../assets/components/Home/Namebox";
import Drag from "../assets/components/Home/Drag";
import Features from "../assets/components/Home/Features";
import Stack from "../assets/components/Home/Stack";
import Projectshome from "../assets/components/Home/Projectshome";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import PlayHome from "../assets/components/Home/PlayHome";
import Title from "../assets/components/common/Title";

const experiences = [
  {
    number: "01",
    role: "Founder",
    company: "Praxinus Labs",
    period: "Present",
    type: "Entrepreneurship",
    description:
      "Building Praxinus Labs, exploring innovative digital products and creating technology-driven solutions.",
    color: "bg-[#365CFF] text-[#F4F1E9]",
    tag: "CURRENT",
  },
  {
    number: "02",
    role: "LLM Post-Training Intern",
    company: "Ethara AI",
    period: "Internship",
    type: "AI / Machine Learning",
    description:
      "Worked on LLM post-training and evaluation workflows, exploring model quality, performance and AI capabilities.",
    color: "bg-[#FFE65C] text-[#171717]",
    tag: "AI EXPERIENCE",
  },
  {
    number: "03",
    role: "Short-Term Intern",
    company: "IBM",
    period: "Internship",
    type: "Technology",
    description:
      "Gained industry exposure and practical experience through a short-term internship at IBM.",
    color: "bg-[#FF82AD] text-[#171717]",
    tag: "INTERNSHIP",
  },
  {
    number: "04",
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2023 — 2025",
    type: "Freelance",
    description:
      "Designed and developed websites, portfolios and digital experiences for 20+ clients, focusing on responsive layouts and user-friendly interfaces.",
    color: "bg-[#F4F1E9] text-[#171717]",
    tag: "20+ CLIENTS",
  },
];

const Home = () => {
  const homeRef = useRef();
  const navigate = useNavigate();

  return (
    <div
      ref={homeRef}
      className="min-h-screen w-full bg-transparent py-4 font-nohemi"
    >
      {/* HERO */}
      <div className="md:mt-40 mt-30 items-end w-full">
        <Namebox />

        <Drag
          rotate={-20}
          right={300}
          top={400}
          x={-125}
          question={"Graduate?"}
          answer={"Yeah 2026"}
          tag={"question-2"}
        />

        <Drag
          rotate={10}
          right={40}
          top={100}
          x={125}
          question={"Do you make websites?"}
          answer={"Yes i do make"}
          tag={"question-1"}
        />
      </div>

      {/* FEATURES */}
      <div className="mt-15">
        <div className="mb-5 w-fit bg-[#F4F1E9] px-4 py-2 font-nohemi text-[11px] font-medium text-[#365CFF] shadow-[4px_4px_0px_#171717]">
          PORTFOLIO-1 / HOME /{" "}
          <span className="font-bold text-[#171717]">FIELDS</span>
        </div>

        <Features />
      </div>

      {/* STACK */}
      <div className="mt-16 sm:mt-20">
        <div className="mb-5 w-fit bg-[#F4F1E9] px-4 py-2 font-nohemi text-[11px] font-medium text-[#365CFF] shadow-[4px_4px_0px_#171717]">
          PORTFOLIO-1 / HOME /{" "}
          <span className="font-bold text-[#171717]">STACK</span>
        </div>

        <Stack />
      </div>

      {/* PROJECTS */}
      <div className="relative mt-30 flex w-full flex-col items-center justify-center sm:mt-12">
        <div className="flex w-full flex-col tracking-tight">
          <Title name="Projects" />

          <div className="-mt-4 w-full px-4 sm:px-6 md:px-8 lg:-mt-15 lg:px-10">
            <Projectshome />
          </div>
        </div>

        <motion.button
          initial={{ y: 0, opacity: 0 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          whileInView={{ opacity: 1 }}
          onClick={() => {
            navigate("/projects");
            window.scrollTo(0, 0);
          }}
          className="mt-8 cursor-pointer border-2 border-[#171717] bg-[#FFE65C] px-5 py-3 font-bold text-[#171717] shadow-[5px_5px_0px_#171717] hover:bg-[#FF82AD] md:mt-18"
        >
          ALL PROJECTS ↗
        </motion.button>
      </div>

      {/* PLAY AREA */}
      <div className="mt-20">
        <PlayHome />
      </div>

      {/* EXPERIENCE TIMELINE */}
      <section
        id="experience"
        className="mt-32 w-full px-5 font-space sm:px-10 lg:px-16"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#365CFF]">
              THE JOURNEY SO FAR / 001
            </span>

            <h2 className="mt-4 text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tight text-[#171717]">
              My <span className="text-[#365CFF]">Journey.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm font-medium leading-relaxed text-[#777777]">
            From building websites for clients to building a company of my own.
            Every experience has been a new chapter.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-0 left-[15px] top-0 w-[2px] bg-[#171717] md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`relative flex w-full pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-8 z-10 h-5 w-5 rounded-full border-2 border-[#171717] bg-[#FF82AD] left-[7px] md:left-auto ${
                    index % 2 === 0
                      ? "md:right-[-10px] md:translate-x-1/2"
                      : "md:left-[-10px] md:-translate-x-1/2"
                  }`}
                />

                {/* Experience Card */}
                <div
                  className={`w-full border-2 border-[#171717] p-6 shadow-[6px_6px_0px_#171717] transition-transform duration-300 hover:-translate-y-2 ${item.color}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-black">/ {item.number}</span>

                    <span className="border border-current px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">
                      {item.type}
                    </p>

                    <h3 className="mt-2 text-3xl font-black uppercase leading-tight">
                      {item.role}
                    </h3>

                    <h4 className="mt-2 text-xl font-bold">{item.company}</h4>

                    <p className="mt-4 text-sm font-medium leading-relaxed opacity-80">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-current/40 pt-4">
                    <span className="text-xs font-black uppercase tracking-widest">
                      {item.period}
                    </span>

                    <span className="text-xl">↗</span>
                  </div>
                </div>

                {/* Desktop timeline connector */}
                <div
                  className={`absolute top-[38px] hidden h-[2px] w-12 bg-[#171717] md:block ${
                    index % 2 === 0 ? "right-0" : "left-0"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative mt-32 overflow-hidden border-y-2 border-[#171717] bg-[#365CFF] px-5 py-24 font-space text-[#F4F1E9] sm:px-10 lg:px-16"
      >
        <div className="absolute right-10 top-10 h-24 w-24 rounded-full border-2 border-[#171717] bg-[#FFE65C] sm:h-32 sm:w-32" />

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFE65C]">
          HAVE AN IDEA? / LET'S TALK
        </span>

        <h2 className="relative z-10 mt-8 max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-tight">
          LET'S MAKE
          <br />
          <span className="text-[#FFE65C]">SOMETHING</span>
          <br />
          HAPPEN.
        </h2>

        <p className="mt-8 max-w-lg text-sm font-medium leading-relaxed text-[#F4F1E9]/80 sm:text-base">
          Have a project, an interesting idea, or just want to connect? My inbox
          is always open for exciting conversations.
        </p>

        <a
          href="mailto:sreepraneethalla@gmail.com"
          className="mt-10 inline-flex items-center gap-4 border-2 border-[#171717] bg-[#FFE65C] px-7 py-4 font-black uppercase text-[#171717] shadow-[6px_6px_0px_#171717] transition-all hover:-translate-y-1 hover:bg-[#FF82AD]"
        >
          GET IN TOUCH
          <span className="text-xl">↗</span>
        </a>

        <div className="absolute bottom-8 right-8 hidden text-7xl font-black text-[#F4F1E9]/20 lg:block">
          HELLO!
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-5 py-10 font-space text-[#F4F1E9] sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black uppercase">
              PRANEETH<span className="text-[#365CFF]">.</span>
            </h2>

            <p className="mt-2 max-w-xs text-xs font-medium text-[#F4F1E9]/50">
              Building ideas, experimenting with technology and creating things
              that matter.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider">
            <a
              href="#experience"
              className="transition-colors hover:text-[#FFE65C]"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[#FFE65C]"
            >
              Contact
            </a>

            <a
              href="/projects"
              className="transition-colors hover:text-[#FFE65C]"
            >
              Projects
            </a>

            <a
              href="https://linkedin.com/in/praneeth-alla"
              className="transition-colors hover:text-[#FFE65C]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/praneethalla27-svg"
              className="transition-colors hover:text-[#FFE65C]"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/20 pt-5 text-[10px] font-bold uppercase tracking-widest text-[#F4F1E9]/50 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Praneeth Alla. All rights reserved.
          </span>
          <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
