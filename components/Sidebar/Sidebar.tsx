"use client";
import React from "react";
import Style from "./index.module.css";
import { BiPlanet, BiWallet } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { PiGearSixBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className={Style.sidebar}>
      <div className={Style.sidebar__logo}>
        <BiPlanet />
      </div>
      <ul className={Style.sidebar__menu}>
        <Link
          href={"/home"}
          scroll={false}
          className={`${Style.sidebar__menu__logo} ${path === "/home" ? Style.sidebar__menu__logo_Active : ""}`}
        >
          <AiOutlineHome />
          <h1 className={`${Style.sidebar__menu__title}`}>Home</h1>
        </Link>
        <Link
          href={"/outlays"}
          scroll={false}
          className={`${Style.sidebar__menu__logo}  ${path === "/outlays" ? Style.sidebar__menu__logo_Active : ""}`}
        >
          <BiWallet />
          <h1 className={Style.sidebar__menu__title}>Outlays</h1>
        </Link>
        <Link href={"/setting"} scroll={false} className={Style.sidebar__menu__logo}>
          <PiGearSixBold />
          <h1 className={Style.sidebar__menu__title}>Setting</h1>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
