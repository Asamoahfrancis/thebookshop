"use client";
import React, { FC } from "react";
import Image from "next/image";
const Card: FC<{
  key: string;
  number: string;
  photo: string;
  textColor: string;
  color: string;
}> = ({ number, photo, color, textColor }) => {
  console.log(number, photo, color, textColor);
  return (
    <div
      style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      className={` h-[200px] p-6 rounded-md  flex flex-col`}
    >
      <div className="flex justify-between px-4 mb-auto">
        <section className={`text-4xl  font-bold`}>{number}</section>
        <section>
          <div>
            <Image
              src={photo}
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-[33px] h-[33px]"
            />
          </div>
        </section>
      </div>
      <div>
        <p className="font-[500]">Orders</p>
      </div>
    </div>
  );
};

export default Card;
