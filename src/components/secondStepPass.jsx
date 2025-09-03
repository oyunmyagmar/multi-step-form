import { useState } from "react";
import { Header, InputField, Button } from "@/components";

export function SecondStepPass({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  function goToNextStep() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(?:[89]\d{7}|1\d{7})$/;
    const passwordRegex = "";
    const confirmPassRegex = "";

    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Enter a valid email address.";
    }
    if (phoneRegex.test(form.telNumber)) {
      newErrors.telNumber = null;
    } else {
      newErrors.telNumber =
        "Enter a valid phone number (8 digits, NO country code, NO leading zero, NO spaces).";
    }
    setErrors(newErrors);

    if (!newErrors.email) {
      onClickChangeStep("thirdStepImg");
    }
  }
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="h-[434px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 pt-7">
          <InputField
            title="Email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => onChangeForm({ ...form, email: e.target.value })}
            error={errors.email}
          />
          <InputField
            title="Phone number"
            placeholder="Phone Number"
            type="tel"
            value={form.telNumber}
            onChange={(e) =>
              onChangeForm({ ...form, telNumber: e.target.value })
            }
            error={errors.telNumber}
          />
          <InputField
            title="Password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) =>
              onChangeForm({ ...form, password: e.target.value })
            }
          />
          <InputField
            title="Confirm password"
            placeholder="Confirm Password"
            type="password"
            value={form.confirmPass}
            onChange={(e) =>
              onChangeForm({ ...form, confirmPass: e.target.value })
            }
          />
        </div>
        <div>
          <Button
            name="< Back"
            onClick={() => onClickChangeStep("firstStepBase")}
          ></Button>
          <Button name="Continue 2/3 >" onClick={goToNextStep}></Button>
        </div>
      </div>
    </div>
  );
}
