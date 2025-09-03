import { motion } from "motion/react";

export function CompletedForm() {
  return (
    <div className="w-120 bg-white rounded-lg p-8 flex flex-col gap-2">
      <img className="w-15 h-15" src="/logo.png"></img>
      <h3 className="text-[26px] leading-[31px] text-[#202124] font-semibold">
        You're All Set 🔥
      </h3>
      <p className="text-lg leading-[22px] text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
}
