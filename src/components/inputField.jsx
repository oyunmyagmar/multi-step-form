export function InputField({ title, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-sm leading-4 font-semibold text-[#334155]">
        {title}
        <span className="text-[#E14942]"> *</span>
      </h5>
      <input
        className="w-full border border-[#CBD5E1] 
      rounded-lg placeholder-[#8B8E95] text-base leading-5 text-[#8B8E95] p-3"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
