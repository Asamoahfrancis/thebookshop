"use client";

import React from "react";
import Words from "./words/page";
import Select from "./select/page";
import Card from "./card/page";

const data = [
  {
    id: "1",
    number: "32",
    photo: "/bag.png",
    color: "#D9C7F066",
    textColor: "#6721C1",
  },
  {
    id: "2",
    number: "12",
    photo: "/messages.png",
    color: "#FDD6C166",
    textColor: "#DB6322",
  },
  {
    id: "3",
    number: "4",
    photo: "/additem.png",
    color: "#AFC9FD66",
    textColor: "#004CE0",
  },
  {
    id: "4",
    number: "2,345",
    photo: "/empty-wallet.png",
    color: "#D2FADB66",
    textColor: "#099528",
  },
];
const Stats = () => {
  return (
    <div className="bg-white py-4 rounded-md px-6">
      <div className="flex mb-3">
        <Words />
        <Select />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((d) => (
          <Card
            key={d.id}
            number={d.number}
            textColor={d.textColor}
            photo={d.photo}
            color={d.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;
