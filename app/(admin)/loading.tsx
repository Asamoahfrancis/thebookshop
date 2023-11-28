import React from "react";

const Loading = () => {
  return (
    <div className="fixed w-full h-[100vh] bg-black/50 flex justify-center items-center">
      <div className=" w-[400px] h-[400px] flex justify-center items-center text-4xl font-bold">
        Loading....
      </div>
    </div>
  );
};

export default Loading;
