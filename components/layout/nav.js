import { useRouter } from "next/router";

import { SITE_NAME } from "@/constants/constants";

import Link from "next/link";
import NavLink from "@/components/utils/nav-link";

import styles from "@/styles/layout.module.css";

import useTranslation from "next-translate/useTranslation";

export default function Nav(props) {
  const router = useRouter();
  console.log(router)
  const { t } = useTranslation("common");
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
            {t("works")}
          </NavLink>
          <NavLink
            href="/prod/taller_humano"
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            {t("taller_humano")}
          </NavLink>
          <NavLink
            href="/prod/estampida"
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            {t("estampida")}
          </NavLink>
          <NavLink
            href="/prod/exhibicion"
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            {t("exhibitions")}
          </NavLink>
          {/* <NavLink
            href="/productions"
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
            >
            {t("curatorship_production")}
          </NavLink> */}
          <NavLink
            href="/contact"
            className={styles.navLink}
            activeClassName={styles.navLinkActive}
          >
            {t("contact")}
          </NavLink>
        </div>
        <div className="flex gap-2">
          language: 
          {router.locale === "de" ? (
              <Link
                href={router.asPath}
                locale="en"
                className={
                  router.locale === "en" ? styles.navLinkActive : styles.navLink
                }
              >
                en
              </Link>
            ) : (
              <Link
                href={router.asPath}
                locale="de"
                className={
                  router.locale === "de" ? styles.navLinkActive : styles.navLink
                }
              >
                de
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
}
