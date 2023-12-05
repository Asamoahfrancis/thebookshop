"use client";

import Stats from "@/app/ui/dashboard/stats/stats";
import Table from "@/app/ui/dashboard/table/table";
import React, { useContext, useState } from "react";
import Orderdetails from "../ui/dashboard/orderdetails/orderInfo";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
const Dashboard = () => {
  const ctx = useContext(ModalContext);
  return (
    <div className=" md:px-8  m-2">
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
