import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "@/app/context/ProductsContext/ProductContext";
const Addproduct = () => {
  const ctx = useContext(ProductContext);
  return (
    <div className=" text-sm flex py-10 flex-col gap-4">
      <section>
        <h1 className="text-xl text-gray-400">Add Product</h1>
      </section>
      <section>
        <div>
          <select name="" id="" className="  w-[40%] py-2 px-3 rounded-md">
            <option value="">Select category</option>
            {ctx.StateCategory.map((cat) => (
              <option key={cat.id}>{cat.category}</option>
            ))}
          </select>
        </div>
      </section>
      <section>
        <div>
          <p>Product Name</p>
          <input
            type="text"
            name=""
            placeholder="Feartured product"
            id=""
            className="w-[40%] pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
          />
        </div>
      </section>
      <section>
        <div>
          <p>Quantity</p>
          <input
            type="number"
            name=""
            defaultValue={50}
            id=""
            className="w-[40%] pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
          />
        </div>
      </section>
      <section>
        <div className="">
          <p>Add Sizes</p>
          <div>
            <input
              type="number"
              name=""
              defaultValue={50}
              id=""
              className=" pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
            />
            <button className=" rounded-lg py-2 px-4 bg-black text-white ">
              Add more
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Add Sizes</p>
          <div>
            <input
              type="number"
              name=""
              defaultValue={50}
              id=""
              className=" pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
            />
            <button className=" rounded-lg py-2 px-4 bg-black text-white ">
              Add more
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p className="pb-2">Add Images</p>
          <div className="flex gap-4 items-end ">
            <section className="h-[290px] w-[290px] bg-[#F0F0FA] border-dashed border-2 border-sky-500  text-sm grid place-items-center ">
              <div className="">
                <div className="grid place-items-center ">
                  <Image
                    src="/download.png"
                    width={500}
                    height={500}
                    className="h-[42px] w-[42px]"
                    sizes="100vw"
                    alt="Picture of the author"
                  />
                </div>
                <p className="text-center">Upload Images</p>
                <p className="text-xs text-gray-400 text-center">
                  Drag and drop
                </p>
              </div>
            </section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
            <section className="h-[150px] w-[150px] bg-[#F0F0FA] border"></section>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Description</p>
          <textarea
            name=""
            id=""
            placeholder="Type details..."
            cols={30}
            rows={10}
            className="border rounded-md bg-[#F0F0FA] p-3"
          ></textarea>
        </div>
      </section>
      <section>
        <div>
          <p>Cost</p>
          <div>
            <input
              type="number"
              name=""
              defaultValue={50}
              id=""
              className=" pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
            />
          </div>
        </div>
      </section>
      <div className=" py-4 grid place-items-center">
        <section className="flex gap-4">
          <button className=" rounded-lg py-1 bg-black text-white px-10">
            Save
          </button>
          <button className=" border rounded-lg py-1 px-10">close</button>
        </section>
      </div>{" "}
    </div>
  );
};

export default Addproduct;
