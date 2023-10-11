import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import Style from "./index.module.css";

const DateFilter = () => {
  return (
    <div className={Style.dateFilter}>
      <div className={Style.dateFilter__arrow}>
        <BsArrowLeftCircle />
      </div>
      <div className={Style.dateFilter__date}>
        <AiOutlineCalendar />
        <h1>01 September - 01 October</h1>
      </div>
      <div className={Style.dateFilter__arrow}>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

export default DateFilter;
