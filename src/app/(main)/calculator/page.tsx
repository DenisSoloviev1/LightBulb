"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRate } from "@/entities/calculator";
import { VoltageLevel, calcRate } from "@/entities/calculator";
import { CustomButton, CustomInput, CustomSelect } from "@/shared/ui";
import { years, month, voltageLevels, maxPowers } from "@/shared/constants";
import styles from "./page.module.scss";
import toast from "react-hot-toast";
import { useState } from "react";

type FormState = {
  year: number;
  month: number;
  voltageLevel: VoltageLevel;
  maxPower: number;
  energyVolume: number;
  powerVolume: number;
};

export default function CalculatorPage() {
  const [result, setResult] = useState<{ cost3CK: number; cost4CK: number }>();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormState>({
    resolver: zodResolver(schemaRate),
    defaultValues: {
      year: 0,
      month: 0,
      voltageLevel: VoltageLevel.LOW,
      maxPower: 0,
      energyVolume: 0,
      powerVolume: 0,
    },
  });

  const onSubmit = async (data: FormState) => {
    try {
      const result = await calcRate(data);
      setResult(result);
      toast.success("Успешно");

      reset({
        year: 0,
        month: 0,
        voltageLevel: VoltageLevel.LOW,
        maxPower: 0,
        energyVolume: 0,
        powerVolume: 0,
      });
    } catch (error) {
      toast.error("Ошибка при расчете");
      console.error(error);
    }
  };

  return (
    <div className={styles.section}>
      <h1>Калькулятор тарифов</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Остальной код остается без изменений */}
        <div className={styles.title}>
          <h2>Калькулятор стоимости электроэнергии</h2>
          <p>Сравните ценовые категории за несколько кликов</p>
        </div>

        <div className={styles.group}>
          <h3>Период расчета</h3>
          <div className={styles.fieldContainer}>
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  label="Год"
                  options={years}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  label="Месяц"
                  options={month}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.group}>
          <h3>Электричество</h3>
          <Controller
            name="voltageLevel"
            control={control}
            render={({ field }) => (
              <CustomSelect
                label="Уровень напряжения"
                options={voltageLevels}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="maxPower"
            control={control}
            render={({ field }) => (
              <CustomSelect
                label="Диапазон максимальной мощности"
                options={maxPowers}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <div className={styles.fieldContainer}>
            <CustomInput
              label="Объем электроэнергии (кВт/ч)"
              {...register("energyVolume", { valueAsNumber: true })}
            />
            <CustomInput
              label="Объем мощности (кВт)"
              {...register("powerVolume", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className={styles.formBottom}>
          <CustomButton disabled={isSubmitting}>
            {isSubmitting ? "Вычисляем..." : "Рассчитать"}
          </CustomButton>
        </div>
      </form>
      <p>{result?.cost3CK}</p>
      <p>{result?.cost4CK}</p>
    </div>
  );
}
