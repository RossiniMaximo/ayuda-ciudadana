import React, { ReactNode } from "react";
import { Header } from "./header";

interface layoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: layoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
