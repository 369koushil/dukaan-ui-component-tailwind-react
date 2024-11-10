import React from "react";

function Search() {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex flex-row gap-x-2 align-center  h-11 w-80 rounded-md pl-4 border-slate-300 border-2 border-solid">
        <div className="flex pt-2  bg-white-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          className=" bg-white-200 w-full  outline-none"
          type="text"
          placeholder="Order ID Order Transcation ID"
        />
      </div>
      <div>
        <div className="flex flex-row justify-between p-2 gap-x-4  ">
          <div className="rounded border border-black-150 flex flex-row gap-x-2 h-11 w-20 align-center pt-2 text-lg  pl-2">
            Sort
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
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
          <div className="rounded border border-black-150 h-11 w-14 flex align-center pt-2  pl-2 justify-center">
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
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
