import Head from "next/head";
import { getAllCategories } from "@/lib/graphcms";

import HomeCategories from "@/components/widgets/home-categories-list";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Paloma Zamorano Ferrari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </>
  );
}
