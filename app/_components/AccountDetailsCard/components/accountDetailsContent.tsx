import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Style from "./index.module.css";

interface dataProps {
  id: number;
  title: string;
  desc: string;
  datas: {
    price: string;
  }[];
}

export default function AccountDetailsContent({ contentData }: { contentData: dataProps }) {
  return (
    <>
      <div className={Style.AccountDetailsCard__Wrapper}>
        <p className={Style.AccountDetailsCard__Subtitle}>
          {contentData.title} <AiOutlineQuestionCircle />
        </p>
        <h1 className={Style.AccountDetailsCard__Title}>{contentData.datas[0].price}</h1>
      </div>
    </>
  );
}
