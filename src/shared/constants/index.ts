import { ISliderCard, Option } from "../types";

export const cards: ISliderCard[] = [
  { number: "5+", text: "тарифов" },
  { number: "1000+", text: "подключившихся" },
  { number: "20 лет", text: "на рынке" },
  { number: "5+", text: "тарифов" },
  { number: "5+", text: "тарифов" },
];

export const years: Option[] = [
  { id: "0", name: "2016" },
  { id: "1", name: "2017" },
  { id: "2", name: "2018" },
  { id: "3", name: "2019" },
  { id: "4", name: "2020" },
  { id: "5", name: "2021" },
  { id: "6", name: "2022" },
  { id: "7", name: "2023" },
  { id: "8", name: "2024" },
  { id: "9", name: "2025" },
];

export const month: Option[] = [
  { id: "0", name: "Январь" },
  { id: "1", name: "Февраль" },
  { id: "2", name: "Март" },
  { id: "3", name: "Апрель" },
  { id: "4", name: "Май" },
  { id: "5", name: "Июнь" },
  { id: "6", name: "Июль" },
  { id: "7", name: "Август" },
  { id: "8", name: "Сентябрь" },
  { id: "9", name: "Октябрь" },
  { id: "10", name: "Ноябрь" },
  { id: "11", name: "Декабрь" },
];

export const voltage: Option[] = [
  { id: "0", name: "Высокое напряжение (110 КВ и выше от шин)" },
  { id: "1", name: "Высокое напряжение (110 КВ и выше)" },
  { id: "2", name: "Среднее напряжение первого уровня (35 КВ)" },
  { id: "3", name: "Среднее напряжение второго уровня (20-1 КВ)" },
  { id: "4", name: "Низкое напряжение (0.4 КВ и ниже)" },
];

export const power: Option[] = [
  { id: "0", name: "менее 150 кВт" },
  { id: "1", name: "150 кВт - 670 кВт" },
  { id: "2", name: "670 кВт - 10 МВт" },
  { id: "3", name: "не менее 10 МВт" },
];
