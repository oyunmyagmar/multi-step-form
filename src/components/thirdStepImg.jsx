import { useState } from "react";
import { Header, InputField, Button } from "@/components";

export function ThirdStepImg({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  function handleOnChangeImg(event) {}

  function goToNextStep() {
    const newErrors = {};
    const dateOfBirthRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateOfBirthRegex.test(form.dateOfBirth)) {
      newErrors.dateOfBirth = null;
    } else if (form.dateOfBirth === "") {
      newErrors.dateOfBirth = "Please select a date.";
    } else {
      newErrors.dateOfBirth = "Must be at least 16.";
    }

    if (form.profileImg === "") {
      newErrors.profileImg = "Image cannot be blank.";
    } else {
      newErrors.profileImg = null;
    }
    setErrors(newErrors);

    if (!newErrors.dateOfBirth && !newErrors.profileImg) {
      // localStorage.setItem("my-form", JSON.stringify(form));

      onClickChangeStep("lastStep");
    }
  }
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Header />
      <div className="min-h-[462px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 pt-7">
          <InputField
            title="Date of Birth"
            type="date"
            value={form.dateOfBirth}
            onChange={(e) =>
              onChangeForm({ ...form, dateOfBirth: e.target.value })
            }
            error={errors.dateOfBirth}
          />
          <InputField
            title="Profile image"
            type="file"
            onChange={handleOnChangeImg}
            error={errors.profileImg}
            variant="basicImg"
          />
        </div>
        <div className="flex gap-2">
          <Button
            name="< Back"
            variant="secondary"
            onClick={() => onClickChangeStep("secondStepPass")}
          ></Button>
          <Button
            name="Continue 3/3 >"
            variant="primary"
            onClick={goToNextStep}
          ></Button>
        </div>
      </div>
    </div>
  );
}
