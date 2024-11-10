import React from "react";
import Btnlist from "./Btnlist";
import Footer from "./Footer";
import Header from "./Header";

function Sidebar({ state, change }) {
  return (
    <div
      className={`bg-indigo-900 w-52 flex px-4 ${
        state === 1
          ? "translate-x-0 z-50 shadow-lg"
          : "max-md:-translate-x-full"
      } max-md:transition-transform max-md:duration-300 flex-col gap-y-6 fixed top-0 left-0 rounded-r h-screen`}
    >
      <Header
        change={change}
        state={state}
        name={"Koushil"}
        quote={"visit store"}
      ></Header>
      <Btnlist></Btnlist>
      <Footer
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>
        }
        credits={"200.22"}
      ></Footer>
    </div>
  );
}

export default Sidebar;
