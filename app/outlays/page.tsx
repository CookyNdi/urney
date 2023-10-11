import React from "react";
import Style from "./page.module.css";
import HeaderContent from "./_components/HeaderContent/headerContent";
import OutlaysContentCardLeft from "./_components/OutlaysContentCardLeft/outlaysContentCardLeft";
import OutlaysContentCardRight from "./_components/OutlaysContentCardRight/outlaysContentCardRight";

export default function Outlays() {
  return (
    <div className={Style.outlays__container}>
      <HeaderContent />
      <div className={Style.content_wrapper}>
        <div className={Style.content__left}>
          <OutlaysContentCardLeft />
        </div>
        <div className={Style.content__right}>
          <OutlaysContentCardRight />
        </div>
      </div>
    </div>
  );
}
