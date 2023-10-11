import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div style={{ margin: "auto" }}>
      <h1>Halaman Awal</h1>
      <Link href={"/auth?page=login"}>Login</Link>
      <br />
      <Link href={"home"}>Home</Link>
    </div>
  );
};

export default page;
