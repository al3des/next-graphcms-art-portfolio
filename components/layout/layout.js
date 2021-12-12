import Footer from "./footer";
import Header from "./header";

import styles from "@/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* <div className={styles.container}> */}
        {children}
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}
