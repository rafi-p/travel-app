"use client";
import React, { type FC, type ReactNode } from "react";
import QCProvider from "../available-flights/providers/query-provider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <QCProvider>{children}</QCProvider>
    </>
  );
};

export default Layout;
