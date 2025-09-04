export function InputField({
  title,
  placeholder,
  type,
  value,
  onChange,
  error,
  variant,
}) {
  if (variant === "basicImg") {
    return (
      <div className="flex flex-col gap-2">
        <h5 className="text-sm leading-4 font-semibold text-[#334155]">
          {title}
          <span className="text-[#E14942]"> *</span>
        </h5>
        <div className="w-full h-45 bg-[#7F7F800D] rounded-md">
          <p className="text-sm leading-5 text-[#09090B] font-medium">
            Add image
          </p>
          <input type={type} onChange={onChange} variant={variant}></input>
        </div>
        {error && (
          <div className="text-sm leading-5 text-[#E14942]">{error}</div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-2">
        <h5 className="text-sm leading-4 font-semibold text-[#334155]">
          {title}
          <span className="text-[#E14942]"> *</span>
        </h5>
        <input
          className={`w-full border border-[#CBD5E1] rounded-lg placeholder-[#8B8E95] text-base leading-5 text-[#121316] focus:text-[#121316] focus:outline-[#0CA5E9] p-3 + ${
            error ? "border-[#E14942] text-[#E14942]" : ""
          }`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        ></input>
        {error && (
          <div className="text-sm leading-5 text-[#E14942]">{error}</div>
        )}
      </div>
    );
  }
}
