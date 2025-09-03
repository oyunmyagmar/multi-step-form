"use client";
// import { useState } from "react";

import { Header, InputField, Button } from "@/components";

const HomeForm = () => {
  return (
    <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
      <div className="w-120 bg-white rounded-lg p-8">
        <Header />
        <div className="h-[434px] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <InputField
              title="First name"
              placeholder="First Name"
            ></InputField>
            <InputField title="Last name" placeholder="Last Name"></InputField>
            <InputField title="Username" placeholder="Username"></InputField>
          </div>
          <Button name="Continue 1/3 >"></Button>
        </div>
      </div>
    </div>
  );
};
export default HomeForm;
