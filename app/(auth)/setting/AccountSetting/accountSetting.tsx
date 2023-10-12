import React from "react";
import Style from "./index.module.css";

const AccountSetting = () => {
  return (
    <div className={Style.Setting__Container}>
      <h1 className={Style.Setting__HeadTitle}>Account Settings</h1>
      <form className={Style.Setting__Form}>
        <label htmlFor="password">New Password</label>
        <input type="password" id="password" />
        <label htmlFor="confPassword">Confirm Password</label>
        <input type="password" id="confPassword" />
        <label htmlFor="oldPassword">Old Password</label>
        <input type="password" id="oldPassword" />
        <button>Save Changes</button>
      </form>
      <h1>Delete Account</h1>
      <button>Delete Account</button>
    </div>
  );
};

export default AccountSetting;
