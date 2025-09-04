export function Button({ name, variant, onClick }) {
  let classes = "text-base leading-6 font-medium py-2.5 rounded-lg ";

  if (variant === "initial") {
  } else if (variant === "primary") {
    classes += "bg-[#202124] text-white w-full flex-grow-1";
  } else if (variant === "secondary") {
    classes += "bg-white text-[#202124] border border-[#CBD5E1] w-32 flex-none";
  }

  return (
    <div>
      <button className={classes} onClick={onClick} variant={variant}>
        {name}
      </button>
    </div>
  );
}
