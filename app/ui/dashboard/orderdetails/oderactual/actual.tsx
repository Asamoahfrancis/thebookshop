import React from "react";
import Image from "next/image";
function Actual() {
  return (
    <div>
      <p className="text-center py-10 text-xl">Order details</p>
      <div>
        <section className="flex ">
          <div className="relative ">
            <Image
              src="/pinkbag.png"
              alt="Picture of the author"
              width={200}
              height={200}
              style={{
                clipPath: "ellipse(52% 34% at 52% 8%)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-start text-sm">
            <p>Featured Product</p>
            <p>GH₵ 120.00</p>
            <p>Quantity: 1</p>
            <p>Size: Medium</p>
            <p>Color: Pink</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Actual;
