import React from "react";
import Image from "next/image";
const Poductpic = () => {
  return (
    <div>
      <Image
        src="/pinkbag.png"
        alt="Picture of the author"
        width={80}
        height={80}
      />
    </div>
  );
};

export default Poductpic;
