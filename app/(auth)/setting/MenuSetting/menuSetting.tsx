import React from "react";
import Style from "./index.module.css";
import Link from "next/link";

const MenuSetting = () => {
  return (
    <div className={Style.MenuSetting}>
      <ul className={Style.MenuSetting__List}>
        <Link href={"?page=profile"}>Profile</Link>
        <Link href={"?page=account"}>Account</Link>
        <Link href={"?page=appearance"}>Appearance</Link>
        <Link href={"/logout"}>Logout</Link>
      </ul>
    </div>
  );
};

export default MenuSetting;
