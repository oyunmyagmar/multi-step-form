export function Button({ name, onClick }) {
  return (
    <div>
      <button
        className="w-full text-base leading-6 font-medium py-2.5 bg-[#202124] text-white rounded-lg"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}
