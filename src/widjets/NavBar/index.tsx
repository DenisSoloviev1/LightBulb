"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomButton } from "@/shared/ui";
import { useAuthStore } from "@/entities/user";
import styles from "./styles.module.scss";
import toast from "react-hot-toast";
import { LogoSvg } from "@/shared/icon";

export default function NavBar() {
  // const { isAuth, resetAuth } = useAuthStore();
  // const [showMenu, setShowMenu] = useState(false);
  // const router = useRouter();

  // function handleAuth(isAuth: boolean) {
  //   if (isAuth) {
  //     resetAuth();
  //     toast.success("До новых встреч!");
  //   } else router.push("/auth");
  // }

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
            <span>калькулятор</span>
          </Link>
          <Link href={"/rate"}>
            <span>тарифы</span>
          </Link>
          {/* <Link href={"/rate/1"}>
            <span>на 1</span>
          </Link> */}
        </div>

        {/* <button
          className={`${styles.burger} ${showMenu ? styles.active : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button> */}
      </div>

      {/* <div className={styles.navBarEnd}>
        <CustomButton onClick={() => handleAuth(isAuth)}>
          {isAuth ? "Выйти" : "Войти"}
        </CustomButton>
      </div> */}

      {/* <div className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <Link href={"/calculator"}>калькулятор</Link>
        <Link href={"/dynamic"}>разводящая</Link>
        <Link href={"/dynamic/1"}>на 1</Link>
        <CustomButton onClick={() => handleAuth(isAuth)}>
          {isAuth ? "Выйти" : "Войти"}
        </CustomButton>
      </div> */}
    </nav>
  );
}
