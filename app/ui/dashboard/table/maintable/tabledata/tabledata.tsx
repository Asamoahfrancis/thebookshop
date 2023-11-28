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

  const onhandlertable = () => {
    ctx.closepage();
    ctx.oderdetails();
  };
  return (
    <>
      <tr
        className="text-xs border-b-2 even:bg-black/5 cursor-grab hidden  md:table-row  border-gray-100"
        onClick={onhandlertable}
      >
        <td>
          <p className="p-4">{index}</p>
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

      <div
        className="md:hidden  p-4 text-base [&>p]:py-2 border-b-2 even:bg-black/5 cursor-grab  border-gray-100"
        onClick={onhandlertable}
      >
        <p>
          <b className="text-bold">Index</b> : {index}
        </p>
        <p>
          <b>Date</b> : {date}
        </p>
        {pathname !== "/admin/products" ? (
          <p>
            <b>OrderNo</b> : {orderId}
          </p>
        ) : (
          <p>
            <Poductpic />
          </p>
        )}
        <p>
          <b>Name</b> : {customer}
        </p>
        <p>
          <b>Phone</b> : {phone}
        </p>
        <p>
          <b>Address</b> : {address}
        </p>
        <p>
          <b>Amount</b> : {amount}
        </p>
        <p className=" text-center">
          <p
            className=" rounded-md px-3 py-2"
            style={{ backgroundColor: statusColor }}
          >
            <b>Status</b> : {status}
          </p>
        </p>
      </div>
    </>
  );
};

export default Tabledata;
