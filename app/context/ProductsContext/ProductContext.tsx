"use client";
import React, { ReactNode, useState, useReducer } from "react";
import { myOrder } from "@/app/data/orders";
import { Categories } from "@/app/data/categories";
import { products } from "@/app/data/products";
import { pid } from "process";
type initialstateType = {
  StateCategory: { id: string; category: string }[];
};

export const ProductContext = React.createContext({
  StateCategory: Categories,
  AddCategory: (cate: { id: string; category: string }) => {},
  Order: myOrder,
  products: products,
  filterOrderId: "",
  selectSearch: "",
  Idfilter: (orderId: string) => {},
  Selectfilter: (filter: string) => {},
  removeProduct: (pId: string | undefined) => {},
});

const ReducerFunction = (state: any, action: any) => {
  if (action.type == "ADD CATEGORY") {
    const cat = state.StateCategory.concat(action.payload);
    return {
      ...state,
      StateCategory: cat,
    };
  }

  if (action.type == "Remove product") {
    const newRemoveProducts = state.products.filter(
      (product: any) => product.Pid !== action.payload
    );

    return {
      ...state,
      products: newRemoveProducts,
    };
  }

  return initialstate;
};
const initialstate = {
  StateCategory: Categories,
  Order: myOrder,
  products: products,
};
export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [{ StateCategory, Order, products }, dispatchFunction] = useReducer(
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

  const removeProduct = (pId: string | undefined) => {
    console.log(pId);
    dispatchFunction({ type: "Remove product", payload: pId });
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
        products,
        removeProduct,
        Idfilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
