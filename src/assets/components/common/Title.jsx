import React from "react";

const Title = ({ name }) => {
  return (
    <div className="w-full overflow-hidden sm:px-6 md:px-8 lg:px-10 mt-20">
      <h1
        className="
          whitespace-nowrap
          max-sm:mb-5
          max-sm:text-center
          text-[clamp(2rem,16vw,17rem)]
          font-black
          uppercase
          leading-[0.8]
          tracking-tight
          text-[#365CFF]
        "
      >
        {name}
      </h1>
    </div>
  );
};

export default Title;
