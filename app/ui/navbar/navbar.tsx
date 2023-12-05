"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import Mobilelinks from "./mobilelinks/mobilelinks";
const Navbar = () => {
  const ctx = useContext(ModalContext);
  return (
    <div className="w-full  bg-white md:px-24 px-6 md:mb-8 sticky top-0 md:py-2 items-center  flex   ">
      <section className="absolute top-0 left-0 w-full">
        {ctx.isMoblie && <Mobilelinks />}
      </section>
      <button
        className="text-pink-600 md:hidden"
        onClick={() => ctx.closeMobile()}
      >
        <MdDashboard size={"2.5em"} />
      </button>
      <section className=" flex-auto md:flex-none flex justify-center items-center">
        <Link href="/" className="relative ">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-20 w-32 "
          />
        </Link>
      </section>

      <section className="flex-auto hidden md:block">
        <ul className="flex  justify-around">
          <li>
            <Link
              href="/"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/messaging"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Chat
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Logout
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
