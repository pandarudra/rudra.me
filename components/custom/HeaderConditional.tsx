"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

export const HeaderConditional = () => {
  const pathname = usePathname();

  // Only render the header on the home page
  if (pathname !== "/") return null;

  return <Header />;
};
