import React from "react";
import Style from "./index.module.css";
import Link from "next/link";

interface LoginPageProps {
  selectedPage: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ selectedPage }) => {
  return (
    <div>
      <div
        className={`${Style.Auth__Login} ${
          selectedPage === "login" ? Style.Auth_login_Visible : Style.Auth__Login_Disable
        }`}
      >
        <div className={Style.Auth__Login__Left}>
          <h1>Login</h1>
          <form className={Style.Auth__Login__Left__Form}>
            <input type="email" />
            <input type="password" />
            <button>LOGIN</button>
          </form>
          <Link href={"?page=register"} className={Style.Auth__Login__Left__Button}>
            Register
          </Link>
        </div>
        <div className={Style.Auth__Login__Right}>
          <h1>Banner Login</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
