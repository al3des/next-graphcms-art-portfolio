import { useRouter } from "next/router";

import { SITE_NAME } from "@/constants/constants";

import Link from "next/link";
import NavLink from "@/components/utils/nav-link";

import styles from "@/styles/layout.module.css";

export default function Nav(props) {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logo}>{SITE_NAME}</a>
          </Link>
        </div>
        <div>
          <div className={styles.navigation}>
            <NavLink
              href="/works"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              works
            </NavLink>
            <NavLink
              href="/taller-humano"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              taller Humano
            </NavLink>
            <NavLink
              href="/estampida"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              estampida
            </NavLink>
            <NavLink
              href="/productions"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              curatorship {"&"} production
            </NavLink>
            <NavLink
              href="/contact"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              contact
            </NavLink>
          </div>
      </div>
    </nav>
  );
}
