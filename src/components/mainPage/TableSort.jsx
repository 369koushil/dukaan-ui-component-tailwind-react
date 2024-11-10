import React from "react";

function TableSort() {
  return (
    <div className="flex flex-col gap-4 pt-2 pl-8">
      <div className="text-xl font-medium">Transactions | This Month</div>
      <div className="flex justify-start gap-x-2 ">
        <div className="bg-slate-200 rounded-2xl  py-1.5 px-4">Refunds (6)</div>
        <div className="bg-blue-500 rounded-2xl text-white py-1.5 px-4">
          Payouts (22)
        </div>
      </div>
    </div>
  );
}

export default TableSort;
