"use client"
import PrimaryFooter from '@/components/shared/primary-footer';
import PrimaryNavbar from '@/components/shared/primary-navbar';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'


const pathData = {
    paths: [
      "/dashboard",
      "/dashboard/all-products",
      "/dashboard/orders",
      "/dashboard/products-managment",
      "/dashboard/in-action",
      "/dashboard/slider-managment",
      "/dashboard/tech-tip-managment",
      "/dashboard/review-managment-tab",
      "/dashboard/gallery",
      "/dashboard/orders/[id]",
    ],
  };

export default function NavbarAndFooterProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    const pathname = usePathname();
    const shouldRenderNavbarAndFooter = !pathData?.paths?.some((path: string) => {
        return path.includes("[id]")
          ? pathname.startsWith(path.replace("[id]", ""))
          : pathname === path;
      });
  return (
    <div>
      {shouldRenderNavbarAndFooter && <PrimaryNavbar />}
      {children}
      {shouldRenderNavbarAndFooter && <PrimaryFooter />}
    </div>
  )
}
