"use client";
import React, { ReactNode, useState } from "react";

type ThemeContextProviderProps = {
  children: ReactNode;
};
export const ModalContext = React.createContext({
  visiblefalse: () => {},
  visibletrue: () => {},
  isVisible: false,
});

export const ModalContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [isVisible, setvisible] = useState(false);
  const visiblefalse = () => {
    setvisible(false);
  };
  const visibletrue = () => {
    setvisible(true);
    console.log("hello world");
  };
  return (
    <ModalContext.Provider
      value={{
        visiblefalse: visiblefalse,
        visibletrue: visibletrue,
        isVisible: isVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
