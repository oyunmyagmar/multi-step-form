import { useState } from "react";

export function PasswordForm({ form, onChange, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  function goToNextStep() {
    const newErrors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const telNumberRegex = /^(8|9|7|6)\d{7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else if (form.email === "") {
      newErrors.email = "This field is required.";
    } else {
      newErrors.email = "Enter a valid email address.";
    }
    // console.log(newErrors.email, "emailerror");

    if (telNumberRegex.test(form.telNumber)) {
      newErrors.telNumber = null;
    } else if (form.telNumber === "") {
      newErrors.telNumber = "This field is required.";
    } else {
      newErrors.telNumber =
        "Enter a valid phone number (8 digits, no country code, no leading zero and no spaces).";
    }

    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else if (form.password === "") {
      newErrors.password = "Create a password at least 6 characters long.";
    } else {
      newErrors.password =
        "Password must include at least 1 capital letter, 1 lowercase letter, 1 number, and 1 special character in (!@#$%^&*).";
    }

    if (form.confirmPass === "") {
      newErrors.confirmPass = "This field is required.";
    } else if (form.confirmPass !== form.password) {
      newErrors.confirmPass = "Password does not match. Please try again.";
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
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <img className="w-15 h-15" src="/logo.png"></img>
          <h3 className="text-[26px] leading-[31px] text-[#202124] font-semibold">
            Join Us! 😎
          </h3>
          <p className="text-lg leading-[22px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
                Email <span className="text-[#E14942]">*</span>
              </p>
              <input
                className={`w-full h-11 text-base leading-5 placeholder-[#8B8E95] focus:text-[#121316] border focus:outline-[#0CA5E9] rounded-lg p-3 + ${
                  errors.email
                    ? "border-[#E14942] text-[#E14942]"
                    : "border-[#CBD5E1] text-[#121316]"
                }`}
                type="email"
                placeholder="Email"
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

            <div>
              <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
                Phone number <span className="text-[#E14942]">*</span>
              </p>
              <input
                className={`w-full h-11 text-base leading-5 placeholder-[#8B8E95] focus:text-[#121316] border focus:outline-[#0CA5E9] rounded-lg p-3 + ${
                  errors.telNumber
                    ? "border-[#E14942] text-[#E14942]"
                    : "border-[#CBD5E1] text-[#121316]"
                }`}
                type="tel"
                placeholder="Mobile Number"
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

            <div>
              <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
                Password <span className="text-[#E14942]">*</span>
              </p>
              <input
                className={`w-full h-11 text-base leading-5 placeholder-[#8B8E95] focus:text-[#121316] border focus:outline-[#0CA5E9] rounded-lg p-3 + ${
                  errors.password
                    ? "border-[#E14942] text-[#E14942]"
                    : "border-[#CBD5E1] text-[#121316]"
                }`}
                type="password"
                placeholder="Password"
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
                className={`w-full h-11 text-base leading-5 placeholder-[#8B8E95] focus:text-[#121316] border focus:outline-[#0CA5E9] rounded-lg p-3 + ${
                  form.confirmPass !== form.password
                    ? "border-[#E14942] text-[#E14942]"
                    : "border-[#CBD5E1] text-[#121316]"
                }`}
                type="password"
                placeholder="Confirm Password"
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
          </div>

          <div className="mt-[82px] flex justify-between">
            <button
              onClick={() => onClickChangeStep("basic")}
              className="w-32 text-base leading-6 text-[#202124] bg-white border border-slate-300 py-2 rounded-md before:content-['<'] before:mr-3 hover:bg-gray-100 transition-all duration-300 box-border"
            >
              Back
            </button>
            <button
              onClick={goToNextStep}
              className="w-70 text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md hover:opacity-80 transition-all duration-300"
            >
              Continue
              <span className="ml-1 after:content-['>'] after:ml-3">2/3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
