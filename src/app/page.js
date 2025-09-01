"use client";
import { useState } from "react";
import { BasicForm, PasswordForm, ImageForm } from "@/components";

const Home = () => {
  const [step, setStep] = useState("basic"); // password, image, complete

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    telNumber: "",
    password: "",
    confirmPass: "",
  });

  // function submit() {
  //   setStep("password");
  //   console.log(form);
  // }

  if (step === "basic") {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <BasicForm
          form={form}
          onChange={setForm}
          onClickChangeStep={setStep}
        ></BasicForm>
      </div>
    );
  }

  if (step === "password") {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {" "}
        <PasswordForm
          form={form}
          onChange={setForm}
          onClickChangeStep={setStep}
        ></PasswordForm>
      </div>
    );
  }

  if (step === "image") {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ImageForm
          form={form}
          onChange={setForm}
          onClickChangeStep={setStep}
        ></ImageForm>
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
