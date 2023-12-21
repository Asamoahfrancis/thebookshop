"use client";
import React, { useContext } from "react";

import Image from "next/image";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import Addbanner from "./addcategories/addbanner/addbanner";
import Detailspage from "./addcategories/detailspage/detailspage";
import Addcategories from "./addcategories/addcategories";
import Addproduct from "./addcategories/addproducts/addproduct";
import Editproduct from "./addcategories/editproducts/editproduct";
const Orderdetails = () => {
  const ctx = useContext(ModalContext);
  console.log("is deit is ", ctx.isEdit);
  const handleclick = () => {
    ctx.closepage();
  };
  return (
    <div className={` w-full bg-black/60 py-10 pb-40 min-h-screen  z-[100] `}>
      <div
        className={`w-full rounded-lg relative  bg-white  px-14 ${
          ctx.isproduct ? "minwidth" : "max-w-[590px]"
        }  mx-auto`}
      >
        <div className={`absolute top-2 right-2`} onClick={handleclick}>
          <Image
            src="/close-circle.png"
            alt="Picture of the author"
            width={24}
            height={24}
          />
        </div>

        {ctx.isdetail ? (
          <Detailspage />
        ) : ctx.iscategory ? (
          <Addcategories />
        ) : ctx.isbanner ? (
          <Addbanner />
        ) : ctx.isproduct ? (
          <Addproduct />
        ) : ctx.isEdit ? (
          <Editproduct />
        ) : null}
      </div>
    </div>
  );
};

export default Orderdetails;
