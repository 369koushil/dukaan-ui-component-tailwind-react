import React from "react";

function Btn({ name, svg }) {
  return (
    <li>
      <a
        href="#"
        className=" w-full text-lg no-underline capitalize  text-slate-100 hover:text-white-900 flex gap-x-2 items-center hover:bg-gray-600 hover:text-white p-2 rounded-lg transition-colors duration-200"
      >
        <div>{svg}</div>
        <div>{name}</div>
      </a>
    </li>
  );
}

export default Btn;
