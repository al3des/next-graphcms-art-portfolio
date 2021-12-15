import { useRouter } from "next/router";

import { SITE_NAME } from "@/constants/constants";

import Link from 'next/link'
import NavLink from '@/components/utils/nav-link'

// import styles from "@/styles/nav.module.css";
import styles from '@/styles/nav-horizontal.module.css'
import stylesM from '@/styles/nav-vertical.module.css'


export default function Nav(props) {

  const router = useRouter()

  return (
    <nav className={styles.root}>
      <div className={styles.appBar}>
        <div className="relative flex items-center justify-between h-16">
          <div className={stylesM.root}>
            {/* <!-- Mobile menu button--> */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className={styles.navigation}>
              <Link href="/">
                <a className={styles.logo}>
                  {SITE_NAME}
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavLink href="/projects" className={styles.navLink} activeClassName={styles.navLinkActive}>
                    projects
                </NavLink>
                <NavLink href="/works" className={styles.navLink} activeClassName={styles.navLinkActive}>
                    works
                </NavLink>
                <NavLink href="/productions" className={styles.navLink} activeClassName={styles.navLinkActive}>
                    curatorship {'&'} production
                </NavLink>
                <NavLink href="/contact" className={styles.navLink} activeClassName={styles.navLinkActive}>
                    contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
