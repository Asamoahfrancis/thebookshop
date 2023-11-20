import React from "react";
import Image from "next/image";
const Addbanner = () => {
  return (
    <div className=" px-8 py-8 text-sm">
      <section>
        <h1 className="text-center text-xl">Banner</h1>
      </section>
      <section className="mb-4">
        <div className="flex flex-col ">
          <p>Banner Tittle</p>
          <div className="w-full">
            <input
              type="text"
              name=""
              placeholder="Type Name"
              id=""
              className=" w-full pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-2 ">
          <p>Banner image</p>
          <div className="  ">
            <Image
              src="/banner.jpg"
              width={500}
              height={500}
              className="h-[200px]"
              sizes="100vw"
              alt="Picture of the author"
            />
          </div>
          <button className="bg-blue-500 w-48 text-white px-3 py-2 rounded-md">
            Upload banner
          </button>
          <p className="text-xs">
            Banner should be of high resolution and of a dimension 1280px by
            350px.
          </p>
          <div className="w-full flex flex-col">
            <p className="text- mt-4">Select Categories</p>
            <select
              name=""
              id=""
              className="border pl-2  flex-auto py-2 bg-[#F0F0FA]  rounded-md"
            >
              <option value="">
                <p>Home x</p>
              </option>
              <option value="">Today</option>
              <option value="">Today</option>
              <option value="">Today</option>
            </select>
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
      </section>
    </div>
  );
};

export default Addbanner;
