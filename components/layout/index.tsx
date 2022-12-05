import React from "react";
import { Header } from "./header";

interface layoutProps {
  children: React.ReactNode;
  login?: string;
}

export function Layout({ login, children }: layoutProps) {
  return (
    <div>
      <Header login={login} />
      {children}
    </div>
  );
}
