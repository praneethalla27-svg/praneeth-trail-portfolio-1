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

const Home = () => {
  const homeRef = useRef();
  const navigate = useNavigate();
  return (
    <div ref={homeRef} className="min-h-screen w-full py-4 font-nohemi">
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
      <div className="mt-15">
        <div className="bg-zinc-100 w-fit px-4 py-2 mb-5 font-nohemi font-medium text-[11px] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.10),0_32px_64px_rgba(0,0,0,0.05)] text-[#077F5B]">
          PORTFOLIO-1 / HOME /{" "}
          <span className="text-neutral-900 font-bold">FIELDS</span>
        </div>
        <Features />
      </div>
      <div className="sm:mt-20 mt-16">
        <div className="bg-zinc-100 w-fit px-4 py-2 mb-5 font-nohemi font-medium text-[11px] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.06),0_12px_24px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.10),0_32px_64px_rgba(0,0,0,0.05)] text-[#077F5B]">
          PORTFOLIO-1 / HOME /{" "}
          <span className="text-neutral-900 font-bold">STACK</span>
        </div>
        <Stack />
      </div>
      <div className="relative mt-30 flex w-full flex-col items-center justify-center sm:mt-12">
        <div className="flex w-full flex-col tracking-tight">
          {/* Projects heading */}
          <Title name="Projects" />

          {/* Projects */}
          <div className="-mt-4 w-full px-4 sm:px-6 md:px-8 lg:-mt-15 lg:px-10">
            <Projectshome />
          </div>
        </div>

        <motion.button
          initial={{ y: 0, opacity: 0 }}
          whileHover={{ y: -5 }}
          whileTap={{ scaleX: 0.89 }}
          whileInView={{ opacity: 1 }}
          onClick={() => {
            (navigate(`/projects`), window.scrollTo(0, 0));
          }}
          className="mt-8 cursor-pointer rounded bg-white hover:bg-zinc-100 px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.10),0_24px_48px_rgba(0,0,0,0.08)] md:mt-18"
        >
          All Projects
        </motion.button>
      </div>
      {/* play page area  */}
      <div>
        <PlayHome />
      </div>
    </div>
  );
};

export default Home;
