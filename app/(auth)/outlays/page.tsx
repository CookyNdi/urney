import React from "react";
import Style from "./page.module.css";
import HeaderContent from "./_components/HeaderContent/headerContent";
import OutlaysContentCardLeft from "./_components/OutlaysContentCardLeft/outlaysContentCardLeft";
import OutlaysContentCardRight from "./_components/OutlaysContentCardRight/outlaysContentCardRight";

const Outlays = () => {
  return (
    <div className={Style.outlays__container}>
      <HeaderContent />
      <div className={Style.outlays__content_wrapper}>
        <div className={Style.outlays__content__left}>
          <OutlaysContentCardLeft />
        </div>
        <div className={Style.outlays__content__right}>
          <OutlaysContentCardRight />
        </div>
      </div>
    </div>
  );
};

export default Outlays;
