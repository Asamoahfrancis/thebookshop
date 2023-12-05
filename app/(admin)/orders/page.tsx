"use client";
import MainTable from "@/app/ui/dashboard/table/maintable/maintable";
import Tableheader from "@/app/ui/dashboard/table/theader/theader";
import React from "react";
import { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import Orderdetails from "@/app/ui/dashboard/orderdetails/orderInfo";
const Orders = () => {
  const ctx = useContext(ModalContext);
  return (
    <div className="bg-white border  rounded-md px-6 py-3">
      <section className="absolute top-0 left-0 w-full">
        {ctx.isclose && <Orderdetails />}
      </section>
      <div>
        <Tableheader />
      </div>
      <div className="min-h-[700px]">
        <MainTable />
      </div>
    </div>
  );
};

export default Orders;
