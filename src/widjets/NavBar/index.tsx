"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { LogoSvg } from "@/shared/icon";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <LogoSvg />
          </div>
        </Link>

        <div className={styles.navLinks}>
          <Link href={"/calculator"}>
            <span className={pathname === "/calculator" ? styles.active : ""}>
              калькулятор
            </span>
          </Link>
          <Link href={"/rate"}>
            <span className={pathname === "/rate" ? styles.active : ""}>
              тарифы
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}