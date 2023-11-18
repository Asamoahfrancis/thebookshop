import React from "react";
import Tabledata from "./tabledata/tabledata";
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
  },
];

const MainTable = () => {
  return (
    <div>
      <table className="text-sm  w-full">
        <thead>
          <tr className="border-b-2 font-bold border-gray-400">
            <td>#</td>
            <td>Date</td>
            <td>Order No.</td>
            <td>Name</td>
            <td>Number</td>
            <td>Address</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
