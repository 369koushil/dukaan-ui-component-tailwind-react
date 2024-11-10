import React from "react";
import Card from "./Card";
import CardSectionheader from "./CardSectionheader";

function Dashboard() {
  return (
    <div className="flex flex-col py-4 pl-8 gap-y-10 w-full h-1/2">
      <CardSectionheader />
      <div className="flex flex-wrap gap-4 justify-start items-center">
        <Card
          title={"Next Payout"}
          amnt={"₹ 3,456.45"}
          orders={"13 orders"}
          special={true}
          time={"Today 11:00AM"}
          className="w-full md:w-auto"
        />
        <Card
          title={"Amount Pending"}
          amnt={"₹ 62,892.69"}
          orders={"11 orders"}
          className="w-full md:w-auto"
        />
        <Card
          title={"Amount Processed"}
          amnt={"₹ 83,31,872.76"}
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}

export default Dashboard;
