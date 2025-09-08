import { useEffect, useState } from "react";
import { Header, InputField, Button } from "@/components";
import { AnimatePresence, motion } from "motion/react";

export function FirstStepBase({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});
  const [charCounter, setCharCounter] = useState();

  useEffect(() => {
    const counterUserName = form.userName.split("").length;
    setCharCounter(1 + counterUserName);
    // console.log(counterUserName, "counterusername");
    // console.log(charCounter, "charcount");
  }, [form.userName]);

  useEffect(() => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
    if (nameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else if (form.firstName === "") {
      newErrors.firstName = "This field is required.";
    } else {
      newErrors.firstName =
        "Only letters and hyphens alowed (NO spaces, numbers, symbols).";
    }
    setErrors({ ...errors, ...newErrors });
  }, [form.firstName]);

  useEffect(() => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
    if (nameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else if (form.lastName === "") {
      newErrors.lastName = "This field is required.";
    } else {
      newErrors.lastName =
        "Only letters and hyphens alowed (NO spaces, numbers, symbols).";
    }
    setErrors({ ...errors, ...newErrors });
  }, [form.lastName]);

  useEffect(() => {
    const newErrors = {};
    const userNameRegex = /^[a-zA-Z][a-zA-Z0-9._-]{2,15}$/;
    // console.log(charCounter, "CHARCOUNT");
    // console.log(form.userName, "FORMUSENAME");
    if (charCounter > 0) {
      if (userNameRegex.test(form.userName)) {
        newErrors.userName = null;
      } else if (form.userName === "") {
        newErrors.userName = "This field is required.";
      } else {
        newErrors.userName =
          "Start with a letter, length 3–20, only letters, numbers, dot, underscore, and hyphen allowed.";
      }
    }
    setErrors({ ...errors, ...newErrors });
  }, [form.userName]);

  function goToNextStep() {
    const newErrors = {};

    const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
    if (nameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else if (form.firstName === "") {
      newErrors.firstName = "This field is required.";
    } else {
      newErrors.firstName =
        "Only letters and hyphens alowed (NO spaces, numbers, symbols).";
    }

    if (nameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else if (form.lastName === "") {
      newErrors.lastName = "This field is required.";
    } else {
      newErrors.lastName =
        "Only letters and hyphens alowed (NO spaces, numbers, symbols).";
    }

    const userNameRegex = /^[a-zA-Z][a-zA-Z0-9._-]{2,15}$/;
    if (charCounter > 0) {
      if (userNameRegex.test(form.userName)) {
        newErrors.userName = null;
      } else if (form.userName === "") {
        newErrors.userName = "This field is required.";
      } else {
        newErrors.userName =
          "Start with a letter, length 3–20, only letters, numbers, dot, underscore, and hyphen allowed.";
      }
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.userName) {
      localStorage.setItem("my-form", JSON.stringify(form));

      onClickChangeStep("secondStepPass");
    }
  }
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="min-h-[434px] flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <InputField
            title="First name"
            placeholder="First Name"
            type="text"
            value={form.firstName}
            onChange={(e) =>
              onChangeForm({ ...form, firstName: e.target.value })
            }
            error={errors.firstName}
          />
          <InputField
            title="Last name"
            placeholder="Last Name"
            type="text"
            value={form.lastName}
            onChange={(e) =>
              onChangeForm({ ...form, lastName: e.target.value })
            }
            error={errors.lastName}
          />
          <InputField
            title="Username"
            placeholder="Username"
            type="text"
            value={form.userName}
            onChange={(e) =>
              onChangeForm({ ...form, userName: e.target.value })
            }
            error={errors.userName}
          />
        </div>
        <Button
          variant="initial"
          name="Continue 1/3 >"
          onClick={goToNextStep}
        />
      </div>
    </div>
  );
}
