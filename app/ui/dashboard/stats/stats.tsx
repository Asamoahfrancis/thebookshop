"use client";

import React from "react";
import Words from "../words/word";
import Select from "../select/select";
import { Mycard } from "../mycard/card";
import { myOrder } from "@/app/data/orders";

type dataType = {
  id: string;
  statnumber: string | number;
  photo: string;
  color: string;
  textColor: string;
  text: string;
}[];
const data: dataType = [
  {
    id: "1",
    statnumber: myOrder.length,
    photo: "/bag.png",
    color: "#D9C7F066",
    textColor: "#6721C1",
    text: "Orders",
  },
  {
    id: "2",
    statnumber: "12",
    photo: "/messages.png",
    color: "#FDD6C166",
    textColor: "#DB6322",
    text: "Issues",
  },
  {
    id: "3",
    statnumber: "4",
    photo: "/additem.png",
    color: "#AFC9FD66",
    textColor: "#004CE0",
    text: "Low on stock",
  },
  {
    id: "4",
    statnumber: "2,345",
    photo: "/empty-wallet.png",
    color: "#D2FADB66",
    textColor: "#099528",
    text: "Total",
  },
];
const Stats = () => {
  return (
    <div className="bg-white py-4  rounded-md md:px-6 px-3">
      <div className="flex  mb-3">
        <Words />
        <Select />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((d) => (
          <Mycard
            key={d.id}
            statnumber={d.statnumber}
            textColor={d.textColor}
            photo={d.photo}
            color={d.color}
            text={d.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
