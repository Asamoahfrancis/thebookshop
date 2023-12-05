import React from "react";

const MoblieTable = ({
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
  Product_Category,
  Product_name,
  Cost,
  Stock,
}: {
  index?: string;
  date?: string;
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
}) => {
  return (
    <div className="p-4 [&>div]:p-2 text-sm bg-[#F0F0FA] md:hidden rounded-md">
      <div className="flex justify-between">
        Index : <span>{index}</span>
      </div>
      <div className="flex justify-between">
        date : <span>{date}</span>
      </div>
      <div className="flex justify-between">
        OrderId : <span>{orderId}</span>
      </div>
      <div className="flex justify-between">
        Customer : <span>{customer}</span>
      </div>
      <div className="flex justify-between">
        Phone : <span>{phone}</span>
      </div>
      <div className="w-full">
        <section className="w-[100%] gap-4 flex justify-between">
          <p>Address : </p>
          <p className=" flex-auto w-[50%]  text-right">{address}</p>
        </section>
      </div>
      <div className="flex justify-between">
        Amount : <span>{amount}</span>
      </div>

      <div className="flex bg-sky-100/50 border-sky-500 border items-center rounded-md justify-between">
        Status :{" "}
        <span
          style={{
            backgroundColor: `${statusColor} `,
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default MoblieTable;
