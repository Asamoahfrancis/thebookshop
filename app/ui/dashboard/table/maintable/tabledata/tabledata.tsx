import React from "react";
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
}: tablerowType) => {
  return (
    <tr className="text-xs border-b-2  border-gray-100">
      <td>
        <p className="p-4 ">{index}</p>
      </td>
      <td>{date}</td>
      <td>{orderId}</td>
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
