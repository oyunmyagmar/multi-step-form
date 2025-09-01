export function BasicForm({ form, onChange, onClickChangeStep }) {
  return (
    <div className="w-120 border rounded-lg p-8">
      <img className="w-15 h-15" src="/logo.png"></img>
      <h3 className="mt-2 text-[26px] leading-[31px] text-[#202124] font-semibold">
        Join Us! 😎
      </h3>
      <p className="mt-2 mb-[28px] text-lg leading-[22px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          First name <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#0CA5E9] rounded-lg p-3"
          placeholder="Placeholder"
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
          className="w-104 h-11 border border-[#0CA5E9] rounded-lg p-3"
          placeholder="Placeholder"
          value={form.lastName}
          onChange={(el) =>
            onChange({
              ...form,
              lastName: el.target.value,
            })
          }
        ></input>
      </div>

      <div className="mb-3">
        <p className="text-sm leading-4 font-semibold text-slate-700 mb-2">
          Username <span className="text-[#E14942]">*</span>
        </p>
        <input
          className="w-104 h-11 border border-[#0CA5E9] rounded-lg p-3"
          placeholder="Placeholder"
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
        className="w-full text-base leading-6 text-white bg-[#121316] py-2.5 rounded-md mt-[162px]"
      >
        Continue <span>1</span>
        <span>/</span>
        <span>3</span>
        <img src="/btn-right.png" className="w-6 h-6 inline-block"></img>
      </button>
    </div>
  );
}
