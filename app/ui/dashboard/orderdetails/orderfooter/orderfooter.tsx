"use client";
import React, { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
function Orderfooter() {
  const ctx = useContext(ModalContext);
  return (
    <div>
      <div className="flex text-sm  items-center gap-4">
        <p>Status</p>
        <select
          name=""
          id=""
          className="bg-[#F0F0FA] mb-2 rounded-md border px-8 py-1 text-gray-500"
        >
          <option value="">Today</option>
          <option value="">Today</option>
          <option value="">Today</option>
        </select>
      </div>
      <button
        className="mb-4  text-white bg-black rounded-full py-1 px-12"
        onClick={() => ctx.closepage()}
      >
        Done
      </button>
    </div>
  );
}

export default Orderfooter;
