import React from "react";
import Style from "./index.module.css";
const HeaderContent = () => {
  return (
    <div className={Style.HeaderContent}>
      <form className={Style.HeaderContent__form}>
        <input type="text" placeholder="Search Activity" />
        <div className={Style.HeaderContent__form__date}>
          <input type="date" />
          <h1>-</h1>
          <input type="date" />
        </div>
      </form>
    </div>
  );
};

export default HeaderContent;
