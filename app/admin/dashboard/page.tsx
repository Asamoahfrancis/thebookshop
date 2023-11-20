"use client";

import Stats from "@/app/ui/dashboard/stats/page";
import Table from "@/app/ui/dashboard/table/page";
import React, { useContext, useState } from "react";
import Orderdetails from "../../ui/dashboard/orderdetails/page";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
const Dashboard = () => {
  const ctx = useContext(ModalContext);
  return (
    <div className="py-10 px-8  m-2">
      <section className="absolute top-0 left-0 w-full">
        {ctx.isclose && <Orderdetails />}
      </section>
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
