import React from "react";
import Style from "./index.module.css";
import { dataContens } from "@/libs/AccountDetailsDataContens";
import AccountDetailsContent from "./components/accountDetailsContent";

export default function AccountDetailsCard() {
  return (
    <div className={Style.AccountDetailsCard}>
      <h1>Account Details</h1>
      <div className={Style.AccountDetailsCard__Container}>
        {dataContens.map((data) => (
          <AccountDetailsContent contentData={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
