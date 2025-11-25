import { useEffect, useState } from "react";
import { InputField, Button, ImageInput, Heading } from "@/components";
import { Vibur } from "next/font/google";

export function ThirdStepImg({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(form.preview);
  const [charCounter, setCharCounter] = useState();

  function handleImgChange(event) {
    const file = event.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }

  useEffect(() => {
    let counterPreviewChar = preview.split("").length;
    setCharCounter(counterPreviewChar);
  }, [preview]);

  useEffect(() => {
    const newErrors = {};
    const today = new Date();
    const birthday = new Date(form.dateOfBirth);
    const age = today.getFullYear() - birthday.getFullYear();
    const dateOfBirthRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateOfBirthRegex.test(form.dateOfBirth)) {
      newErrors.dateOfBirth = null;
    } else if (form.dateOfBirth === "") {
      newErrors.dateOfBirth = "Please select a date.";
    } else if (age < 16) {
      newErrors.dateOfBirth = "You must at least 16 years old.";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.dateOfBirth]);

  useEffect(() => {
    const newErrors = {};
    if (charCounter > 0) {
      newErrors.preview = null;
    } else if (preview === "") {
      newErrors.preview = "Image cannot be blank.";
    }
    setErrors({ ...errors, ...newErrors });
  }, [preview]);

  function goToNextStep() {
    const newErrors = {};

    const dateOfBirthRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateOfBirthRegex.test(form.dateOfBirth)) {
      newErrors.dateOfBirth = null;
    } else if (form.dateOfBirth === "") {
      newErrors.dateOfBirth = "Please select a date.";
    } else {
      const today = new Date();
      const birthday = new Date(form.dateOfBirth);
      const age = today.getFullYear() - birthday.getFullYear();
      if (age < 16) {
        newErrors.dateOfBirth = "You must at least 16 years old.";
      }
    }

    // if (charCounter > 0) {
    //   newErrors.preview = null;
    // } else if (preview === "") {
    //   newErrors.preview = "Image cannot be blank.";
    // }

    setErrors(newErrors);

    if (!newErrors.dateOfBirth && !newErrors.preview) {
      localStorage.setItem("my-form", JSON.stringify(form));

      onClickChangeStep("lastStep");
    }
  }
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <Heading />
      <div className="min-h-[434px] flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <InputField
            title="Date of Birth"
            type="date"
            value={form.dateOfBirth}
            onChange={(e) =>
              onChangeForm({ ...form, dateOfBirth: e.target.value })
            }
            error={errors.dateOfBirth}
          />
          <ImageInput
            title="Profile image"
            type="file"
            onChange={handleImgChange}
            multiple
            preview={preview}
            error={errors.preview}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            name="< Back"
            onClick={() => onClickChangeStep("secondStepPass")}
          />
          <Button
            variant="primary"
            name="Continue 3/3 >"
            onClick={goToNextStep}
          />
        </div>
      </div>
    </div>
  );
}
