import React from "react";

function Header({ name, quote, change, state }) {
  const a = () => {
    change(0);
    console.log(state);
  };
  return (
    <div className="flex justify-between">
      <div className="flex  p-2 gap-x-8">
        <div className="flex flex-col  text-white">
          <div className="font-normal text-lg  ">{name}</div>
          <div className=" cursor-pointer underline">{quote}</div>
        </div>
        <div className="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <button onClick={a} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mt-2 text-white  bg-slate-500 rounded-full "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
