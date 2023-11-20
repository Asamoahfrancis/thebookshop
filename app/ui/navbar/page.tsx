import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full  bg-white px-24 mb-8 sticky top-0 py-2 items-center border drop-shadow-xl flex ">
      <section className=" flex-auto">
        <Link href="/admin/dashboard" className="relative">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-20 w-32"
          />
        </Link>
      </section>
      <section className="flex-auto ">
        <ul className="flex  justify-around">
          <li>
            <Link
              href="/admin/dashboard"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/orders"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/admin/messaging"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Chat
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" py-2 px-3 rounded-md text-black hover:bg-[#7E7E7E21] hover:text-[#E9088C]"
            >
              Logout
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
