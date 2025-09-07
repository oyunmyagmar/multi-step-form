import { motion } from "motion/react";

export function LastStep({ onClickChangeStep }) {
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <div className="flex flex-col gap-2 relative">
        <img src="./logo.png" className="w-15 h-15"></img>
        <h3 className="text-[26px] leading-[31px] font-semibold text-[#202124]">
          You're All Set 🔥
        </h3>
        <p className="text-lg leading-[22px] text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
        <button
          className="absolute right-0 top-0 text-amber-50"
          onClick={() => onClickChangeStep("thirdStepImg")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
