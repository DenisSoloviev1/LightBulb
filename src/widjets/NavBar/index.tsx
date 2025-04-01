"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CustomButton } from "@/shared/ui";
import { useAuthStore } from "@/entities/user";
import styles from "./styles.module.scss";
import toast from "react-hot-toast";

export default function NavBar() {
  const { isAuth, resetAuth } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  function handleAuth(isAuth: boolean) {
    if (isAuth) {
      resetAuth();
      toast.success("До новых встреч!");
    } else router.push("/auth");
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={100} height={50} />
        </Link>

        <div className={styles.navLinks}>
          <Link href={"/static"}>
            <span>стратичная</span>
          </Link>
          <Link href={"/dynamic"}>
            <span>разводящая</span>
          </Link>
          <Link href={"/dynamic/1"}>
            <span>на 1</span>
          </Link>
        </div>

        <button
          className={`${styles.burger} ${showMenu ? styles.active : ""}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={styles.navBarEnd}>
        <CustomButton onClick={() => handleAuth(isAuth)}>
          {isAuth ? "Выйти" : "Войти"}
        </CustomButton>
      </div>

      <div className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <Link href={"/static"}>стратичная</Link>
        <Link href={"/dynamic"}>разводящая</Link>
        <Link href={"/dynamic/1"}>на 1</Link>
        <CustomButton onClick={() => handleAuth(isAuth)}>
          {isAuth ? "Выйти" : "Войти"}
        </CustomButton>
      </div>
    </nav>
  );
}
