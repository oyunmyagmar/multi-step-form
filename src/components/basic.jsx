export function BasicForm({ form, onChange, onClickChangeStep }) {
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
          placeholder="Your first name"
          value={form.firstName}
          onChange={(el) =>
            onChange({
              ...form,
              firstName: el.target.value,
            })
          }
        ></input>
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Last name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          placeholder="Your last name"
          value={form.lastName}
          onChange={(el) =>
            onChange({
              ...form,
              lastName: el.target.value,
            })
          }
        ></input>
      </div>

      <div>
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Username <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          placeholder="Your username"
          value={form.userName}
          onChange={(el) =>
            onChange({
              ...form,
              userName: el.target.value,
            })
          }
        ></input>
      </div>

      <button
        onClick={() => onClickChangeStep("password")}
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
