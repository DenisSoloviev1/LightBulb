export enum VoltageLevel {
  HIGH = "HIGH", // Высокое напряжение (110 КВ и выше)
  MEDIUM_LEVEL_ONE = "MEDIUM_LEVEL_ONE", // Среднее напряжение первого уровня (35 КВ)
  MEDIUM_LEVEL_TWO = "MEDIUM_LEVEL_TWO", // Среднее напряжение второго уровня (20-1 КВ)
  LOW = "LOW", // Низкое напряжение (0.4 КВ и ниже)
}

export interface ICalc {
  year: number;
  month: number;
  voltageLevel: string;
  maxPower: number;
  energyVolume?: number | null;
  powerVolume?: number | null;
  hourlyConsumption: {
    weekday?: number[];
    weekend?: number[];
  } | null;
}
