import React from "react";

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
          <tr className="text-xs border-b-2  border-gray-100">
            <td>
              <p className="p-4 ">1</p>
            </td>
            <td>21/12/23</td>
            <td>TBSGH00000001</td>
            <td>John Doe</td>
            <td>+233 12 345 6789</td>
            <td>6391 Elgin St. Celina, Delaware 10299</td>
            <td>GH₵ 63.00</td>
            <td className="  text-center   ">
              <p className="border rounded-md px-3 py-1">Status</p>
            </td>
          </tr>
          <tr className="text-xs border-b-2  border-gray-100">
            <td>
              <p className="p-4 ">1</p>
            </td>
            <td>21/12/23</td>
            <td>TBSGH00000001</td>
            <td>John Doe</td>
            <td>+233 12 345 6789</td>
            <td>6391 Elgin St. Celina, Delaware 10299</td>
            <td>GH₵ 63.00</td>
            <td className="  text-center   ">
              <p className="border rounded-md px-3 py-1">Status</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
