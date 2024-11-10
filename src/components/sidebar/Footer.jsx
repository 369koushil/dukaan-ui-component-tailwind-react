import React from "react";

function Footer({ credits, svg }) {
  return (
    <a className=" bg-blue-600 mt-4 flex align-center rounded-lg text-sm text-white hover:text-white-900  p-2 gap-x-2">
      {svg}
      <div className=" text-lg">{`Credits: ${credits}`}</div>
    </a>
  );
}

export default Footer;
