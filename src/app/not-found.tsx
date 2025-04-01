import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>
        Перейти на <Link href={"/"}>главную</Link>
      </p>
    </div>
  );
}
