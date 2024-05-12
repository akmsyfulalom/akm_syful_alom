"use client";
import { ReactNode } from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { AuthProvider } from "@/context/AuthUser";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
     
      <Provider store={store}>{children}</Provider>
     
    </AuthProvider>
  );
};

export default Providers;
