import React from "react";

export function Heading() {
  return (
    <div className="flex flex-col gap-2 mb-7">
      <img src="./logo.png" className="w-15 h-15"></img>
      <h3 className="text-[26px] leading-[31px] font-semibold text-[#202124]">
        Join Us! 😎
      </h3>
      <p className="text-lg leading-[22px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
}
