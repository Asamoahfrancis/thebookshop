import React, { useState } from "react";
import Editcategories from "./editcatigories/editcategories";
import { useContext } from "react";
import { ProductContext } from "@/app/context/ProductsContext/ProductContext";
export const Categories = [
  {
    id: "c1",
    category: "Men",
  },
  {
    id: "c2",
    category: "Women",
  },
  {
    id: "c3",
    category: "Kids",
  },
];
const Addcategories = () => {
  const [getContextData, setgetContextData] = useState("");

  const ctx = useContext(ProductContext);

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      id: Math.random().toString(),
      category: getContextData,
    };
    ctx.AddCategory(data);
  };
  return (
    <div className="text-xs py-10 ">
      <h1 className="text-center text-base">Create Category</h1>
      <div>
        <p>Create a new category</p>
        <form className=" w-full flex" onSubmit={handlerSubmit}>
          <input
            type="text"
            name=""
            placeholder="Type Name"
            id=""
            onChange={(e) => setgetContextData(e.target.value)}
            className="border pl-2 flex-auto py-2 bg-[#F0F0FA] mr-2 rounded-md"
          />
          <button
            className="px-8 py-2  bg-black text-white rounded-md"
            type="submit"
          >
            Create
          </button>
        </form>
        <div className="py-6 px-8">
          <p className="py-1">Edit Categories</p>
          <div className="w-full rounded-md bg-[#F0F0FA] border p-6 flex flex-col gap-4">
            {ctx.StateCategory.map((c) => (
              <Editcategories key={c.id} category={c.category} />
            ))}
          </div>
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
    </div>
  );
};

export default Addcategories;
