import { z } from "zod";

export const schemaRate = z.object({
  year: z.string().min(1, "Выберите год"),
  month: z.string().min(1, "Выберите месяц"),
  voltage: z.string().min(1, "Выберите напряжение"),
  power: z.string().min(1, "Выберите мощность"),
});