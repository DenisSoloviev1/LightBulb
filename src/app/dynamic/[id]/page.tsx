import { Metadata } from "next";
import { notFound } from "next/navigation";
import { use } from "react";
import styles from "../page.module.scss";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = decodeURIComponent(params.id);

  return {
    title: `Страница ${id}`,
    description: `Страница: ${id}`,
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = decodeURIComponent(use(params).id);

  if (!id) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <h1>Динамичная страница номер {id}</h1>
      </main>
    </>
  );
}
