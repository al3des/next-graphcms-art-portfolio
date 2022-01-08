import Layout from "@/components/layout/layout";
import "tailwindcss/tailwind.css";
import "@/styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
