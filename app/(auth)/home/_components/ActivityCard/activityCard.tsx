import React from "react";
import Style from "./index.module.css";
import RowsActivityCard from "./RowsActivityCard/rowsActivityCard";

const ActivityCard = () => {
  return (
    <div className={Style.ActivityCard}>
      <div className={Style.ActivityCard__Heading}>
        <h1 className={Style.ActivityCard__Heading__Title}>Recent Activity</h1>
        <p>More Activity</p>
      </div>
      <div className={Style.ActivityCard__Container}>
        <RowsActivityCard />
        <RowsActivityCard />
        <RowsActivityCard />
        <RowsActivityCard />
        <RowsActivityCard />
      </div>
    </div>
  );
};

export default ActivityCard;
