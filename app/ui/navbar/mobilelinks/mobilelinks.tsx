"use client";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
const Mobilelinks = () => {
  const ctx = useContext(ModalContext);
  return (
    <div className="w-full min-h-screen bg-[#F0F0FA] md:hidden">
      <div
        className={`absolute top-2 right-2`}
        onClick={() => ctx.closeMobile()}
      >
        <IoIosCloseCircle size={"2.5em"} />
      </div>
      <section className="[&>div]:text-center [&>div]:text-pink-400 [&>div]:text-xl [&>div]:font-bold [&>div]:border-b-2 [&>div]:border-b-pink-300  hover:[&>div]:bg-pink-500 hover:[&>div]:text-[#F0F0FA] [&>div]:p-6 pt-10">
        <div>
          <Link href="/"> Dashboard</Link>
        </div>
        <div>
          <Link href="/orders"> Orders</Link>
        </div>
        <div>
          <Link href="/messaging"> Chat</Link>
        </div>
        <div>
          <Link href="/products"> Products</Link>
        </div>
        <div>
          <Link href="/logout"> Logout</Link>
        </div>
      </section>
    </div>
  );
};

export default Mobilelinks;
