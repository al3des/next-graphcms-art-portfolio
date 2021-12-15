import Footer from "./footer";
import Header from "./header";

import styles from "@/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full min-h-screen flex-1 px-20">
        {/* <div className={styles.container}> */}
        {children}
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
