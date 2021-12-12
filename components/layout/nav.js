import NavLink from "next/link";

import styles from "@/styles/nav.module.css";
import { SITE_NAME } from "@/constants/constants";

export default function Nav() {
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <NavLink href="/" activeStyle={styles.activeLink}>
                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  {SITE_NAME}
                </a>
              </NavLink>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavLink href="/categories" activeStyle={styles.activeLink}>
                  <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    categories
                  </a>
                </NavLink>
                <NavLink href="/works" activeStyle={styles.activeLink}>
                  <a
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    works
                  </a>
                </NavLink>
                <NavLink href="contact" activeStyle={styles.activeLink}>
                  <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    contact
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
