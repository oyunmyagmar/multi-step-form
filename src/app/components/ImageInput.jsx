import React from "react";

export function ImageInput({
  title,
  type,
  onChange,
  multiple,
  preview,
  error,
}) {
  return (
    <div className="flex flex-col gap-3">
      <h5 className="text-sm leading-4 font-semibold text-[#334155]">
        {title}
        <span className="text-[#E14942]"> *</span>
      </h5>
      <div className="w-full h-45 bg-[#7F7F800D] rounded-md text-sm leading-5 text-[#09090B] font-medium flex justify-center items-center relative overflow-hidden">
        {preview ? (
          <img
            src={preview}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          "Browse or Drop Image"
        )}
        <input
          className="absolute inset-0 opacity-0"
          type={type}
          onChange={onChange}
          multiple={multiple}
        />
      </div>
      {error && <div className="text-sm leading-5 text-[#E14942]">{error}</div>}
    </div>
  );
}
