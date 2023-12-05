import React, { useState } from "react";
import Image from "next/image";
import EditButtons from "../../../table/EditButtons/EditButtons";
const Editcategories = ({ category }: { category: string }) => {
  const [getCate, setCate] = useState("");
  return (
    <>
      <div className=" w-full  items-center flex">
        <input
          type="text"
          name=""
          id=""
          value={category}
          placeholder="Category 1"
          className=" flex-auto p-3  bg-white  mr-2 rounded-md"
          onChange={(e) => setCate(e.target.value)}
        />
        <EditButtons />
      </div>
    </>
  );
};

export default Editcategories;
