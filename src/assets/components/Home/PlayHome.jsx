import React from "react";
import Title from "../common/Title";

const PlayHome = () => {
  return (
    <div>
      <Title name="play" />
      {/* container for redircting to play page */}
      <div id="container" className="w-full min-h-[600px] flex bg-red-200">
        {/* left container */}
        <div className="w-1/2 min-h-full bg-black">ss</div>
        {/* right container  */}
        <div className="w-1/2 min-h-full bg-white">sss</div>
      </div>
    </div>
  );
};

export default PlayHome;
