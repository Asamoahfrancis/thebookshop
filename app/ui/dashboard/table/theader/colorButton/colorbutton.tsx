"use client";
import React, { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";

const Colorbutton = () => {
  const ctx = useContext(ModalContext);
  const handlerproduct = () => {
    ctx.closepage();
    ctx.addproduct();
  };
  const handlercategories = () => {
    ctx.closepage();
    ctx.addcategory();
  };
  const handlerbaaner = () => {
    ctx.closepage();
    ctx.addbanner();
  };
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 ">
      <button
        className=" px-8  py-2   text-white ml-4 rounded-md  bg-[#E9088C]"
        onClick={handlerproduct}
      >
        Add Product
      </button>
      <button
        className=" px-8  py-2 text-white  ml-4  rounded-md  bg-[#000]"
        onClick={handlercategories}
      >
        Add Category
      </button>
      <button
        className=" px-8  py-2  text-white ml-4 rounded-md  bg-blue-500"
        onClick={handlerbaaner}
      >
        Banner
      </button>
    </div>
  );
};

export default Colorbutton;
