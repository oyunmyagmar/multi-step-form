import { useState } from "react";

export function BasicForm({ form, onChange, onClickChangeStep }) {
  const [errors, setErrors] = useState({});

  function goToNextStep() {
    const newErrors = {};
    const firstNameRegex =
      /^([A-Z][a-z]{1,49}(-[A-Z][a-z]{1,49})?|[А-ЯӨҮ][а-яөү]{1,49}(-[А-ЯӨҮ][а-яөү]{1,49})?)$/;
    const lastNameRegex =
      /^([A-Z][a-z]{1,49}(-[A-Z][a-z]{1,49})?|[А-ЯӨҮ][а-яөү]{1,49}(-[А-ЯӨҮ][а-яөү]{1,49})?)$/;
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;

    if (firstNameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else if (form.firstName === "") {
      newErrors.firstName = "This field is required.";
    } else {
      newErrors.firstName =
        "Starts with a CAPITAL letter, letters only, hyphen optional, NO numbers, NO symbols, NO spaces.";
    }

    if (lastNameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else if (form.lastName === "") {
      newErrors.lastName = "This field is required.";
    } else {
      newErrors.lastName =
        "Starts with a CAPITAL letter, letters only, hyphen optional, NO numbers, NO symbols, NO spaces.";
    }

    if (usernameRegex.test(form.userName)) {
      newErrors.userName = null;
    } else if (form.userName === "") {
      newErrors.userName = "This field is required.";
    } else {
      newErrors.userName =
        "Starts with a letter, length 3–20, only letters, numbers, underscores.";
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.userName) {
      onClickChangeStep("password");
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

        <div className="h-[434px] flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
                First name <span className="text-[#E14942]">*</span>
              </p>
              <input
                className="w-full h-11 border border-[#CBD5E1] focus:outline-[#0CA5E9] rounded-lg p-3"
                type="text"
                placeholder="First Name"
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

            <div>
              <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
                Last name <span className="text-[#E14942]">*</span>
              </p>
              <input
                className="w-full h-11 border border-[#CBD5E1] focus:outline-[#0CA5E9] rounded-lg p-3"
                type="text"
                placeholder="Last Name"
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
                className="w-full h-11 border border-[#CBD5E1] focus:outline-[#0CA5E9] rounded-lg p-3"
                type="text"
                placeholder="Username"
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
          </div>

          <button
            onClick={goToNextStep}
            className="w-full text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md hover:opacity-80 transition-all duration-300"
          >
            Continue
            <span className="ml-1 after:content-['>'] after:ml-3">1/3</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// if (!newErrors.firstName) {
//   if (!form.firstName.includes("@")) {
//     newErrors.firstName = "You must enter @";
//   } else {
//     newErrors.firstName = null;
//   }
// }
