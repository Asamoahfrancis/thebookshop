import React from "react";
import Editcategories from "./editcatigories/editcategories";
const Addcategories = () => {
  return (
    <div className="text-xs py-10 ">
      <h1 className="text-center text-base">Create Category</h1>
      <div>
        <p>Create a new category</p>
        <div className=" w-full flex">
          <input
            type="text"
            name=""
            placeholder="Type Name"
            id=""
            className="border pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
          />
          <button className="px-8 py-2  bg-black text-white rounded-md">
            Create
          </button>
        </div>
        <div className="py-6 px-8">
          <p className="py-1">Edit Categories</p>
          <div className="w-full rounded-md bg-[#F0F0FA] border p-6 flex flex-col gap-4">
            <Editcategories />
            <Editcategories />
            <Editcategories />
            <Editcategories />
            <Editcategories />
            <Editcategories />
          </div>
        </div>
      </div>
      <div className=" py-4 grid place-items-center">
        <section className="flex gap-4">
          <button className=" rounded-md py-1 bg-black text-white px-8">
            Save
          </button>
          <button className=" border rounded-md py-1 px-8">close</button>
        </section>
      </div>
    </div>
  );
};

export default Addcategories;
