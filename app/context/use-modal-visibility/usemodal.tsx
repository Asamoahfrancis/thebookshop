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
  editproduct: () => {},
  isMoblie: false,
  isclose: false,
  isdetail: false,
  iscategory: false,
  isproduct: false,
  isbanner: false,
  isEdit: false,
});

export const ModalContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [isproduct, setproductvalid] = useState(false);
  const [iscategory, catevalid] = useState(false);
  const [isbanner, setbanner] = useState(false);
  const [isdetail, setdetails] = useState(false);
  const [ismobile, setmobile] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const [isclose, setclose] = useState(false);

  const closepage = () => {
    setclose((prev) => (prev === isclose ? !isclose : isclose));
  };

  const closeMobile = () => {
    setmobile((prev) => (prev === ismobile ? !ismobile : ismobile));
    console.log(ismobile);
  };
  const addcategory = () => {
    setproductvalid(false);
    catevalid(true);
    setbanner(false);
    setdetails(false);
    setEdit(false);
  };
  const addproduct = () => {
    setproductvalid(true);
    catevalid(false);
    setbanner(false);
    setdetails(false);
    setEdit(false);
  };
  const oderdetails = () => {
    setproductvalid(false);
    catevalid(false);
    setbanner(false);
    setdetails(true);
    setEdit(false);
  };
  const addbanner = () => {
    setproductvalid(false);
    catevalid(false);
    setbanner(true);
    setdetails(false);
    setEdit(false);
  };

  const editproduct = () => {
    console.log("clicked on edit product");
    setproductvalid(false);
    catevalid(false);
    setbanner(false);
    setdetails(false);
    setEdit(true);
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
        editproduct: editproduct,
        isMoblie: ismobile,
        isclose: isclose,
        isdetail: isdetail,
        iscategory: iscategory,
        isproduct: isproduct,
        isbanner: isbanner,
        isEdit: isEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
