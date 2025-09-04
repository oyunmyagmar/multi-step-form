import { useState } from "react";

import { motion } from "motion/react";

export function ImageForm({ form, onChange, onClickChangeStep }) {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();

  function handleOnChangeImg(event) {
    // alert(1);
    const file = event.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);

    console.log(preview);
  }

  // function handleOnClickDelete() {
  //   setPreview("");
  // }

  function goToNextStep() {
    const newErrors = {};
    const dateBirthRegex =
      /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateBirthRegex.test(form.dateBirth)) {
      newErrors.dateBirth = null;
    } else {
      newErrors.dateBirth = "Please select a date.";
    }

    if (form.profileImg === "") {
      newErrors.profileImg = "Image cannot be blank.";
    } else {
      newErrors.profileImg = null;
    }

    setErrors(newErrors);

    if (!newErrors.dateBirth && !newErrors.profileImg) {
      localStorage.setItem("my-form", JSON.stringify(form));

      onClickChangeStep("completed");
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, right: -50 }}
      animate={{ opacity: 1, right: 0 }}
      exit={{ opacity: 1, right: 50 }}
      className="w-120 bg-white rounded-lg p-8 relative"
    >
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
                Date of birth <span className="text-[#E14942]">*</span>
              </p>
              <input
                className={
                  "w-full h-11 text-base leading-5 placeholder-[#8B8E95] focus:text-[#121316] border focus:outline-[#0CA5E9] rounded-lg p-3 " +
                  `${
                    errors.dateBirth
                      ? "border-[#E14942]"
                      : "border-[#CBD5E1] text-[#121316]"
                  }`
                }
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
                Profile image<span className="text-[#E14942]">*</span>
              </p>

              <div className="w-full h-45 overflow-hidden bg-[#7F7F800D] rounded-md flex justify-center items-center relative text-sm leading-5 font-medium text-[#09090B]">
                {preview ? (
                  <div>
                    <img
                      src={preview}
                      className="absolut inset-0 w-full h-full object-cover"
                    />
                    <button
                      className="w-6 h-6 bg-[#202124] text-white text-[7px] p-[2.5px] rounded-full absolute top-4 right-4 z-auto"
                      onClick={(e) => {
                        setPreview(null);
                        document.getElementById("imageFile").value = null;
                      }}
                    >
                      X
                    </button>
                  </div>
                ) : (
                  "Add image"
                )}
                <input
                  className={
                    "absolute inset-0 opacity-0 " + `${preview && "inset-30"}`
                  }
                  id="imageFile"
                  type="file"
                  onChange={handleOnChangeImg}
                  multiple
                ></input>
              </div>

              {errors.profileImg && (
                <div className="text-sm leading-5 text-[#E14942] mt-3">
                  {errors.profileImg}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => onClickChangeStep("password")}
              className="w-32 text-base leading-6 text-[#202124] bg-white border border-slate-300 py-2 rounded-md before:content-['<'] before:mr-3 hover:bg-gray-100 transition-all duration-300 box-border"
            >
              Back
            </button>
            <button
              onClick={goToNextStep}
              className="w-70 text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md hover:opacity-80 transition-all duration-300"
            >
              Continue
              <span className="ml-1 after:content-['>'] after:ml-3">3/3</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

//  <img src="/btn-left.png" className="w-6 h-6 inline-block mr-1"></img>
//  <img src="/btn-right.png" className="w-6 h-6 inline-block ml-1"></img>

//  {preview && <img src={preview} />}

// {
//   preview ? (
//     <img src={preview} className="h-45 object-cover place-self-center" />
//   ) : (
//     <div className="w-full h-45 bg-[#7F7F800D] rounded-md p-4 flex justify-center items-center relative text-sm leading-5 font-medium text-[#09090B]">
//       Add image
//       <input
//         className="absolute inset-0 opacity-0"
//         type="file"
//         onChange={handleOnChangeImg}
//         multiple
//       ></input>
//     </div>
//   );
// }
