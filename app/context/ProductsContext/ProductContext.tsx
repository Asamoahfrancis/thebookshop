"use client";
import React, { ReactNode, useState, useReducer } from "react";
import { Categories } from "@/app/ui/dashboard/orderdetails/addcategories/addcategories";
import { myOrder } from "@/app/data/orders";
type initialstateType = {
  StateCategory: { id: string; category: string }[];
};

export const ProductContext = React.createContext({
  StateCategory: Categories,
  AddCategory: (cate: { id: string; category: string }) => {},
  Order: myOrder,
  filterOrderId: "",
  selectSearch: "",
  Idfilter: (orderId: string) => {},
  Selectfilter: (filter: string) => {},
});

const ReducerFunction = (state: any, action: any) => {
  if (action.type == "ADD CATEGORY") {
    const cat = state.StateCategory.concat(action.payload);
    return {
      ...state,
      StateCategory: cat,
    };
  }

  return initialstate;
};
const initialstate = {
  StateCategory: Categories,
  Order: myOrder,
  filter: "",
};
export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [{ StateCategory, Order }, dispatchFunction] = useReducer(
    ReducerFunction,
    initialstate
  );
  const [selectSearch, getSelectSearch] = useState("main");
  const [filterOrderId, setfilterOrderId] = useState("");

  const AddCategory = (cateData: { id: string; category: string }) => {
    dispatchFunction({ type: "ADD CATEGORY", payload: cateData });
  };

  const Idfilter = (orderId: string) => {
    setfilterOrderId(orderId);
  };

  const Selectfilter = (orderId: string) => {
    getSelectSearch(orderId);
  };

  return (
    <ProductContext.Provider
      value={{
        StateCategory,
        AddCategory,
        Selectfilter,
        selectSearch,
        filterOrderId,
        Order,
        Idfilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
