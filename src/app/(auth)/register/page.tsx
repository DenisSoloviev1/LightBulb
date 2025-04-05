"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validator";
import toast from "react-hot-toast";
import { authUser, IAuth, useAuthStore } from "@/entities/user";
import { CustomButton, CustomInput } from "@/shared/ui";
import styles from "../page.module.scss";

export default function RegisterForm() {
  // const { setAuth } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Регистрация";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<IAuth> = async (
    data: z.infer<typeof schema>
  ) => {
    setIsSubmitting(true);

    try {
      console.log("Отправка данных:", data);

      // const response = await authUser(data);
      // setAuth(response.auth, response.role);
      // setTimeout(() => router.push("/"), 500); скорее всего нужно будет заменить путь

      toast.success("Вы зарегистрированны! (это демо)");
      reset();
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Неизвестная ошибка"
      );
      toast.error("Попробуйте снова");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Регистрация</h2>

      <CustomInput
        label="Email"
        type="text"
        {...register("email")}
        error={errors.email?.message}
      />

      <CustomInput
        label="Password"
        type={"password"}
        {...register("password")}
        error={errors.password?.message}
      />

      <div className={styles.textAndLink}>
        <p>Уже есть аккаунт?</p>
        <Link href={"/auth"}>Вход</Link>
      </div>

      <CustomButton disabled={isSubmitting}>
        {isSubmitting ? "Отправка..." : "Отправить"}
      </CustomButton>
    </form>
  );
}
