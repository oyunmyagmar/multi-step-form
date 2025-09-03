export function Button({ name }) {
  return (
    <div>
      <button className="w-full text-base leading-6 font-medium py-2.5 bg-[#202124] text-white rounded-lg">
        {name}
      </button>
    </div>
  );
}
