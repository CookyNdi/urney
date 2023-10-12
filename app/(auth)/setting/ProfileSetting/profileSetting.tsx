import React from "react";
import Style from "./index.module.css";

const ProfileSetting = () => {
  return (
    <>
      <h1 className={Style.Setting__HeadTitle}>Profile Settings</h1>
      <form className={Style.Setting__Form}>
        <div className={Style.Setting__Form__Left}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" value={"CookyNdi"} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={"CookyNdi@gmail.com"} />
          <button>Save Changes</button>
        </div>
        <div className={Style.Setting__Form__Right}>
          <div className={Style.Setting__Form__Image}></div>
        </div>
      </form>
    </>
  );
};

export default ProfileSetting;
