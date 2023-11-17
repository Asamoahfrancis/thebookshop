import React from "react";
import Image from "next/image";
const Tableheader = () => {
  return (
    <div className=" flex  justify-between ">
      <section className="flex-auto  flex gap-4   py-4">
        <p className="text-sm font-bold text-gray-500">Todays</p>
        <div className="flex  flex-auto  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="search keyword....."
            className="w-full rounded-md pl-2   bg-[#F0F0FA]"
          />
          <button className="bg-blue-500 p-1 ">
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
      <section className="flex text-xs justify-end gap-4 flex-auto ">
        <div>
          <p>Period</p>
          <select name="" id="" className="px-8 bg-[#F0F0FA]   rounded-md py-1">
            <option value="">Today</option>
            <option value="">Today</option>
            <option value="">Today</option>
            <option value="">Today</option>
          </select>
        </div>
        <div>
          <p>Period</p>
          <select name="" id="" className="px-8 bg-[#F0F0FA]   rounded-md py-1">
            <option value="">Today</option>
            <option value="">Today</option>
            <option value="">Today</option>
            <option value="">Today</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Tableheader;
