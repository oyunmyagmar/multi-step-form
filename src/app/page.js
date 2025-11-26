"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FirstStepBase,
  SecondStepPass,
  ThirdStepImg,
  LastStep,
} from "./components";

const steps = [
  { key: "firstStepBase", Component: FirstStepBase },
  { key: "secondStepPass", Component: SecondStepPass },
  { key: "thirdStepImg", Component: ThirdStepImg },
  { key: "lastStep", Component: LastStep },
];

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

  return (
    <div className="w-full h-full bg-[#F4F4F4] flex justify-center p-10">
      <AnimatePresence mode="wait">
        {steps.map(({ key, Component }) =>
          step === key ? (
            <motion.div
              key={key}
              className="relative"
              initial={{ opacity: 0, right: -100 }}
              animate={{ opacity: 1, right: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, right: 100, transition: { duration: 0.5 } }}
            >
              {key === "lastStep" ? (
                <Component onClickChangeStep={setStep} />
              ) : (
                <Component
                  form={form}
                  onChangeForm={setForm}
                  onClickChangeStep={setStep}
                />
              )}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeForm;
