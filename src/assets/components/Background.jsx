import React from "react";

const Background = ({ children }) => {
  const size = 50;

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: `
          linear-gradient(#d1d5db 1px, transparent 1px),
          linear-gradient(90deg, #d1d5db 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
      }}
    >
      {children}
    </div>
  );
};
export default Background;
