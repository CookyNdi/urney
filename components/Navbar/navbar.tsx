"use client";
import React, { useState } from "react";
import Style from "./index.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();
  const [modal, setModal] = useState(false);
  let navTitle = "";
  if (path === "/home") {
    navTitle = "Overview";
  } else if (path === "/outlays") {
    navTitle = "Outlays Details";
  }
  const handlePopUpModal = () => {
    console.log("clicked");
    setModal((prevToggle) => !prevToggle);
  };
  return (
    <>
      <div className={Style.navbar}>
        <div className={Style.navbar__left}>
          <h1>{navTitle}</h1>
        </div>
        <div className={Style.navbar__right} onClick={() => handlePopUpModal()}>
          <div className={Style.navbar__image}></div>
          <h1>CookyNdi</h1>
        </div>
        {modal && (
          <div className={Style.navbar__right__modal}>
            <h1>CookyNdi</h1>
            <Link href={"/setting"}>Profile</Link>
            <Link href={"/setting"}>Setting</Link>
            <Link href={"/logout"}>Logout</Link>
          </div>
        )}
      </div>
      {modal && <div className={Style.navbar__right__closeModal} onClick={() => handlePopUpModal()}></div>}
    </>
  );
};

export default Navbar;
