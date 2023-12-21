import React, { FC } from "react";
import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "@/app/context/ProductsContext/ProductContext";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
const EditButtons: FC<{ Pid: string | undefined }> = ({ Pid }) => {
  const ctx = useContext(ProductContext);
  const ctx_one = useContext(ModalContext);

  const handlerClick = (e: any) => {
    ctx_one.closepage();
    ctx_one.editproduct();
  };
  return (
    <div className="flex items-center justify-center gap-2 ">
      <button className="  bg-white text-white p-1 rounded-md"></button>
      <button
        className=" bg-white text-white p-1 rounded-md"
        onClick={handlerClick}
      >
        <div>
          <Image
            src="/edit.png"
            alt="Picture of the author"
            width={33}
            height={33}
          />
        </div>
      </button>
      <button
        className="  bg-white text-white p-1 rounded-md"
        onClick={(e) => ctx.removeProduct(Pid)}
      >
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
