"use client";
import { useState } from "react";
import {
  Header,
  Button,
  FirstStepBase,
  SecondStepPass,
  ThirdStepImg,
} from "@/components";

const HomeForm = () => {
  const [step, setStep] = useState("firstStepBase"); // secondStepPass, thirdStepImg, lastStep

  const localMyForm = localStorage.getItem("my-form");

  const [form, setForm] = useState(
    localStorage
      ? JSON.parse(localMyForm)
      : {
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          telNumber: "",
          password: "",
          confirmPass: "",
          dateOfBirth: "",
          profileImg: "",
        }
  );
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
        <div className="w-120 bg-white rounded-lg p-8">
          <Header />
          <Button
            name="< Back"
            variant="secondary"
            onClick={() => setStep("thirdStepImg")}
          />
        </div>
      </div>
    );
  }
};
export default HomeForm;
