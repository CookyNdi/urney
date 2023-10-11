import React from "react";
import Style from "./index.module.css";
import Link from "next/link";

const Navigationbar = () => {
  return (
    <div className={Style.Navigationbar}>
      <h1>Logo</h1>
      <ul className={Style.Navigationbar_List}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </ul>
      <Link href={"/auth?page=login"}>login</Link>
    </div>
  );
};

export default Navigationbar;
