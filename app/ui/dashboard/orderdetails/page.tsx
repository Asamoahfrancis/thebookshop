"use client";
import React, { useContext } from "react";
import Actual from "./oderactual/actual";
import OrderInfo from "./orderinfo/info";
import Orderfooter from "./orderfooter/orderfooter";
import Image from "next/image";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import { usePathname } from "next/navigation";
import Productmode from "./productmodal/productmode";
const Orderdetails = () => {
  const pathname = usePathname();
  const ctx = useContext(ModalContext);

  const handleclick = () => {
    ctx.visiblefalse();
  };
  return (
    <div className={` w-full bg-black/60 py-10 pb-40 min-h-[980px]  z-[100] `}>
      <div className="w-full rounded-lg relative  bg-white  px-14 max-w-[590px] mx-auto">
        <div className={`absolute top-2 right-2`} onClick={handleclick}>
          <Image
            src="/close-circle.png"
            alt="Picture of the author"
            width={24}
            height={24}
          />
        </div>
        {pathname == "/admin/products" ? (
          <Productmode />
        ) : (
          <>
            <section className="flex  items-center justify-center">
              <Actual />
            </section>
            <section>
              <OrderInfo />
            </section>
            <section className="flex items-center justify-center">
              <Orderfooter />
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Orderdetails;
