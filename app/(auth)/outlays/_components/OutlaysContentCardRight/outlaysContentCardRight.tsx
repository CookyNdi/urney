import React from "react";
import Style from "./index.module.css";
import RowoutlaysContentCardRight from "./RowOutlaysContentCardRight/rowOutlaysContentCardRight";

const OutlaysContentCardRight = () => {
  return (
    <div className={Style.outlaysContentCardRight}>
      <div className={Style.outlaysContentCardRight__Heading}>
        <h1>Top Activity</h1>
      </div>
      <div className={Style.outlaysContentCardRight__Container}>
        <RowoutlaysContentCardRight />
      </div>
    </div>
  );
};

export default OutlaysContentCardRight;
