import { useEffect, useState } from "react";
import { Header, InputField, Button } from "@/components";

export function ThirdStepImg({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState("");
  // console.log(preview, "prev");

  useEffect(() => {
    const newErrors = {};

    const dateOfBirthRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (dateOfBirthRegex.test(form.dateOfBirth)) {
      newErrors.dateOfBirth = null;
    } else if (form.dateOfBirth === "") {
      newErrors.dateOfBirth = "Please select a date.";
    } else {
      newErrors.dateOfBirth = "Must be at least 16.";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.dateOfBirth]);

  useEffect(() => {
    const newErrors = {};

    if (preview === "") {
      newErrors.preview = "Image cannot be blank.";
    } else {
      newErrors.preview = null;
    }

    setErrors({ ...errors, ...newErrors });
  }, [preview]);

  function handleImgChange(event) {
    const file = event.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
    console.log(preview);
  }

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

    if (preview === "") {
      newErrors.preview = "Image cannot be blank.";
    } else {
      newErrors.preview = null;
    }

    setErrors(newErrors);

    if (!newErrors.dateOfBirth && !newErrors.preview) {
      localStorage.setItem("my-form", JSON.stringify(form));

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
            variant="basicImg"
            title="Profile image"
            type="file"
            onChange={handleImgChange}
            multiple
            error={errors.preview}
            preview={preview}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            name="< Back"
            onClick={() => onClickChangeStep("secondStepPass")}
          ></Button>
          <Button
            variant="primary"
            name="Continue 3/3 >"
            onClick={goToNextStep}
          ></Button>
        </div>
      </div>
    </div>
  );
}
