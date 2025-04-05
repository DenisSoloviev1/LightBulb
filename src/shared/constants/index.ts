import { ISliderCard, Option } from "../types";
import { VoltageLevel } from "@/entities/calculator";

export const cards: ISliderCard[] = [
  { number: "5+", text: "тарифов" },
  { number: "1000+", text: "подключившихся" },
  { number: "20 лет", text: "на рынке" },
  { number: "5+", text: "тарифов" },
  { number: "5+", text: "тарифов" },
];

export const years: Option[] = [
  // { id: "0", value: 2023, name: "2023" },
  { id: "1", value: 2024, name: "2024" },
  // { id: "2", value: 2025, name: "2025" },
];

export const month: Option[] = [
  { id: "0", value: 1, name: "Январь" },
  { id: "1", value: 2, name: "Февраль" },
  { id: "2", value: 3, name: "Март" },
  { id: "3", value: 4, name: "Апрель" },
  { id: "4", value: 5, name: "Май" },
  { id: "5", value: 6, name: "Июнь" },
  { id: "6", value: 7, name: "Июль" },
  { id: "7", value: 8, name: "Август" },
  { id: "8", value: 9, name: "Сентябрь" },
  { id: "9", value: 10, name: "Октябрь" },
  { id: "10", value: 11, name: "Ноябрь" },
  { id: "11", value: 12, name: "Декабрь" },
];

export const voltageLevels: Option[] = [
  {
    id: "0",
    value: VoltageLevel.HIGH_FROM_BUS,
    name: "Высокое напряжение (110 КВ и выше от шин)",
  },
  {
    id: "1",
    value: VoltageLevel.HIGH,
    name: "Высокое напряжение (110 КВ и выше)",
  },
  {
    id: "2",
    value: VoltageLevel.MEDIUM_LEVEL_ONE,
    name: "Среднее напряжение первого уровня (35 КВ)",
  },
  {
    id: "3",
    value: VoltageLevel.MEDIUM_LEVEL_TWO,
    name: "Среднее напряжение второго уровня (20-1 КВ)",
  },
  {
    id: "4",
    value: VoltageLevel.LOW,
    name: "Низкое напряжение (0.4 КВ и ниже)",
  },
];

export const maxPowers: Option[] = [
  { id: "0", value: 50, name: "менее 150 кВт" },
  { id: "1", value: 500, name: "150 кВт - 670 кВт" },
  { id: "2", value: 5000, name: "670 кВт - 10 МВт" },
  { id: "3", value: 50000, name: "не менее 10 МВт" },
];
