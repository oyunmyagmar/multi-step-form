"use client";
import { useEffect, useState } from "react";
import {
  FirstStepBase,
  SecondStepPass,
  ThirdStepImg,
  LastStep,
} from "@/components";

const HomeForm = () => {
  const [step, setStep] = useState("firstStepBase"); // secondStepPass, thirdStepImg, lastStep

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    telNumber: "",
    password: "",
    confirmPass: "",
    dateOfBirth: "",
    preview: "",
  });
  useEffect(() => {
    const localMyForm = localStorage.getItem("my-form");
    if (localMyForm) {
      setForm(JSON.parse(localMyForm));
    }
  }, []);

  if (step === "firstStepBase") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <FirstStepBase
          form={form}
          onChangeForm={setForm}
          onClickChangeStep={setStep}
        />
      </div>
    );
  }
  if (step === "secondStepPass") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <SecondStepPass
          form={form}
          onChangeForm={setForm}
          onClickChangeStep={setStep}
        />
      </div>
    );
  }
  if (step === "thirdStepImg") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <ThirdStepImg
          form={form}
          onChangeForm={setForm}
          onClickChangeStep={setStep}
        />
      </div>
    );
  }
  if (step === "lastStep") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <LastStep onClickChangeStep={setStep} />
      </div>
    );
  }
};
export default HomeForm;
