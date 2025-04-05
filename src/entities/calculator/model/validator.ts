import { VoltageLevel } from "@/entities/calculator";
import { z } from "zod";

export const schemaRate = z.object({
  year: z
    .number({ invalid_type_error: "Год обязателен" })
    .int()
    .min(2000, "Некорректный год"),

  month: z
    .number({ invalid_type_error: "Месяц обязателен" })
    .int(),

  voltageLevel: z.nativeEnum(VoltageLevel, {
    errorMap: () => ({ message: "Выберите уровень напряжения" }),
  }),

  maxPower: z
    .number({ invalid_type_error: "Мощность обязательна" })
    .positive("Мощность должна быть положительной"),

  energyVolume: z
    .number({ invalid_type_error: "Объем энергии обязателен" })
    .nonnegative("Энергия не может быть отрицательной"),

  powerVolume: z
    .number({ invalid_type_error: "Объем мощности обязателен" })
    .nonnegative("Мощность не может быть отрицательной"),
});
