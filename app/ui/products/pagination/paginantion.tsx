import React from "react";

const Paginantion = () => {
  return (
    <>
      <div className="mt-4 flex justify-between px-4 mb-10 m-2">
        <section className="text-sm">
          {" "}
          <button className="px-4 hover:bg-pink-300/50 rounded-md">
            Previous
          </button>
        </section>
        <section className=" w-[200px] flex gap-4 text-sm ">
          <button className=" px-4 bg-pink-300/50 border rounded-md">1</button>
          <button className="px-4 hover:bg-pink-300/50 border rounded-md">
            2
          </button>
          <button className="px-4 hover:bg-pink-300/50 border rounded-md">
            3
          </button>
          <button className="px-4 hover:bg-pink-300/50 border rounded-md">
            4
          </button>
        </section>
        <section className="text-sm">
          <button className="px-4 hover:bg-pink-300/50 rounded-md">Next</button>
        </section>
      </div>
    </>
  );
};

export default Paginantion;
