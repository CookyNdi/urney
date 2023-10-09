import Image from "next/image";
import Style from "./page.module.css";

export default function Home() {
  return (
    <div className={Style.main__container}>
      <h1>Main Page</h1>
    </div>
  );
}
