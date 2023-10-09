import React from "react";
import Style from "./index.module.css";

export default function Navbar() {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar__left}>
        <h1>Overview</h1>
      </div>
      <div className={Style.navbar__right}>
        <div className={Style.navbar__image}></div>
        <h1>CookyNdi</h1>
      </div>
    </div>
  );
}
