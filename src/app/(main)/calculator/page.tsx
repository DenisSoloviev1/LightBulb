"use client";

import React, { useState } from "react";
import { CustomButton, CustomInput, CustomSelect } from "@/shared/ui";
import styles from "./page.module.scss";
import { years, month, voltage, power } from "@/shared/constants";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRate } from "./validator";
import toast from "react-hot-toast";

export default function CalculatorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<z.infer<typeof schemaRate>>({
    resolver: zodResolver(schemaRate),
    defaultValues: {
      year: "",
      month: "",
      voltage: "",
      power: "",
    },
  });

  const selectedValues = watch();

  const onSubmit: SubmitHandler<z.infer<typeof schemaRate>> = async (data) => {
    setIsSubmitting(true);

    try {
      console.log("Отправка данных:", data);
      // Здесь будет ваша логика отправки данных
      toast.success("Успешно");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при расчете");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Обработчики изменения для CustomSelect
  const handleYearChange = (option: { id: string; name: string }) => {
    setValue("year", option.id);
  };

  const handleMonthChange = (option: { id: string; name: string }) => {
    setValue("month", option.id);
  };

  const handleVoltageChange = (option: { id: string; name: string }) => {
    setValue("voltage", option.id);
  };

  const handlePowerChange = (option: { id: string; name: string }) => {
    setValue("power", option.id);
  };

  return (
    <div className={styles.section}>
      <h1>Калькулятор тарифов</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.title}>
          <h2>Калькулятор стоимости электроэнергии</h2>
          <p>Сравните ценовые категории за несколько кликов</p>
        </div>

        <div className={styles.group}>
          <h3>Период расчета</h3>

          <div className={styles.fieldContainer}>
            <CustomSelect
              options={years}
              label="Год"
              onSelect={handleYearChange}
              selectedValue={selectedValues.year}
            />

            <CustomSelect
              options={month}
              label="Месяц"
              onSelect={handleMonthChange}
              selectedValue={selectedValues.month}
            />
          </div>
        </div>

        <div className={styles.group}>
          <h3>Электричество</h3>
          <CustomSelect
            options={voltage}
            label="Уровень напряжения"
            onSelect={handleVoltageChange}
            selectedValue={selectedValues.voltage}
          />
          <CustomSelect
            options={power}
            label="Диапазон максимальной мощности энергопринимающих устроиств"
            onSelect={handlePowerChange}
            selectedValue={selectedValues.power}
          />

          <div className={styles.fieldContainer}>
            <CustomInput label={"Объем электроэнергии (кВт/ч)"} />
            <CustomInput label={"Объем мощности (кВт)"} />
          </div>
        </div>

        <div className={styles.formBottom}>
          <CustomButton disabled={isSubmitting}>
            {isSubmitting ? "Вычисляем..." : "Рассчитать"}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
