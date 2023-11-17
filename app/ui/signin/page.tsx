"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();
  return (
    <div className="text-black max-w-[590px] p-10  rounded-lg bg-white  border">
      <section className="w-full  grid place-items-center ">
        <div className="relative m-6 w-36 h-20 ">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <h1 className="text-center font-bold text-2xl">Admin Account</h1>
        <h6 className="text-center text-xs text-gray-500">Admin Dashboard</h6>
      </section>
      <section className="p-3 w-[400px]">
        <div className="flex py-2 flex-col">
          <label htmlFor="" className="text-gray-500">
            Username / E-mail
          </label>
          <input
            type="text"
            name=""
            id=""
            className="rounded-md border py-2 px-3 w-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
          />
        </div>
        <div className="flex py-2 flex-col">
          <label htmlFor="" className="text-gray-500">
            Password
          </label>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              className="rounded-md border py-2 px-3 w-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
            />
            <p className="w-4 right-2 top-1/3 absolute h-3">
              <Image
                src="/visible.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </p>
          </div>
        </div>
        <div className="flex py-4">
          <div className="flex items-center  mr-auto">
            <input type="checkbox" name="" id="" />
            <p className="text-xs px-1 text-gray-500">Remember me</p>
          </div>
          <p className="text-xs text-blue-500">Forgot Password?</p>
        </div>
        <div>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="border w-full text-center rounded-md py-2 px-3 text-white bg-[#E9088C99]"
          >
            <span className="animate-ping bg-black rounded-lg p-1 opacity-75">
              Just Click Here
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Signin;
