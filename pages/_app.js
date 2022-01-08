import Layout from "@/components/layout/layout";
import "tailwindcss/tailwind.css";
import "@/styles/global.css";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
