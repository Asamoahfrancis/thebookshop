"use client";
import React from "react";
import { useContext } from "react";
import { ModalContext } from "@/app/context/use-modal-visibility/usemodal";
import { usePathname } from "next/navigation";
import Poductpic from "./productpic/productpic";
import EditButtons from "../../EditButtons/EditButtons";
type tablerowType = {
  index?: string;
  date?: string;
  Pid?: string | undefined;
  orderId?: string;
  customer?: string;
  phone?: string;
  address?: string;
  amount?: string;
  statusColor?: string;
  status?: string;
  orderpic?: string;
  Product_Category?: string;
  Product_name?: string;
  Cost?: string;
  Stock?: string;
};

const Tabledata = ({
  index,
  date,
  Pid,
  orderId,
  customer,
  phone,
  address,
  amount,
  statusColor,
  status,
  Product_Category,
  Product_name,
  Cost,
  Stock,
  orderpic,
}: tablerowType) => {
  const pathname = usePathname();
  const ctx = useContext(ModalContext);

  const onhandlertable = () => {
    if (pathname === "/products") {
      return;
    }
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
        <td>{pathname !== "/products" ? date : Pid}</td>
        {pathname !== "/products" ? (
          <td>{orderId}</td>
        ) : (
          <td>
            <Poductpic />
          </td>
        )}
        {pathname !== "/products" ? (
          <>
            <td>{customer}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{amount}</td>
          </>
        ) : (
          <>
            <td>{Product_Category}</td>
            <td>{Product_name}</td>
            <td>{Cost}</td>
            <td>{Stock}</td>
          </>
        )}

        <td className=" text-center">
          {pathname === "/products" ? (
            <EditButtons Pid={Pid} />
          ) : (
            <p
              className=" rounded-md px-3 py-2"
              style={{ backgroundColor: statusColor }}
            >
              {status}
            </p>
          )}
        </td>
      </tr>
    </>
  );
};

export default Tabledata;
