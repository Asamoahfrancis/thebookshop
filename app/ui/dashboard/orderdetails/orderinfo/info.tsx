import React from "react";

function OrderInfo() {
  return (
    <div className="grid   text-sm grid-cols-2">
      <div className="[&>p]:p-2">
        <p>Name:</p>
        <p>Number:</p>
        <p>Email:</p>
        <p>Shipping address:</p>
        <p>Date:</p>
        <p>Order number:</p>
        <p>Total:</p>
        <p>Payment method:</p>
        <p>Name:</p>
        <p>Message:</p>
      </div>
      <div className="">
        <div className="[&>p]:p-2 [&>p]:text-right">
          <p>John Doe</p>
          <p>+233 24 453 6534</p>
          <p>johndoe@gmail.com</p>
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          <p>22nd December, 2023</p>
          <p>TBSGH000000123</p>
          <p>GH₵ 164.00</p>
          <p>Payment on delivery</p>
          <p>John Doe</p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
