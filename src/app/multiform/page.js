"use client";
import { useState } from "react";

import { Header, InputField, Button } from "@/components";

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
    profileImg: "",
  });

  function submit() {
    setStep("secondStepPass");
    console.log(form);
  }
  // console.log(form);

  if (step === "firstStepBase") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <div className="w-120 bg-white rounded-lg p-8">
          <Header />
          <div className="h-[434px] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <InputField
                title="First name"
                placeholder="First Name"
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />

              <InputField
                title="Last name"
                placeholder="Last Name"
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />

              <InputField
                title="Username"
                placeholder="Username"
                type="text"
                value={form.userName}
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
              />
            </div>
            <Button name="Continue 1/3 >" onClick={submit}></Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "secondStepPass") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <div className="w-120 bg-white rounded-lg p-8">
          <Header />
          <div className="h-[434px] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <InputField
                title="Email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <InputField
                title="Phone number"
                placeholder="Phone Number"
                type="tel"
                value={form.telNumber}
                onChange={(e) =>
                  setForm({ ...form, telNumber: e.target.value })
                }
              />

              <InputField
                title="Password"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <InputField
                title="Confirm password"
                placeholder="Confirm Password"
                type="password"
                value={form.confirmPass}
                onChange={(e) =>
                  setForm({ ...form, confirmPass: e.target.value })
                }
              />
            </div>
            <div>
              <Button name="Continue 1/3 >" onClick={submit}></Button>
              <Button name="Continue 1/3 >" onClick={submit}></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "thirdStepImg") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <div className="w-120 bg-white rounded-lg p-8">
          <Header />
          <div className="h-[434px] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <InputField
                placeholder="First Name"
                type="text"
                title="First name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />

              <InputField
                title="Username"
                placeholder="Username"
                value={form.userName}
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
              />
            </div>
            <Button name="Continue 1/3 >" onClick={submit}></Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "lastStep") {
    return (
      <div className="w-full h-screen bg-[#F4F4F4] flex justify-center items-center">
        <div className="w-120 bg-white rounded-lg p-8">
          <Header />
        </div>
      </div>
    );
  }
};
export default HomeForm;
