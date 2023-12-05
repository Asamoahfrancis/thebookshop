"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Colorbutton from "./colorButton/colorbutton";
import { useContext } from "react";
import { ProductContext } from "@/app/context/ProductsContext/ProductContext";
const Tableheader = () => {
  const [getOrderId, setOrderId] = useState("");
  const pathname = usePathname();

  const ctx = useContext(ProductContext);
  const dropdownHandler = (e: any) => {
    ctx.Selectfilter(e.target.value);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    ctx.Idfilter(getOrderId);
  };
  return (
    <div className=" md:flex  items-center  md:items-center pb-4   ">
      <section className="flex-auto   items-center flex gap-4    py-4">
        <p className="text-sm font-bold text-gray-500">Todays</p>
        <form className="flex  flex-auto  " onSubmit={submitHandler}>
          <input
            type="text"
            name=""
            id=""
            value={getOrderId}
            placeholder="search by OrderId....."
            className="w-full rounded-md pl-2 px-3 py-2  bg-[#F0F0FA]"
            onChange={(e) => setOrderId(e.target.value.trim())}
          />
          <button
            className="bg-blue-500 px-2 py-1 -ml-8 rounded-md "
            type="submit"
          >
            <Image
              src="/search.png"
              width={17}
              height={17}
              alt="Picture of the author"
            />
          </button>
        </form>
      </section>
      <section className="grid  text-xs  gap-4 sm:grid-cols-5 md:grid-cols-3  flex-auto ">
        <select
          name=""
          value={ctx.selectSearch}
          id=""
          className="px-8 bg-[#F0F0FA]  py-2  rounded-md "
          onChange={dropdownHandler}
        >
          <option value="main">Select Status</option>
          <option value="Delivered">Delivered</option>
          <option value="On_delivery">On delivery</option>
          <option value="Picked_up">Picked up</option>
          <option value="Pending">Pending</option>
          <option value="cancelled">cancelled</option>
        </select>
        <select name="" id="" className="px-8 bg-[#F0F0FA] py-2   rounded-md ">
          <option value="">Today</option>
          <option value="">Tomorrow</option>
          <option value="">Yesterday</option>
        </select>

        {pathname === "/products" && <Colorbutton />}
      </section>
    </div>
  );
};

export default Tableheader;
