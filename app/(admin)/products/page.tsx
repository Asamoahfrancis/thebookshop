"use client";
import Orderdetails from "@/app/ui/dashboard/orderdetails/orderInfo";
import MainTable from "@/app/ui/dashboard/table/maintable/maintable";
import Tableheader from "@/app/ui/dashboard/table/theader/theader";
import React from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import { useContext } from "react";
import Paginantion from "@/app/ui/products/pagination/paginantion";
const Products = () => {
  const ctx = useContext(ModalContext);
  return (
    <>
      <div className="bg-white min-h-[1000px]  rounded-md px-6 py-3">
        <section className="absolute top-0 left-0 w-full">
          {ctx.isclose && <Orderdetails />}
        </section>
        <div>
          <Tableheader />
        </div>
        <div>
          <MainTable />
        </div>
      </div>
      <Paginantion />
    </>
  );
};

export default Products;
