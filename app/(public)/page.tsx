import React from "react";
import Style from "./page.module.css";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className={Style.MainPage}>
      <div className={Style.MainPage__Wraper}>
        <h1>A better way to manage your finance future with urney</h1>
        <div className={Style.MainPage__Wraper__Button}>
          <Link href={"/auth?page=register"}>Get Started</Link>
          <Link href={"/auth?page=login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
