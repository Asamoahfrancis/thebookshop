import React from "react";
import Tabledata from "./tabledata/tabledata";
import { usePathname } from "next/navigation";
const data = [
  {
    id: "1",
    date: "21/12/23",
    orderId: "TBSGH00000001",
    customer: "John Doe",
    phone: "+233 12 345 6789",
    address: "6391 Elgin St. Celina, Delaware 10299",
    amount: "GH₵ 63.00",
    statusColor: "#FDD6C166",
    status: "delivered",
    orderpic: "/pinkbag.png",
  },
  {
    id: "2",
    date: "21/12/23",
    orderId: "TBSGH00000001",
    customer: "John Doe",
    phone: "+233 12 345 6789",
    address: "6391 Elgin St. Celina, Delaware 10299",
    amount: "GH₵ 63.00",
    statusColor: "#D2FADB66",
    status: "pending",
    orderpic: "/pinkbag.png",
  },
  {
    id: "3",
    date: "21/12/23",
    orderId: "TBSGH00000001",
    customer: "John Doe",
    phone: "+233 12 345 6789",
    address: "6391 Elgin St. Celina, Delaware 10299",
    amount: "GH₵ 63.00",
    statusColor: "#AFC9FD66",
    status: "on delivery",
    orderpic: "/pinkbag.png",
  },
  {
    id: "4",
    date: "21/12/23",
    orderId: "TBSGH00000001",
    customer: "John Doe",
    phone: "+233 12 345 6789",
    address: "6391 Elgin St. Celina, Delaware 10299",
    amount: "GH₵ 63.00",
    statusColor: "#D2FADB66",
    status: "cancelled",
    orderpic: "/pinkbag.png",
  },
  {
    id: "5",
    date: "21/12/23",
    orderId: "TBSGH00000001",
    customer: "John Doe",
    phone: "+233 12 345 6789",
    address: "6391 Elgin St. Celina, Delaware 10299",
    amount: "GH₵ 63.00",
    statusColor: "#FDD6C166",
    status: "pending",
    orderpic: "/pinkbag.png",
  },
  {
    id: "6",
    date: "21/12/23",
    orderId: "TBSGH00000001",
    customer: "John Doe",
    phone: "+233 12 345 6789",
    address: "6391 Elgin St. Celina, Delaware 10299",
    amount: "GH₵ 63.00",
    statusColor: "#AFC9FD66",
    status: "delivered",
    orderpic: "/pinkbag.png",
  },
];

const MainTable = () => {
  const pathanme = usePathname();
  return (
    <div>
      <table className="text-sm  w-full ">
        <thead className="hidden md:table-header-group">
          <tr className="border-b-2 font-bold  border-gray-400">
            <td>#</td>
            <td>Date</td>
            {pathanme === "/admin/products" ? (
              <td className="indent-10">Image</td>
            ) : (
              <td>Order No.</td>
            )}
            <td>Name</td>
            <td>Number</td>
            <td>Address</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className="grid md:table-header-group grid-cols-1 sm:grid-cols-2 gap-4 rounded-md">
          {data.map((d) => (
            <Tabledata
              key={d.id}
              index={d.id}
              date={d.date}
              orderId={d.orderId}
              customer={d.customer}
              phone={d.phone}
              address={d.address}
              amount={d.amount}
              statusColor={d.statusColor}
              status={d.status}
              orderpic={d.orderpic}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
