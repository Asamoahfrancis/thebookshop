import Stats from "@/app/ui/dashboard/stats/page";
import Table from "@/app/ui/dashboard/table/page";
import React from "react";

const Dashboard = () => {
  return (
    <div className="py-10 px-8  m-2">
      <div>
        <Stats />
      </div>
      <div className=" mt-4 ">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
