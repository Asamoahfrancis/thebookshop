import React from "react";
import Actual from "../../oderactual/actual";
import Orderfooter from "../../orderfooter/orderfooter";
import OrderInfo from "../../orderinfo/info";

const Detailspage = () => {
  return (
    <>
      <section className="flex  items-center justify-center">
        <Actual />
      </section>
      <section>
        <OrderInfo />
      </section>
      <section className="flex items-center justify-center">
        <Orderfooter />
      </section>
    </>
  );
};

export default Detailspage;
