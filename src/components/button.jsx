export function Button({ name, variant, onClick }) {
  let classes = "box-border text-base leading-6 font-medium py-2.5 rounded-lg ";

  if (variant === "initial") {
    classes +=
      "w-full bg-[#121316] text-white hover:opacity-80 transition-all duration-300";
  } else if (variant === "primary") {
    classes +=
      "bg-[#121316] text-white w-70 flex-grow-1 hover:opacity-80 transition-all duration-300";
  } else if (variant === "secondary") {
    classes +=
      "bg-white text-[#202124] border border-[#CBD5E1] w-32 flex-none h-11 hover:bg-gray-100 transition-all duration-300";
  }
  return (
    <div>
      <button variant={variant} className={classes} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
