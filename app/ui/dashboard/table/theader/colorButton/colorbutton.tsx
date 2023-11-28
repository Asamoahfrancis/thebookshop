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
    <>
      <button
        className=" px-8  py-2  text-white ml-4 rounded-md  bg-[#E9088C]"
        onClick={handlerproduct}
      >
        Add Product
      </button>
      <button
        className=" px-8  py-2 text-white  ml-4  rounded-md  bg-[#000]"
        onClick={handlercategories}
      >
        Add Categoty
      </button>
      <button
        className=" px-8  py-2  text-white ml-4 rounded-md  bg-blue-500"
        onClick={handlerbaaner}
      >
        Banner
      </button>
    </>
  );
};

export default Colorbutton;
