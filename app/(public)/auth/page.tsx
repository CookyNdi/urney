import React from "react";
import Style from "./page.module.css";
import LoginPage from "./_components/Login/LoginPage";
import RegisterPage from "./_components/Register/RegisterPage";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

const Auth: React.FC<SearchParamsProps> = ({ searchParams }) => {
  const selectedPage = searchParams.page || "login";
  return (
    <div className={Style.Auht}>
      <div className={Style.Auth__Container}>
        <LoginPage selectedPage={selectedPage} />
        <RegisterPage selectedPage={selectedPage} />
        {selectedPage !== "login" && selectedPage !== "register" && <h1>Page Not Found</h1>}
      </div>
    </div>
  );
};

export default Auth;
