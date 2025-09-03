"use client";
import { useState } from "react";
import { motion } from "motion/react";

import {
  BasicForm,
  PasswordForm,
  ImageForm,
  CompletedForm,
} from "@/components";

const Home = () => {
  const [step, setStep] = useState("basic"); // password, image, completed

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    telNumber: "",
    password: "",
    confirmPass: "",
    dateBirth: "",
    profileImg: "",
  });
  // function submit() {
  //   setStep("password");
  //   console.log(form);
  // }

  if (step === "basic") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <BasicForm form={form} onChange={setForm} onClickChangeStep={setStep} />
      </div>
    );
  }
  // console.log(form);

  if (step === "password") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center ">
        <motion.div
          className="relative"
          initial={{ opacity: 0, right: -50 }}
          animate={{ opacity: 1, right: 0 }}
          exit={{ opacity: 1, right: 50 }}
        >
          <PasswordForm
            form={form}
            onChange={setForm}
            onClickChangeStep={setStep}
          />
        </motion.div>
      </div>
    );
  }

  if (step === "image") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center ">
        <ImageForm form={form} onChange={setForm} onClickChangeStep={setStep} />
      </div>
    );
  }

  if (step === "completed") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center ">
        <motion.div
          className="relative"
          initial={{ opacity: 0, right: -50 }}
          animate={{ opacity: 1, right: 0 }}
          exit={{ opacity: 1, right: 50 }}
        >
          <CompletedForm />
        </motion.div>
      </div>
    );
  }
};
export default Home;

// const [name, setName] = useState("");
// const onChangeInput = (event) => {
//   setName(event.target.value);
//   console.log(name);
// };

// const onClickContinue = () => {
//   console.log(firstName, lastName, userName);
//   setData(...firstName, lastName, userName);
// };
