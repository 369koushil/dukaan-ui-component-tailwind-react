import React from "react";

function Credits() {
  return (
    <div className="flex w-full flex-col gap-y-2  ">
      <div className="flex text-lg  justify-center gap-x-2">
        Code written by{" "}
        <span className=" text-lg font-semibold text-blue-500">Koushil</span>
      </div>
      <div className=" flex justify-center font-semibold underline text-orange-600">
        <a
          target="_blank"
          href="https://github.com/369koushil/dukaan-ui-component-tailwind-react"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Credits;
