import React from "react";

const Editcategories = () => {
  return (
    <>
      <div className=" w-full items-center flex">
        <input
          type="text"
          name=""
          id=""
          placeholder="Category 1"
          className=" flex-auto pl-2  bg-white py-2 mr-2 rounded-md"
        />
        <div className="flex items-center gap-2">
          <button className="  bg-black text-white p-2 rounded-md">
            Create
          </button>
          <button className=" bg-black text-white p-2 rounded-md">
            Create
          </button>
          <button className="  bg-black text-white p-2 rounded-md">
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default Editcategories;
