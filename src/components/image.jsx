import { useState } from "react";

export function ImageForm({ form, onChange, onClickChangeStep }) {
  const [errors, setErrors] = useState({});
  const newErrors = {};

  function goToNextStep() {
    const dateBirthRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateBirthRegex.test(form.dateBirth)) {
      newErrors.dateBirth = null;
    } else {
      newErrors.dateBirth = "You must enter your birthday";
    }

    if (form.profileImg !== "") {
      newErrors.profileImg = null;
    } else {
      newErrors.profileImg = "You must enter your profile picture";
    }

    setErrors(newErrors);

    if (!newErrors.dateBirth && !newErrors.profileImg) {
      onClickChangeStep("completed");
    }

    // const dateBirthRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(\d{4})$/;
  }
  return (
    <div className="w-120 bg-white  rounded-lg p-8">
      <img className="w-15 h-15" src="/logo.png"></img>
      <h3 className="mt-2 text-[26px] leading-[31px] text-[#202124] font-semibold">
        Join Us! 😎
      </h3>
      <p className="mt-2 mb-7 text-lg leading-[22px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Date of birth <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="date"
          value={form.dateBirth}
          onChange={(el) =>
            onChange({
              ...form,
              dateBirth: el.target.value,
            })
          }
        ></input>
        {errors.dateBirth && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.dateBirth}
          </div>
        )}
      </div>

      <div>
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-3">
          Profile image <span className="text-[#E14942]">*</span>
        </p>

        <input
          className="w-full h-45 bg-[#7F7F800D] rounded-md p-[62px]"
          type="file"
          value={form.profileImg}
          onChange={(el) =>
            onChange({
              ...form,
              profileImg: el.target.value,
            })
          }
        ></input>
        {errors.profileImg && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.profileImg}
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-[102px]">
        <button
          onClick={() => onClickChangeStep("password")}
          className="w-32 text-base leading-6 text-[#202124] bg-white border border-slate-300 py-2.5 rounded-md
          hover:bg-gray-100 transition-all duration-300"
        >
          <img src="/btn-left.png" className="w-6 h-6 inline-block mr-1"></img>
          Back
        </button>
        <button
          onClick={goToNextStep}
          className="w-70 text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md 
          hover:opacity-80 transition-all duration-300"
        >
          Submit <span>3/3</span>
          <img src="/btn-right.png" className="w-6 h-6 inline-block ml-1"></img>
        </button>
      </div>
    </div>
  );
}
