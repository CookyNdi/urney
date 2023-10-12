import React from "react";
import Style from "./index.module.css";
import MenuSetting from "./MenuSetting/menuSetting";
import ProfileSetting from "./ProfileSetting/profileSetting";
import AccountSetting from "./AccountSetting/accountSetting";
import AppearanceSetting from "./Appearance/AppearanceSetting";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

const Setting: React.FC<SearchParamsProps> = ({ searchParams }) => {
  const selectedPage = searchParams.page || "profile";
  return (
    <div className={Style.Setting}>
      <MenuSetting />
      <div className={Style.Setting__Container}>
        {selectedPage === "profile" && <ProfileSetting />}
        {selectedPage === "account" && <AccountSetting />}
        {selectedPage === "appearance" && <AppearanceSetting />}
      </div>
    </div>
  );
};

export default Setting;
