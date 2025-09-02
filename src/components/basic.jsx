import { useState } from "react";

export function BasicForm({ form, onChange, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  function goToNextStep() {
    const newErrors = {};

    if (form.firstName === "") {
      newErrors.firstName = "You must enter your first name";
    } else {
      newErrors.firstName = null;
    }

    if (!newErrors.firstName) {
      if (!form.firstName.includes("@")) {
        newErrors.firstName = "You must enter @";
      } else {
        newErrors.firstName = null;
      }
    }

    if (form.lastName === "") {
      newErrors.lastName = "You must enter your last name";
    } else {
      newErrors.lastName = null;
    }

    if (form.userName === "") {
      newErrors.userName = "You must enter your user name";
    } else {
      newErrors.userName = null;
    }

    setErrors(newErrors);
    console.log("newErrors", newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.userName) {
      onClickChangeStep("password");
    }
  }

  console.log("errors", errors);
  return (
    <div className="w-120 bg-white rounded-lg p-8">
      <img className="w-15 h-15" src="/logo.png"></img>
      <h3 className="mt-2 text-[26px] leading-[31px] text-[#202124] font-semibold">
        Join Us! 😎
      </h3>
      <p className="mt-2 mb-7 text-lg leading-[22px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          First name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-full h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="text"
          placeholder="Your first name"
          value={form.firstName}
          onChange={(el) =>
            onChange({
              ...form,
              firstName: el.target.value,
            })
          }
        ></input>
        {errors.firstName && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.firstName}
          </div>
        )}
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Last name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="text"
          placeholder="Your last name"
          value={form.lastName}
          onChange={(el) =>
            onChange({
              ...form,
              lastName: el.target.value,
            })
          }
        ></input>
        {errors.lastName && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.lastName}
          </div>
        )}
      </div>

      <div>
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Username <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="text"
          placeholder="Your username"
          value={form.userName}
          onChange={(el) =>
            onChange({
              ...form,
              userName: el.target.value,
            })
          }
        ></input>
        {errors.userName && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.userName}
          </div>
        )}
      </div>

      <button
        onClick={goToNextStep}
        className="w-full text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md mt-[162px]
        hover:opacity-80 transition-all duration-300"
      >
        Continue
        <span className="ml-1 inline-block after:content-['>'] after:ml-[12.29px]">
          1/3
        </span>
      </button>
    </div>
  );
}
