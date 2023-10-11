"use client";
import React from "react";
import Style from "./index.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  let navTitle = "";
  if (path === "/") {
    navTitle = "Overview";
  } else if (path === "/outlays") {
    navTitle = "Outlays Details";
  }
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar__left}>
        <h1>{navTitle}</h1>
      </div>
      <div className={Style.navbar__right}>
        <div className={Style.navbar__image}></div>
        <h1>CookyNdi</h1>
      </div>
    </div>
  );
};

export default Navbar;
