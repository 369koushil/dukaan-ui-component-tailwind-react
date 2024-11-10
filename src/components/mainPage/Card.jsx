import React from "react";

function Card({ amnt, orders, title, special, time }) {
  return (
    <div
      className={`flex  flex-col rounded-md  w-96  ${
        special ? "bg-blue-700 text-white" : "bg-slate-200 h-36 shadow-md"
      } `}
    >
      <div className="flex justify-start p-4  gap-x-2">
        {title}
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
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="flex justify-between  gap-x-24 p-4">
        <div className="font-semibold text-3xl">{amnt}</div>
        {orders != null ? (
          <div
            className={`cursor-pointer underline flex flex-row justify-between text-blue-700 ${
              special ? " text-white  underline" : ""
            }`}
          >
            {orders}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 pt-2 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
      {special ? (
        <div className="bg-blue-900 rounded-md flex justify-between text-white p-4">
          <div>Next Payout date</div>
          <div>{time}</div>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
