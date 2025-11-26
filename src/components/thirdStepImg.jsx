"use client";

import { useEffect, useState } from "react";
import { InputField, Button, ImageInput, Heading } from "@/components";

export function ThirdStepImg({ form, onChangeForm, onClickChangeStep }) {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(form.preview);
  const [submitted, setSubmitted] = useState(false);

  console.log({ form });

  function handleImgChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setPreview(base64);
      onChangeForm({ ...form, preview: base64 });
    };

    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if (!submitted) return;

    const newErrors = {};

    if (!form.dateOfBirth) {
      newErrors.dateOfBirth = "Please select a date.";
    } else {
      const todayDate = new Date();
      const birthDate = new Date(form.dateOfBirth);
      let age = todayDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = todayDate.getMonth() - birthDate.getMonth();
      const dayDiff = todayDate.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      if (age < 16) {
        newErrors.dateOfBirth = "You must at least 16 years old.";
      } else {
        newErrors.dateOfBirth = null;
      }
    }

    setErrors((errors) => ({ ...errors, ...newErrors }));
  }, [form.dateOfBirth]);

  useEffect(() => {
    if (!submitted) return;

    const newErrors = {};

    if (!preview) {
      newErrors.preview = "Image cannot be blank.";
    } else {
      newErrors.preview = null;
    }

    setErrors((errors) => ({ ...errors, ...newErrors }));
  }, [preview, submitted]);

  function goToNextStep() {
    setSubmitted(true);
    const newErrors = {};

    if (!form.dateOfBirth) {
      newErrors.dateOfBirth = "Please select a date.";
    } else {
      const todayDate = new Date();
      const birthDate = new Date(form.dateOfBirth);
      let age = todayDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = todayDate.getMonth() - birthDate.getMonth();
      const dayDiff = todayDate.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      if (age < 16) {
        newErrors.dateOfBirth = "You must at least 16 years old.";
      } else {
        newErrors.dateOfBirth = null;
      }
    }

    if (!preview) {
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
