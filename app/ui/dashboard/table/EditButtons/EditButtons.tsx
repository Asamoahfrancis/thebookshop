import React from "react";
import Image from "next/image";
const EditButtons = () => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <button className="  bg-white text-white p-1 rounded-md">
        <div>
          <Image
            src="/gridting.png"
            alt="Picture of the author"
            width={24}
            height={24}
            style={{ zIndex: "-100" }}
          />
        </div>
      </button>
      <button className=" bg-white text-white p-1 rounded-md">
        <div>
          <Image
            src="/edit.png"
            alt="Picture of the author"
            width={33}
            height={33}
          />
        </div>
      </button>
      <button className="  bg-white text-white p-1 rounded-md">
        <div>
          <Image
            src="/trash.png"
            alt="Picture of the author"
            width={33}
            height={33}
          />
        </div>
      </button>
    </div>
  );
};

export default EditButtons;
