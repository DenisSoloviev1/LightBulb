"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IResult, schemaRate } from "@/entities/calculator";
import { VoltageLevel, calcRate } from "@/entities/calculator";
import { CustomButton, CustomInput, CustomSelect } from "@/shared/ui";
import { years, month, voltageLevels, maxPowers } from "@/shared/constants";
import styles from "./page.module.scss";
import toast from "react-hot-toast";
import { useState } from "react";
import { HourlyLoadData, HourlyLoadTable } from "@/widjets/HourlyLoadTable";

type FormState = {
  year: number;
  month: number;
  voltageLevel: VoltageLevel;
  maxPower: number;
  energyVolume: number | null;
  powerVolume: number | null;
};

export default function CalculatorPage() {
  const [result, setResult] = useState<IResult>();
  const [showHourlyLoad, setShowHourlyLoad] = useState(false);
  const [hourlyLoadData, setHourlyLoadData] = useState<HourlyLoadData[]>(
    Array.from({ length: 24 }, (_, i) => ({
      hour: i + 1,
      workday: 0,
      weekend: 0,
    }))
  );

  const handleLoadDataChange = (data: HourlyLoadData[]) => {
    setHourlyLoadData(data);
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormState>({
    resolver: zodResolver(schemaRate),
    mode: "onChange",
    defaultValues: {
      year: 0,
      month: 1,
      voltageLevel: VoltageLevel.LOW,
      maxPower: 0,
      energyVolume: null,
      powerVolume: null,
    },
  });

  const prepareRequestData = (data: FormState) => {
    if (showHourlyLoad) {
      return {
        year: data.year,
        month: data.month,
        voltageLevel: data.voltageLevel,
        maxPower: data.maxPower,
        hourlyConsumption: {
          weekday: hourlyLoadData.map((item) => item.workday),
          weekend: hourlyLoadData.map((item) => item.weekend),
        },
        energyVolume: null,
        powerVolume: null,
      };
    } else {
      return {
        year: data.year,
        month: data.month,
        voltageLevel: data.voltageLevel,
        maxPower: data.maxPower,
        energyVolume: data.energyVolume,
        powerVolume: data.powerVolume,
        hourlyConsumption: null,
      };
    }
  };

  const onSubmit = async (data: FormState) => {
    try {
      const requestData = prepareRequestData(data);
      const result = await calcRate(requestData);
      setResult(result);
      console.log(result);
      toast.success("Расчет выполнен успешно");
      reset();
    } catch (error) {
      toast.error("Ошибка при расчете");
      console.error(error);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className={styles.section}>
      <h1 className={styles.mainTitle}>Калькулятор тарифов</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.title}>
          <h2>Калькулятор стоимости электроэнергии</h2>
          <p>Сравните ценовые категории за несколько кликов</p>
        </div>

        {/* Период расчета */}
        <div className={styles.group}>
          <h3>Период расчета</h3>
          <div className={styles.fieldContainer}>
            <Controller
              name="year"
              control={control}
              render={({ field, fieldState }) => (
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
              render={({ field, fieldState }) => (
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

        {/* Параметры электроэнергии */}
        <div className={styles.group}>
          <h3>Электричество</h3>
          <div className={styles.fieldContainer}>
            <Controller
              name="voltageLevel"
              control={control}
              render={({ field, fieldState }) => (
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
              render={({ field, fieldState }) => (
                <CustomSelect
                  label="Диапазон максимальной мощности"
                  options={maxPowers}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        {/* Почасовые данные */}
        <div className={styles.group}>
          <h3>Указать почасовую нагрузку для более точного подбора?</h3>
          <CustomButton onClick={() => setShowHourlyLoad(!showHourlyLoad)}>
            {showHourlyLoad ? "Скрыть" : "Открыть"}
          </CustomButton>
        </div>

        {showHourlyLoad ? (
          <HourlyLoadTable
            loadData={hourlyLoadData}
            onLoadDataChange={handleLoadDataChange}
          />
        ) : (
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
        )}

        {/* Кнопка расчета */}
        <div className={styles.formBottom}>
          <CustomButton type="submit" disabled={isSubmitting || hasErrors || !isValid}>
            Рассчитать
          </CustomButton>
        </div>
      </form>

      {/* Результаты расчета */}
      {result && (
        <div className={styles.resultContainer}>
          <h2>Результаты расчета электроэнергии</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <h3>Потребление</h3>
              <p>
                <span>Электроэнергия:</span>{" "}
                {result.energyVolume?.toLocaleString() ?? "Н/Д"} кВт·ч
              </p>
              <p>
                <span>Мощность:</span>{" "}
                {result.powerVolume?.toLocaleString() ?? "Н/Д"} кВт
              </p>
            </div>

            <div className={`${styles.card} ${styles.recommendationCard}`}>
              <h3>Рекомендация</h3>
              <p>Выгоднее: {result.recommendedCategory ?? "Н/Д"}</p>
              <p>
                <span>Экономия:</span>{" "}
                {result.savings?.toLocaleString("ru-RU", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) ?? "Н/Д"}{" "}
                руб.
              </p>
            </div>

            <div className={styles.priceCard}>
              <h3>3 ценовая категория</h3>
              <p>
                {result.cost3CK?.toLocaleString("ru-RU", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) ?? "Н/Д"}{" "}
                руб.
              </p>
            </div>

            <div className={styles.priceCard}>
              <h3>4 ценовая категория</h3>
              <p>
                {result.cost4CK?.toLocaleString("ru-RU", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) ?? "Н/Д"}{" "}
                руб.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
