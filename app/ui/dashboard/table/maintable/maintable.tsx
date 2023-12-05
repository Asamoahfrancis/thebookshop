import React, { useState } from "react";
import Tabledata from "./tabledata/tabledata";
import { usePathname } from "next/navigation";
import MoblieTable from "./tabledata/mobileTable/MoblieTable";
import { useContext } from "react";
import { ProductContext } from "@/app/context/ProductsContext/ProductContext";
import { products } from "@/app/data/products";

const MainTable = () => {
  const ctx = useContext(ProductContext);
  const pathanme = usePathname();
  let filtered = [];
  if (ctx.selectSearch === "main" && ctx.filterOrderId === "") {
    filtered = [...ctx.Order];
  } else {
    filtered = ctx.Order.filter(
      (filter) =>
        filter.status === ctx.selectSearch ||
        filter.orderId === ctx.filterOrderId
    );
  }

  return (
    <div>
      <table className="md:table hidden text-sm  w-full ">
        <thead className="hidden md:table-header-group">
          <tr className="border-b-2 font-bold  border-gray-400">
            <td>#</td>
            <td>Date</td>
            {pathanme === "/products" ? (
              <td className="indent-10">Image</td>
            ) : (
              <td>Order No.</td>
            )}

            {pathanme === "/products" ? (
              <td>Product Category</td>
            ) : (
              <td>Name</td>
            )}
            {pathanme === "/products" ? <td>Product name</td> : <td>Number</td>}
            {pathanme === "/products" ? <td>Cost</td> : <td>Address</td>}
            {pathanme === "/products" ? <td>Stock</td> : <td>Amount</td>}
            {pathanme === "/products" ? (
              <td className="text-center">Edit</td>
            ) : (
              <td>Status</td>
            )}
          </tr>
        </thead>
        <tbody className="grid md:table-header-group grid-cols-1 sm:grid-cols-2 gap-4 rounded-md">
          {pathanme !== "/products"
            ? filtered.map((d) => (
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
              ))
            : products.map((p) => (
                <Tabledata
                  key={p.id}
                  index={p.id}
                  date={p.date}
                  Product_Category={p.Product_Category}
                  Product_name={p.Product_name}
                  Cost={p.Cost}
                  Stock={p.Stock}
                  orderpic={p.orderpic}
                />
              ))}
        </tbody>
      </table>
      <section className="md:hidden   grid grid-cols-1 sm:grid-cols-2  gap-4 ">
        {pathanme !== "/products"
          ? ctx.Order.map((d) => (
              <MoblieTable
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
            ))
          : products.map((p) => (
              <MoblieTable
                key={p.id}
                index={p.id}
                date={p.date}
                Product_Category={p.Product_Category}
                Product_name={p.Product_name}
                Cost={p.Cost}
                Stock={p.Stock}
                orderpic={p.orderpic}
              />
            ))}
      </section>
    </div>
  );
};

export default MainTable;
