import React from "react";
import Style from "./index.module.css";
const HeaderContent = () => {
  return (
    <div className={Style.HeaderContent}>
      <form className={Style.HeaderContent__form}>
        <input type="text" placeholder="Search Activity" />
        <input type="date" />
      </form>
    </div>
  );
};

export default HeaderContent;
