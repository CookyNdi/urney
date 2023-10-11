import React from "react";
import Style from "./index.module.css";
import Link from "next/link";

interface LoginPageProps {
  selectedPage: string;
}

const RegisterPage: React.FC<LoginPageProps> = ({ selectedPage }) => {
  return (
    <div
      className={`${Style.Auth__Register} ${
        selectedPage === "register" ? Style.Auth_Register_Visible : Style.Auth__Register_Disable
      }`}
    >
      <div className={Style.Auth__Register__Left}>
        <h1>Banner Register</h1>
      </div>
      <div className={Style.Auth__Register__Right}>
        <h1>Register</h1>
        <form className={Style.Auth__Register__Right__Form}>
          <input type="email" />
          <input type="password" />
          <button>LOGIN</button>
        </form>
        <Link href={"?page=login"} className={Style.Auth__Register__Right__Button}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
