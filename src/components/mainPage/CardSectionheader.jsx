import React from "react";

function CardSectionheader() {
  return (
    <div className=" flex justify-between ">
      <div className="text-xl font-medium">Overview</div>
      <div className="rounded text-base border border-black-150 flex flex-row gap-x-2">
        This Month
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 pt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default CardSectionheader;
