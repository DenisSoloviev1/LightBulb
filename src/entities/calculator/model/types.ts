export enum VoltageLevel {
  HIGH_FROM_BUS = "HIGH_FROM_BUS", // Высокое напряжение (110 КВ и выше от шин)
  HIGH = "HIGH", // Высокое напряжение (110 КВ и выше)
  MEDIUM_LEVEL_ONE = "MEDIUM_LEVEL_ONE", // Среднее напряжение первого уровня (35 КВ)
  MEDIUM_LEVEL_TWO = "MEDIUM_LEVEL_TWO", // Среднее напряжение второго уровня (20-1 КВ)
  LOW = "LOW", // Низкое напряжение (0.4 КВ и ниже)
}

export type ICalc = {
  year: number;
  month: number;
  voltageLevel: VoltageLevel;
  maxPower: number;
  energyVolume: number;
  powerVolume: number;
};
