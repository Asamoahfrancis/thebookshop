"use client";
import React from "react";
import { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import { usePathname } from "next/navigation";
import Poductpic from "./productpic/productpic";
type tablerowType = {
  index: string;
  date: string;
  orderId: string;
  customer: string;
  phone: string;
  address: string;
  amount: string;
  statusColor: string;
  status: string;
  orderpic: string;
};

const Tabledata = ({
  index,
  date,
  orderId,
  customer,
  phone,
  address,
  amount,
  statusColor,
  status,
  orderpic,
}: tablerowType) => {
  const pathname = usePathname();
  const ctx = useContext(ModalContext);

  return (
    <tr
      className="text-xs border-b-2 even:bg-black/5 cursor-grab border-gray-100"
      onClick={() => ctx.visibletrue()}
    >
      <td>
        <p className="p-4 ">{index}</p>
      </td>
      <td>{date}</td>
      {pathname !== "/admin/products" ? (
        <td>{orderId}</td>
      ) : (
        <td>
          <Poductpic />
        </td>
      )}
      <td>{customer}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{amount}</td>
      <td className=" text-center">
        <p
          className=" rounded-md px-3 py-2"
          style={{ backgroundColor: statusColor }}
        >
          {status}
        </p>
      </td>
    </tr>
  );
};

export default Tabledata;
