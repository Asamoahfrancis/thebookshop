"use client";
import React, { ReactNode, useState } from "react";

type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ModalContext = React.createContext({
  oderdetails: () => {},
  addcategory: () => {},
  addbanner: () => {},
  addproduct: () => {},
  closepage: () => {},
  closeMobile: () => {},
  isMoblie: false,
  isclose: false,
  isdetail: false,
  iscategory: false,
  isproduct: false,
  isbanner: false,
});

export const ModalContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [isproduct, setproductvalid] = useState(false);
  const [iscategory, catevalid] = useState(false);
  const [isbanner, setbanner] = useState(false);
  const [isdetail, setdetails] = useState(false);
  const [ismobile, setmobile] = useState(false);

  const [isclose, setclose] = useState(false);

  const closepage = () => {
    setclose((prev) => (prev === isclose ? !isclose : isclose));
  };

  const closeMobile = () => {
    console.log("clicked....");
    setmobile((prev) => (prev === ismobile ? !ismobile : ismobile));
    console.log(ismobile);
  };
  const addcategory = () => {
    setproductvalid(false);
    catevalid(true);
    setbanner(false);
    setdetails(false);
  };
  const addproduct = () => {
    setproductvalid(true);
    catevalid(false);
    setbanner(false);
    setdetails(false);
  };
  const oderdetails = () => {
    setproductvalid(false);
    catevalid(false);
    setbanner(false);
    setdetails(true);
  };
  const addbanner = () => {
    setproductvalid(false);
    catevalid(false);
    setbanner(true);
    setdetails(false);
  };

  return (
    <ModalContext.Provider
      value={{
        oderdetails: oderdetails,
        addcategory: addcategory,
        addbanner: addbanner,
        addproduct: addproduct,
        closepage: closepage,
        closeMobile: closeMobile,
        isMoblie: ismobile,
        isclose: isclose,
        isdetail: isdetail,
        iscategory: iscategory,
        isproduct: isproduct,
        isbanner: isbanner,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
