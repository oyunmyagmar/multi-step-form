import { useEffect, useState } from "react";
import { Header, InputField, Button } from "@/components";

export function SecondStepPass({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else if (form.email === "") {
      newErrors.email = "This field is required.";
    } else {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.email]);

  useEffect(() => {
    const newErrors = {};

    const telNumberRegex = /^(?:[89]\d{7}|1\d{7})$/;
    if (telNumberRegex.test(form.telNumber)) {
      newErrors.telNumber = null;
    } else if (form.telNumber === "") {
      newErrors.telNumber = "This field is required.";
    } else {
      newErrors.telNumber =
        "Enter a valid phone number (8 digits, NO country code, spaces).";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.telNumber]);

  useEffect(() => {
    const newErrors = {};

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{6,}$/;
    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else if (form.password === "") {
      newErrors.password = "Create a password at least 6 characters long.";
    } else {
      newErrors.password =
        "Contain at least 1 uppercase, 1 lowercase letter, 1 number, 1 special character in (!@#$%^&*).";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.password]);

  useEffect(() => {
    const newErrors = {};

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{6,}$/;
    if (
      passwordRegex.test(form.confirmPass) &&
      form.confirmPass === form.password
    ) {
      newErrors.confirmPass = null;
    } else if (form.confirmPass === "") {
      newErrors.confirmPass = "This field is required.";
    } else {
      newErrors.confirmPass = "Password does not match. Please try again.";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.confirmPass]);

  function goToNextStep() {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else if (form.email === "") {
      newErrors.email = "This field is required.";
    } else {
      newErrors.email = "Enter a valid email address.";
    }

    const telNumberRegex = /^(?:[89]\d{7}|1\d{7})$/;
    if (telNumberRegex.test(form.telNumber)) {
      newErrors.telNumber = null;
    } else if (form.telNumber === "") {
      newErrors.telNumber = "This field is required.";
    } else {
      newErrors.telNumber =
        "Enter a valid phone number (8 digits, NO country code, spaces).";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{6,}$/;
    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else if (form.password === "") {
      newErrors.password = "Create a password at least 6 characters long.";
    } else {
      newErrors.password =
        "Contain at least 1 uppercase, 1 lowercase letter, 1 number, 1 special character in (!@#$%^&*).";
    }

    if (
      passwordRegex.test(form.confirmPass) &&
      form.confirmPass === form.password
    ) {
      newErrors.confirmPass = null;
    } else if (form.confirmPass === "") {
      newErrors.confirmPass = "This field is required.";
    } else {
      newErrors.confirmPass = "Password does not match. Please try again.";
    }
    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.telNumber &&
      !newErrors.password &&
      !newErrors.confirmPass
    ) {
      localStorage.setItem("my-form", JSON.stringify(form));

      onClickChangeStep("thirdStepImg");
    }
  }
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="min-h-[462px] flex flex-col justify-between">
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
            error={errors.password}
          />
          <InputField
            title="Confirm password"
            placeholder="Confirm Password"
            type="password"
            value={form.confirmPass}
            onChange={(e) =>
              onChangeForm({ ...form, confirmPass: e.target.value })
            }
            error={errors.confirmPass}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            name="< Back"
            onClick={() => onClickChangeStep("firstStepBase")}
          ></Button>
          <Button
            variant="primary"
            name="Continue 2/3 >"
            onClick={goToNextStep}
          ></Button>
        </div>
      </div>
    </div>
  );
}
