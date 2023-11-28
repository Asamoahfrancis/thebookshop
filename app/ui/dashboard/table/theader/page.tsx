"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Colorbutton from "./colorButton/colorbutton";
const Tableheader = () => {
  const pathname = usePathname();
  return (
    <div className=" md:flex  items-center  md:items-center pb-4   ">
      <section className="flex-auto   items-center flex gap-4    py-4">
        <p className="text-sm font-bold text-gray-500">Todays</p>
        <div className="flex  flex-auto  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="search keyword....."
            className="w-full rounded-md pl-2 px-3 py-2  bg-[#F0F0FA]"
          />
          <button className="bg-blue-500 px-2 py-1 -ml-8 rounded-md ">
            <div className="w-[17px] h-[17px]">
              <Image
                src="/search.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </button>
        </div>
      </section>
      <section className="grid   text-xs  gap-4 sm:grid-cols-5 md:grid-cols-3  flex-auto ">
        <select name="" id="" className="px-8 bg-[#F0F0FA] py-2   rounded-md ">
          <option value="">Select the Period</option>
          <option value="">Today</option>
          <option value="">Today</option>
          <option value="">Today</option>
        </select>
        <select name="" id="" className="px-8 bg-[#F0F0FA]  py-2  rounded-md ">
          <option value="">Select the Period</option>
          <option value="">Today</option>
          <option value="">Today</option>
          <option value="">Today</option>
        </select>
        {pathname === "/products" && <Colorbutton />}
      </section>
    </div>
  );
};

export default Tableheader;
