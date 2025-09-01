export function PasswordForm({ form, onChange, className, onClickChangeStep }) {
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
          placeholder="Placeholder"
          value={form.email}
          onChange={(el) =>
            onChange({
              ...form,
              email: el.target.value,
            })
          }
        ></input>
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Phone number <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          placeholder="Placeholder"
          value={form.telNumber}
          onChange={(el) =>
            onChange({
              ...form,
              telNumber: el.target.value,
            })
          }
        ></input>
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          placeholder="Placeholder"
          value={form.password}
          onChange={(el) =>
            onChange({
              ...form,
              password: el.target.value,
            })
          }
        ></input>
      </div>

      <div>
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Confirm password <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#CBD5E1] outline-[#0CA5E9] rounded-lg p-3"
          placeholder="Placeholder"
          value={form.confirmPass}
          onChange={(el) =>
            onChange({
              ...form,
              confirmPass: el.target.value,
            })
          }
        ></input>
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
          onClick={() => onClickChangeStep("image")}
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
