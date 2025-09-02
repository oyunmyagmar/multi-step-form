import { useState } from "react";

export function PasswordForm({ form, onChange, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  function goToNextStep() {
    const newErrors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const telNumberRegex = /^(8|9|7|6)\d{7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "You must enter your email";
    }

    if (telNumberRegex.test(form.telNumber)) {
      newErrors.telNumber = null;
    } else {
      newErrors.telNumber = "You must enter your phone number";
    }

    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else {
      newErrors.password = "You must enter your password";
    }

    if (form.confirmPass === "" || form.confirmPass !== form.password) {
      newErrors.confirmPass = "Your password did not match";
    } else {
      newErrors.confirmPass = null;
    }

    setErrors(newErrors);
    if (
      !newErrors.email &&
      !newErrors.telNumber &&
      !newErrors.password &&
      !newErrors.confirmPass
    ) {
      onClickChangeStep("image");
    }
  }
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
          Email <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="{className} w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(el) =>
            onChange({
              ...form,
              email: el.target.value,
            })
          }
        ></input>
        {errors.email && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.email}
          </div>
        )}
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Phone number <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="tel"
          placeholder="Your phone number"
          value={form.telNumber}
          onChange={(el) =>
            onChange({
              ...form,
              telNumber: el.target.value,
            })
          }
        ></input>
        {errors.telNumber && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.telNumber}
          </div>
        )}
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="password"
          placeholder="Your password"
          value={form.password}
          onChange={(el) =>
            onChange({
              ...form,
              password: el.target.value,
            })
          }
        ></input>
        {errors.password && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.password}
          </div>
        )}
      </div>

      <div>
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Confirm password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          type="password"
          placeholder="Confirm password"
          value={form.confirmPass}
          onChange={(el) =>
            onChange({
              ...form,
              confirmPass: el.target.value,
            })
          }
        ></input>
        {errors.confirmPass && (
          <div className="text-sm leading-5 text-[#E14942] mt-2">
            {errors.confirmPass}
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-[82px]">
        <button
          onClick={() => onClickChangeStep("basic")}
          className="w-32 text-base leading-6 text-[#202124] bg-white border border-slate-300 py-2.5 rounded-md 
          inline-block before:content-['<'] before:mr-[12.29px] hover:bg-gray-100 transition-all duration-300"
        >
          Back
        </button>
        <button
          onClick={goToNextStep}
          className="w-70 text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md 
          hover:opacity-80 transition-all duration-300"
        >
          Continue
          <span className="ml-1 inline-block after:content-['>'] after:ml-[12.29px]">
            2/3
          </span>
        </button>
      </div>
    </div>
  );
}
