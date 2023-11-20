import React from "react";
import Tableheader from "./theader/page";
import MainTable from "./maintable/maintable";

const Table = () => {
  return (
    <div className="bg-white min-h-[800px]  rounded-md px-6 py-3">
      <div>
        <Tableheader />
      </div>
      <div>
        <MainTable />
      </div>
    </div>
  );
};

export default Table;
