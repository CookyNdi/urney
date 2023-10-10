import Image from "next/image";
import Style from "./page.module.css";
import DateFilter from "./_components/DateFilter/dateFilter";
import AccountDetails from "./_components/AccountDetailsCard/accountDetailsCard";
import StatisticCard from "./_components/StatisticCard/statisticCard";
import ActivityCard from "./_components/ActivityCard/activityCard";

export default function Home() {
  return (
    <div className={Style.home}>
      <DateFilter />
      <div className={Style.home__content}>
        <AccountDetails />
        <ActivityCard />
      </div>
      <StatisticCard />
    </div>
  );
}
