import Footer from "./footer";
import Header from "./header";

import styles from "@/styles/layout.module.css";
import Aside from "./aside";
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Aside>
        <Nav />
        {/* <Footer /> */}
      </Aside>
      <main className={styles.main}>{children}</main>
      
    </div>
  );
}
