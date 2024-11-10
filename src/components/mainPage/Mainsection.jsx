import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import TableSort from "./TableSort";
import Search from "./Search";
import Table from "./Table";
import Credits from "../utility/Credits"

function Mainsection({ change, state }) {
  return (
    <div className="flex w-full max-md:-ml-4  h-full flex-col bg-gray-50">
      <Navbar change={change} state={state}></Navbar>
      <Dashboard></Dashboard>
      <div className="max-md:mt-60 ">
        <TableSort></TableSort>
        <div className="bg-white-200 flex flex-col pt-10 pl-4 gap-y-4">
          <Search></Search>
          <div className="">
            <Table></Table>
          </div>
        </div>
      </div>
      <Credits></Credits>
    </div>
  );
}

export default Mainsection;
